import Post from "./Post";
import {
  Button,
  Container,
  Content,
  Form,
  Icon,
  Profile,
  Timeline,
  Top,
} from "./styles";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import { Loader } from "../../components/Loading/styles";
import { useNavigate } from "react-router-dom";
import LoaderButton from "../../components/Loading/LoadingButton";

export default function Home() {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userPost, setUserPost] = useState({
    url: "",
    description: "",
  });

  const URL = "https://localhost:4000/posts";

  function handdlePost(e) {
    e.preventDefault();
    setLoading(true);

    const promise = axios.post(
      URL,
      { ...userPost },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promise.then((res) => {
      setUserPost(res.data);
      setLoading(false);
      navigate("/timeline");
    });
    promise.catch((err) => {
      console.log("Erro não foi possível postar");
    });
  }

  function changeInput(e) {
    setUserPost({ ...userPost, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Timeline>
        <Top>Timeline</Top>
        <Content>
          <Profile className="icon-profile">
            <Icon />
          </Profile>
          <Form>
            <p>What are you going to share today?</p>
            <input
              type="text"
              placeholder="http://..."
              value={userPost.url}
              name="url"
              onChange={changeInput}
            />
            <input
              className="body"
              type="text"
              placeholder="Awesome article about #javascript"
              value={userPost.description}
              name="description"
              onChange={changeInput}
            />
            {loading === true ? (
              <Button><LoaderButton /></Button>
            ) : (
              <Button onClick={handdlePost}>Publish</Button>
            )}
          </Form>
        </Content>
        <Post />
      </Timeline>
    </Container>
  );
}
