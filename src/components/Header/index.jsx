import { RiSearchLine, RiArrowDownSLine } from "react-icons/ri";

import { Avatar, Container, Input, Logo, Profile, SearchBar } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo>linkr</Logo>

      <SearchBar>
        <Input placeholder="Search for people" />

        <RiSearchLine />
      </SearchBar>

      <Profile>
        <RiArrowDownSLine fontSize={40} color="white" />

        <Avatar />
      </Profile>
    </Container>
  );
}
