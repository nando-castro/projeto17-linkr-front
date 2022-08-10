import Logo from "../logo/Logo";
import { Container, Icon, Profile } from "./styles";

export default function Header() {
  return (
    <Container>
      <Logo />
      <Profile>
        <Icon />
      </Profile>
    </Container>
  );
}
