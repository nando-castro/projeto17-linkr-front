import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loading/styles";
import Post from "../../components/PostBox/Post";
import { useAuth } from "../../context/auth";
import FormPost from "./FormPost";
import { Container, Message, Posts, Timeline, Top } from "./styles";

export default function Home() {
  const { timeline, setTimeline } = useAuth();
  const [loading, setLoading] = useState(false);
  let page = 1;
  const URL = `http://localhost:4000/timeline`;

  useEffect(() => {
    function getPostsTimeline() {
      setLoading(true);
      const promise = axios.get(URL);
      promise
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
          setLoading(false)
        });
    }
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
          <Container>
            <Message>Loading...</Message>
            <br></br>
            <Loader />
          </Container>
        ) : timeline.length === 0 ? (
          <Message>There are no posts yet</Message>
        ) : (
          <Posts>{renderTimeline()}</Posts>
        )}
      </Timeline>
    </Container>
  );
}
