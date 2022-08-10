import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { RiSearchLine, RiArrowDownSLine } from "react-icons/ri";

import { api } from "../../services/api";

import {
  Avatar,
  Container,
  Logo,
  Profile,
  SearchBar,
  SearchBarContainer,
  SearchUser,
  UserList,
} from "./styles";

export function Header() {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/user/2").then(({ data }) => {
      setUsers(data);
    });
  }, []);

  function handleSearchUser(query) {
    if (!query) return setFilteredUsers([]);

    setFilteredUsers(
      users.filter((user) =>
        user.username.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  return (
    <Container>
      <Logo>linkr</Logo>

      <SearchBarContainer>
        <SearchBar>
          <DebounceInput
            debounceTimeout={300}
            minLength={3}
            onChange={(event) => handleSearchUser(event.target.value)}
            placeholder="Search for people"
            style={{
              border: "none",
              background: "none",
              paddingInline: "0.5rem",
              width: "100%",
              marginRight: "1rem",
            }}
          />

          <RiSearchLine />
        </SearchBar>

        <UserList>
          {filteredUsers.map((user) => (
            <SearchUser key={user}>
              <img
                src={user.picture}
                alt="user profile"
                className="searchUserImage"
              />

              <span>{user.username}</span>
            </SearchUser>
          ))}
        </UserList>
      </SearchBarContainer>

      <Profile>
        <RiArrowDownSLine fontSize={40} color="white" />

        <Avatar />
      </Profile>
    </Container>
  );
}
