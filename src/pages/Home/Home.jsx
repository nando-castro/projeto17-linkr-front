import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Header } from "../../components/Header";
import Post from "../../components/PostBox/Post";
import { useAuth } from "../../context/auth";
import FormPost from "./FormPost";
import {
  Container,
  Posts,
  Timeline,
  Top,
} from "./styles";

export default function Home() {
  const { timeline, setTimeline } = useAuth();

  const URL = `http://localhost:4000/timeline`;

  useEffect(() => {
    function getPostsTimeline() {
      const promise = axios.get(URL);
      promise
        .then((res) => {
          setTimeline(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...Parece que algo deu errado!",
          });
          console.log(err);
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
        <Posts>{renderTimeline()}</Posts>
      </Timeline>
    </Container>
  );
}
