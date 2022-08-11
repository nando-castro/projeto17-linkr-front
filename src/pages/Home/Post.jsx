import {
  Article,
  Body,
  Container,
  Description,
  Icon,
  Image,
  Link,
  Message,
  Name,
  Posts,
  Profile,
  Title,
  Url,
} from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";

export default function Post() {
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
          console.log(err);
        });
    }
    getPostsTimeline();
  }, []);

  function openUrl(){
    window.open(`${timeline.url}`);
  }

  function renderTimeline() {
    return timeline.map((i, index) => (
      <Posts key={index}>
        <Profile>
          <Icon src={i.picture} />
        </Profile>
        <Body>
          <Name>{i.username}</Name>
          <Description>{i.description}</Description>
          <Link key={index} onClick={openUrl}>
            <Title>Google</Title>
            <Article>{i.description}</Article>
            <Url>{i.url}</Url>
            <Image src={i.picture} />
          </Link>
        </Body>
      </Posts>
    ));
  }

  return (
    <>
      {timeline.length > 0 ? (
        <Container>{renderTimeline()}</Container>
      ) : (
        <Container>
          <Message>There are no posts yet</Message>
        </Container>
      )}
    </>
  );
}
