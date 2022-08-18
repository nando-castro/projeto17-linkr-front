import { useCallback, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";

import { HashtagBox } from "../../components/HashtagBox/HashtagBox";
import { Header } from "../../components/Header";
import Loading from "../../components/Loading/Loading";
import { Loader } from "../../components/Loading/styles";
import { LoadingPost } from "../../components/LoadingPost";
import Post from "../../components/PostBox/Post";
import { useAuth } from "../../context/auth";
import { api } from "../../services/api";
import {
  Content,
  Profile,
  Icon,
  Posts,
  Container,
  UserDetails,
  Main,
  Timeline,
  Top,
  LoaderWrapper,
  Message,
  TimelineWrapper,
  InfiniteScrollWrapper,
} from "./styles";

export function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { userToken, user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [userPage, setUserPage] = useState({});
  const [posts, setPosts] = useState([]);

  const [Nextpage, setNextPage] = useState(1);

  const hasMore = useRef(true);

  function getPostsByUser(page = 1) {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    if (!userToken || userToken === "null") {
      navigate("/");
      return;
    }
    api
      .get(`/user/${id}?page=${page}`, config)
      .then((response) => {
        if (response.status === 200) {
          const { data } = response;
          hasMore.current = data.hasMorePosts;
          const userData = data.posts[0];
          const user = {
            userName: userData.username,
            userPicture: userData.picture,
          };
          setUserPage(user);
          setPosts([...posts, ...data.posts]);
          setLoading(false);
        }
      })
      .catch((err) => {
        localStorage.setItem("token", null);
        navigate("/");
      });
  }

  const handleLoadMore = useCallback(
    (page) => {
      if (!userToken || userToken === "null") {
        navigate("/");
        return;
      }

      if (isFetching) return;
      setIsFetching(false);

      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };

      api
        .get(`/user/${id}?page=${page}`, config)
        .then((res) => {
          hasMore.current = res.data.hasMorePosts;
          setPosts([...posts, ...res.data.posts]);
          setNextPage((prev) => prev + 1);

          setIsFetching(false);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title:
              "An error occured while trying to fetch the posts, please refresh the page",
          });
        });
    },
    [isFetching, posts, hasMore]
  );

  useEffect(() => {
    getPostsByUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  if (!user) {
    return <Loading />;
  }
  return (
    <Container>
      <Header />
      <Timeline style={{ height: "auto" }}>
        <Top>{userPage.userName}'s posts</Top>
        {loading ? (
          <LoaderWrapper>
            <Loader />
            <Message>Loading...</Message>
            <br></br>
          </LoaderWrapper>
        ) : posts?.length === 0 ? (
          <Message>There are no posts yet</Message>
        ) : (
          <TimelineWrapper>
            <InfiniteScrollWrapper>
              <InfiniteScroll
                pageStart={Nextpage}
                loadMore={handleLoadMore}
                hasMore={hasMore.current}
                loader={<LoadingPost key={0} />}
                style={{
                  width: "100%",
                }}
              >
                <Posts>
                  {posts?.map((post) => (
                    <Post
                      key={post.postId}
                      picture={post.picture}
                      username={post.username}
                      description={post.description}
                      url={post.url}
                      urlDescription={post.urlDescription}
                      urlTitle={post.urlTitle}
                      urlImage={post.urlImage}
                      writerId={post.userId}
                      id={post.postId}
                      getPosts={getPostsByUser}
                      likesUsernames={post.likesUsername}
                      likes={post.likes}
                    />
                  ))}
                </Posts>
              </InfiniteScroll>
              <HashtagBox />
            </InfiniteScrollWrapper>
          </TimelineWrapper>
        )}
      </Timeline>
    </Container>
  );
}
