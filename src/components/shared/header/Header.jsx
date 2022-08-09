import Logo from "../logo/Logo";
import { Container, Profile } from "./styles";

export default function Header() {
  return (
    <Container>
      <Logo />
      <Profile>
        <div></div>
      </Profile>
    </Container>
  );
}
