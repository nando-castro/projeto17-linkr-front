import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Header } from "../../components/Header";
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
} from "./styles";

export default function Home() {
  const { timeline, setTimeline } = useAuth();
  const [loading, setLoading] = useState(false);
  function getPostsTimeline() {
    setLoading(true);
    api
      .get(`/timeline`)
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
        setLoading(false);
      });
  }
  useEffect(() => {
    getPostsTimeline();
  }, []);

  function renderTimeline() {
    return timeline.map((i, index) => (
      <Post
        key={index}
        picture={i.picture}
        username={i.username}
        description={i.description}
        url={i.url}
        urlDescription={i.urlDescription}
        urlTitle={i.urlTitle}
        urlImage={i.urlImage}
        likes={i.likes}
        id={i.postId}
        writerId={i.userId}
        likesUsernames={i.likesUsername}
        getPosts={getPostsTimeline}
      />
    ));
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
          <Posts>{renderTimeline()}</Posts>
        )}
      </Timeline>
    </Container>
  );
}
