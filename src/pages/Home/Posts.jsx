import { Container, Message } from "./styles";
import axios from "axios";

import { useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Loader } from "../../components/Loading/styles";
import Post from "../../components/PostBox/Post";
import Swal from "sweetalert2";
import { api } from "../../services/api";

export default function PostScreen() {
  const { timeline, setTimeline } = useAuth();

  useEffect(() => {
    function getPostsTimeline() {
      api.get(`/timeline`)
        .then((res) => {
          setTimeline(res.data);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title:
              "An error occured while trying to fetch the posts, please refresh the page",
          });
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
        id={i.postId}
      />
    ));
  }

  return (
    <>
      {timeline.length > 0 ? (
        <Container>{renderTimeline()}</Container>
      ) : (
        <Container>
          <Message>Loading...</Message>
          <br></br>
          <Loader />
        </Container>
      )}
    </>
  );
}
