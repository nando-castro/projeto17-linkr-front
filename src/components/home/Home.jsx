import Header from "../shared/header/Header";
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
import { ReactTinyLink } from "react-tiny-link";

export default function HomeScreen() {
  return (
    <Container>
      <Header />
      <Timeline>
        <Top>Timeline</Top>
        <Content>
          <Profile className="icon-profile">
            <Icon />
          </Profile>
          <Form>
            <p>What are you going to share today?</p>
            <input placeholder="http://..." />
            <input
              placeholder="Awesome article about #javascript"
              className="body"
            />
            <Button>Publish</Button>
          </Form>
        </Content>
        <Post />
      </Timeline>
    </Container>
  );
}
