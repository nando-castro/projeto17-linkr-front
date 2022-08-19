import { useEffect, useRef, useState } from "react";
import { DebounceInput } from "react-debounce-input";

import { RiSearchLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { Link } from "react-router-dom";

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
  Menu,
} from "./styles";

export function Header() {
  const navigate = useNavigate();

  const [filteredUsers, setFilteredUsers] = useState([]);
  const { userToken, setUserToken, hoverProfile, setHoverProfile, user } =
    useAuth();
  const hoverProfileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        hoverProfileRef.current &&
        !hoverProfileRef.current.contains(event.target)
      ) {
        setHoverProfile(false);
      }
    }

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSearchUser(query) {
    if (!query) return setFilteredUsers([]);

    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    api
      .post("/search", { username: query }, config)
      .then(({ data }) => {
        setFilteredUsers(data);
      })
      .catch((err) => {});
  }

  function logout() {
    setUserToken(null);
    navigate("/");
  }

  return (
    <Container>
      <Logo onClick={() => navigate("/timeline")}>linkr</Logo>

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
            <Link key={user.username} to={`/user/${user.id}`}>
              <SearchUser>
                <img
                  src={user.picture}
                  alt="user profile"
                  className="searchUserImage"
                />

                <span className="search-username">{user.username}</span>

                {user.isFollowing && (
                  <span className="search-following"> • following</span>
                )}
              </SearchUser>
            </Link>
          ))}
        </UserList>
      </SearchBarContainer>

      <Profile
        hoverProfile={hoverProfile}
        setHoverProfile={setHoverProfile}
        ref={hoverProfileRef}
      >
        <RiArrowUpSLine
          fontSize={40}
          color="white"
          display={hoverProfile ? "block" : "none"}
          onClick={() => setTimeout(() => setHoverProfile(false), 100)}
        />
        <RiArrowDownSLine
          fontSize={40}
          color="white"
          display={hoverProfile ? "none" : "block"}
          onClick={() => setTimeout(() => setHoverProfile(true), 100)}
        />

        <Avatar
          src={user.userPicture}
          onClick={() => setTimeout(() => setHoverProfile(!hoverProfile), 100)}
        />

        <Menu hoverProfile={hoverProfile} onClick={() => logout()}>
          Logout
        </Menu>
      </Profile>
    </Container>
  );
}
