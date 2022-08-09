import { Container, Title, Content } from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export function HashtagBox() {
  const [hashtags, setHashtags] = useState();

//   useEffect(() => {
//     axios
//       .get(`https://linkr1.herokuapp.com/hashtags`)
//       .then((res) => setHashtags(res.data))
//       .catch((err) => console.log(err));
//   }, []);
  const hashtag = [
    "javascript",
    "react",
    "react-native",
    "material",
    "mobile",
    "web-dev",
    "mobile",
    "css",
    "html",
    "node",
    "sql",
  ];
  return (
    <Container>
      <Title>
        <h1>trending</h1>
      </Title>
      <Content>
        {hashtags?.map((hashtag, i) => (
          <Link to={`/hashtag/:${hashtag}`} key={i}>
            <p># {hashtag}</p>
          </Link>
        ))}
      </Content>
    </Container>
  );
}
