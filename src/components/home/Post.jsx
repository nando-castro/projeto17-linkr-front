import {
  Body,
  Container,
  Description,
  Icon,
  Name,
  Posts,
  Profile,
} from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Post() {
  const [timeline, setTimeline] = useState([]);

  const URL = `http://localhost:4000/timeline`;

  useEffect(() => {
    function getPostsTimeline() {
      const promise = axios.get(URL);
      promise
        .then((res) => {
          setTimeline(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getPostsTimeline();
  }, []);

  function renderTimeline() {
    return timeline.map((i, index) => (
      <Posts key={index}>
        <Profile>
          <Icon src={i.picture} />
        </Profile>
        <Body>
          <Name>{i.username}</Name>
          <Description>{i.description}</Description>
        </Body>
      </Posts>
    ));
  }

  return (
    <Container>
      <Posts>{renderTimeline()}</Posts>
    </Container>
  );
}
