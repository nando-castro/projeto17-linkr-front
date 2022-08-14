import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../context/auth";
import { Button, ContentForm, Form, Icon, Profile, Title } from "./styles";

export default function FormPost() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [enableButton, setEnableButton] = useState(true);
  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });
  const [post, setPost] = useState({
    url: "",
    description: "",
  });

  const URL = `http://localhost:4000/posts`;

  function createPost(e) {
    e.preventDefault();
    setEnableButton(false);

    const promise = axios.post(
      URL,
      { ...post },
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MDQzOTY3OCwiZXhwIjoxNjYwNDQzMjc4fQ.oCn_H9Y_-e64lfuwp9fDLkjTNSw9ZvBEikq2jemkqPc`,
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
      //navigate("/timeline");
      window.location.reload();
    });
    promise.catch((err) => {
      /* if (err.response.status === 422) {
        setEnableButton(true);
        alert("Preencha os campos com dados válidos");
        return;
      } */
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Houve um erro ao publicar seu link",
      });
      setEnableButton(true);
    });
  }

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

        {enableButton === true ? (
          <Button onClick={createPost}>Publish</Button>
        ) : (
          <Button>Publishing...</Button>
        )}
      </Form>
    </ContentForm>
  );
}
