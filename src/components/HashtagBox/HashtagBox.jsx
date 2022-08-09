import {Container, Title, Content} from "./styles";
import { Link } from "react-router-dom";

export function HashtagBox() {
    const hashtags = ["javascript", "react", "react-native", "material", "mobile", "web-dev", "mobile", "css", "html", "node", "sql"]
  return (
    <Container>
        <Title><h1>trending</h1></Title>
        <Content>
            {hashtags.map((hashtag, i)=>
            <Link to={`/hashtag/:${hashtag}`} key={i}>
                <p># {hashtag}</p>
            </Link>
            )}
            
        </Content>
    </Container>
  );
}