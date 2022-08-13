import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../context/auth";
import { Button, ContentForm, Form, Icon, Profile, Title } from "./styles";

export default function FormPost() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [post, setPost] = useState({
    url: "",
    description: "",
  });

  const URL = `http://localhost:4000/posts`;

  function createPost(e) {
    e.preventDefault();

    const promise = axios.post(
      URL,
      { ...post },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    promise.then((res) => {
      setPost(res.data);
      alert("post sucess");
      navigate("/timeline");
    });
    promise.catch((err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
      });
    });
  }

  function changeInput(e) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  return (
    <ContentForm>
      <Profile>
        <Icon />
      </Profile>
      <Form>
        <Title>What are you going to share today?</Title>
        <input
          type="text"
          placeholder="http://..."
          value={post.url}
          name="url"
          onChange={changeInput}
        />
        <input
          className="article"
          type="text"
          placeholder="Awesome article about #javascript"
          value={post.description}
          name="description"
          onChange={changeInput}
        />
        <Button onClick={createPost}>Publish</Button>
      </Form>
    </ContentForm>
  );
}
