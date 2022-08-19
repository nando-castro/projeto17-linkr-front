import useInterval from "use-interval";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import InfiniteScroll from "react-infinite-scroller";

import { HashtagBox } from "../../components/HashtagBox/HashtagBox";
import { Header } from "../../components/Header";
import Loading from "../../components/Loading/Loading";
import { Loader } from "../../components/Loading/styles";
import Post from "../../components/PostBox/Post";
import { LoadingPost } from "../../components/LoadingPost";
import { useAuth } from "../../context/auth";
import { api } from "../../services/api";
import FormPost from "./FormPost";
import {
  Container,
  Message,
  Posts,
  Timeline,
  Top,
  LoaderWrapper,
  TimelineWrapper,
  UpdateContent,
  InfiniteScrollWrapper,
} from "./styles";
import { BsArrowRepeat } from "react-icons/bs";

export default function Home() {
  const { timeline, setTimeline, user, userToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [newPosts, setNewPosts] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [Nextpage, setNextPage] = useState(1);
  const hasMorePosts = useRef(true);
  const navigate = useNavigate();

  function getPostsTimeline(page = 1) {
    if (loading) return;
    setLoading(true);
    if (!userToken || userToken === "null") {
      navigate("/");
      return;
    }
    api
      .get(`/timeline?page=${page}`)
      .then((res) => {
        hasMorePosts.current = res.data.hasMorePosts;
        setTimeline([...res.data.posts]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title:
            "An error occured while trying to fetch the posts, please refresh the page",
        });
        setLoading(false);
      });
  }

  console.log(Nextpage);

  const handleLoadMore = useCallback(
    (page) => {
      if (!userToken || userToken === "null") {
        navigate("/");
        return;
      }

      if (isFetching) return;
      setIsFetching(false);


      api
        .get(`/timeline?page=${page}&postId=${timeline[0].postId}`)
        .then((res) => {
          hasMorePosts.current = res.data.hasMorePosts;
          setTimeline([...timeline, ...res.data.posts]);
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
    [isFetching, timeline, hasMorePosts]
  );

  useEffect(() => {
    getPostsTimeline();
  }, []);

  const getNewPosts = () => {
    api
      .get(`timeline/${timeline[0].postId}`)
      .then((res) => {
        console.log(res.data.posts);
        setNewPosts(res.data.posts.length);
      })
      .catch((err) => {
        console.log(err);
      });
    /* if (posts.length > 0) {
      let lastPost = posts[0];
      let firstPosttimeline = timeline[0];
      setNewPosts(lastPost.postId - firstPosttimeline.postId);
    } */
  };

  function loadNewPosts() {
    api
      .get(`timeline/${timeline[0].postId}`)
      .then((res) => {
        setTimeline([...res.data.posts, ...timeline]);
        setNewPosts(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useInterval(() => {
    getNewPosts();
  }, 15000);

  if (!user) {
    return <Loading />;
  }

  return (
    <Container>
      <Header />
      <Timeline style={{ height: "auto" }}>
        <Top>timeline</Top>
        <FormPost />
        {newPosts > 0 ? (
          <UpdateContent onClick={loadNewPosts}>
            {newPosts} new posts, load more! <BsArrowRepeat className="icon" />
          </UpdateContent>
        ) : (
          <></>
        )}
        {loading ? (
          <LoaderWrapper>
            <Loader />
            <Message>Loading...</Message>
            <br></br>
          </LoaderWrapper>
        ) : timeline?.length === 0 ? (
          <Message>There are no posts yet</Message>
        ) : (
          <TimelineWrapper>
            <InfiniteScrollWrapper>
              <InfiniteScroll
                pageStart={Nextpage}
                loadMore={handleLoadMore}
                hasMore={hasMorePosts.current}
                loader={<LoadingPost key={0} />}
                style={{
                  width: "100%",
                }}
              >
                <Posts>
                  {timeline?.map((post, index) => (
                    <Post
                      key={index}
                      picture={post.picture}
                      username={post.username}
                      description={post.description}
                      url={post.url}
                      urlDescription={post.urlDescription}
                      urlTitle={post.urlTitle}
                      urlImage={post.urlImage}
                      writerId={post.userId}
                      id={post.postId}
                      getPosts={getPostsTimeline}
                      likesUsernames={post.likesUsername}
                      likes={post.likes}
                      commentsCount={post.commentsCount}
                      shares={post.shares}
                      reposted={post.sharedBy}
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
