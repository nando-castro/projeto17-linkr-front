import { Header } from "../../components/Header";
import Home from "./Home";
import { Container } from "./styles";

export default function HomeScreen() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}
