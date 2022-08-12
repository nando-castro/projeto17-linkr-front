import { Container, Title, Content } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Loading from "../Loading/Loading";
export function HashtagBox() {
  const [hashtags, setHashtags] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    api
      .get("/hashtags")
      .then((res) => {
        setHashtags(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  }, []);
  if (!hashtags) {
    return (
      <Container>
        <Title>
          <h1>trending</h1>
        </Title>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        <h1>trending</h1>
      </Title>
      <Content>
        {hashtags?.map((hashtag, i) => (
          <Link to={`/hashtag/${hashtag.name}`} key={i}>
            <p># {hashtag.name}</p>
          </Link>
        ))}
      </Content>
    </Container>
  );
}
