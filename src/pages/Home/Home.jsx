import { useEffect, useState } from "react";
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
} from "./styles";

export default function Home() {
  const { timeline, setTimeline, setUserToken, user, userToken, update } =
    useAuth();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  let page = 1;
  function getPostsTimeline() {
    setLoading(true);
    if (!userToken || userToken === "null") {
      navigate("/");
      return;
    }
    api
      .get(`/timeline?page=${page}`)
      .then((res) => {
        setTimeline(res.data);
        setLoading(false);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title:
            "An error occured while trying to fetch the posts, please refresh the page",
        });
      });

    setLoading(false);
  }
  useEffect(() => {
    getPostsTimeline();
  }, [update]);

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
