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

export default function HomeScreen() {
  return (
    <Container>
      <Header />
      <Timeline>
        <Top>Timeline</Top>
        <Content>
          <Profile>
            <Icon></Icon>
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
