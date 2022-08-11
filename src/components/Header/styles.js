import styled from "styled-components";

export const Container = styled.header`
  background-color: #151515;
  display: flex;
  width: 100vw;
  height: 5rem;
  padding-inline: 1rem;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -0.05rem;
  width: 16rem;
  color: #fff;
  span {
    font-weight: normal;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .userList {
    position: absolute;
    left: 0;
    right: 0;
    color: pink;

    margin-top: 2.75rem;
    background-color: blue;
  }
`;

export const UserList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  color: "#515151";

  border-radius: 8px;
  overflow: hidden;
  margin-top: 2rem;
`;

export const SearchBar = styled.label`
  display: flex;
  justify-content: space-between;
  flex: 1;
  z-index: 50;

  padding: 1rem 2rem;
  max-width: 564px;
  align-self: center;
  color: black;
  position: relative;
  background-color: white;
  border-radius: 8px;
`;

export const SearchUser = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  background-color: #e7e7e7;
  overflow: hidden;

  cursor: pointer;

  &:first-of-type {
    padding-top: 2rem;
  }

  img {
    height: 40px;
    width: 40px;
    border-radius: 9999px;
    background-color: red;
  }

  span {
    margin-left: 1rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

export const Avatar = styled.img`
  height: 53px;
  width: 53px;
  border-radius: 9999px;
  background-color: red;
`;
