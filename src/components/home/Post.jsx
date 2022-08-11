import {
  Body,
  Container,
  Description,
  Icon,
  Link,
  Message,
  Name,
  Posts,
  Profile,
} from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { ReactTinyLink } from "react-tiny-link";

export default function Post() {
  const [timeline, setTimeline] = useState([]);

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

  function renderTimeline() {
    return timeline.map((i, index) => (
      <Posts key={index}>
        <Profile>
          <Icon src={i.picture} />
        </Profile>
        <Body>
          <Name>{i.username}</Name>
          <Description>{i.description}</Description>
          <Link>
            <ReactTinyLink
              width={"100%"}
              cardSize="small"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              url={i.url}
            />
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
