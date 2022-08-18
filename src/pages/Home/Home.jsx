import { useEffect, useState } from "react";
import useInterval from "use-interval";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { HashtagBox } from "../../components/HashtagBox/HashtagBox";
import { Header } from "../../components/Header";
import Loading from "../../components/Loading/Loading";
import { Loader } from "../../components/Loading/styles";
import Post from "../../components/PostBox/Post";
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
} from "./styles";
import { BsArrowRepeat } from "react-icons/bs";

export default function Home() {
  const { timeline, setTimeline, user, userToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [newPosts, setNewPosts] = useState(0);
  let currentPage = 1;
  const navigate = useNavigate();

  function getPostsTimeline() {
    if (loading) return;
    if (!userToken || userToken === "null") {
      navigate("/");
      return;
    }
    setLoading(true);

    api
      .get(`/timeline?page=${currentPage}`)
      .then((res) => {
        currentPage++;
        setTimeline([...timeline, ...res.data]);
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

  useEffect(() => {
    getPostsTimeline();
  }, []);

  const getNewPosts = () => {
    api
      .get(`timeline?page=1`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    if (posts.length > 0) {
      let lastPost = posts[0];
      let firstPosttimeline = timeline[0];
      setNewPosts(lastPost.postId - firstPosttimeline.postId);
    }
  };

  function loadNewPosts() {
    api
      .get(`timeline?page=1`)
      .then((res) => {
        setTimeline(res.data);
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
      <Timeline>
        <Top>timeline</Top>
        <FormPost />
        {loading ? (
          <LoaderWrapper>
            <Loader />
            <Message>Loading...</Message>
            <br></br>
          </LoaderWrapper>
        ) : timeline.length === 0 ? (
          <Message>There are no posts yet</Message>
        ) : (
          <TimelineWrapper>
            <Posts>
              {newPosts > 0 ? (
                <UpdateContent onClick={loadNewPosts}>
                  {newPosts} new posts, load more!{" "}
                  <BsArrowRepeat className="icon" />
                </UpdateContent>
              ) : (
                <UpdateContent
                  style={{
                    display: "none",
                  }}
                ></UpdateContent>
              )}
              {timeline?.map((post) => (
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
                  getPosts={getPostsTimeline}
                  likesUsernames={post.likesUsername}
                  likes={post.likes}
                  commentsCount={post.commentsCount}
                />
              ))}
            </Posts>
            <HashtagBox />
          </TimelineWrapper>
        )}
      </Timeline>
    </Container>
  );
}
