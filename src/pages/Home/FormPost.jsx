import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../context/auth";
import { api } from "../../services/api";
import {
  Button,
  ContentButton,
  ContentForm,
  Form,
  Icon,
  Profile,
  Title,
} from "./styles";

export default function FormPost() {
  const navigate = useNavigate();
  const { userToken, user, update, setUpdate, timeline, setTimeline } =
    useAuth();
  const [enableButton, setEnableButton] = useState(true);
  const [post, setPost] = useState({
    url: "",
    description: "",
  });

  //const URL = `https://linkr1.herokuapp.com/posts`;

  const URL = `http://localhost:4000/posts`;

  //const URL = "https://linkr1.herokuapp.com/posts";


  function createPost(e) {
    e.preventDefault();
    setEnableButton(false);

    const promise = axios.post(
      URL,
      { ...post },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );

    if (!validatePost()) {
      setEnableButton(true);
      return;
    }

    promise.then((res) => {
      setEnableButton(true);
      setPost(res.data);
      getPostsTimeline();
    });
    promise.catch((err) => {
      if (err.response.status === 422) {
        Swal.fire("Fill in all fields correctly!");
        setEnableButton(true);
        return;
      }
      Swal.fire({
        icon: "error",
        title: "Houve um erro ao publicar seu link",
      });
      setEnableButton(true);
    });
  }

  function getPostsTimeline() {
    api
      .get(`/timeline?page=1`)
      .then((res) => {
        setTimeline(res.data.posts);
        setPost({
          url: "",
          description: "",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title:
            "An error occured while trying to fetch the posts, please refresh the page",
        });
      });
  }

  useEffect(() => {
    getPostsTimeline();
  }, [update]);

  function validatePost() {
    if (!post.url) {
      Swal.fire("Fill URL field!");
      return;
    }
    return true;
  }

  function changeInput(e) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  return (
    <ContentForm>
      <Profile>
        <Icon src={user.userPicture} />
      </Profile>
      <Form>
        <Title>What are you going to share today?</Title>
        <input
          type="text"
          placeholder="http://..."
          value={post.url || ""}
          name="url"
          onChange={changeInput}
        />
        <input
          className="article"
          type="text"
          placeholder="Awesome article about #javascript"
          value={post.description || ""}
          name="description"
          onChange={changeInput}
        />

        <ContentButton>
          {enableButton === true ? (
            <Button onClick={createPost}>Publish</Button>
          ) : (
            <Button>Publishing...</Button>
          )}
        </ContentButton>
      </Form>
    </ContentForm>
  );
}
