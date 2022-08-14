import styled from "styled-components";

export const Container = styled.header`
  background-color: #151515;
  display: flex;
  width: 100%;
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

  width: calc(100% * 2 / 5);
  z-index: 2;

  .userList {
    position: absolute;
    left: 0;
    right: 0;
    color: pink;

    margin-top: 2.75rem;
  }

  @media (max-width: 611px) {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    right: 0;
    margin: auto;
    justify-self: center;
    align-self: center;
    width: 95%;
  }
`;

export const UserList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  color: "#515151";

  width: 100%;

  border-radius: 8px;
  overflow: hidden;
  margin-top: 2rem;
`;

export const SearchBar = styled.label`
  display: flex;
  justify-content: space-between;
  flex: 1;
  z-index: 50;

  width: 100%;

  padding: 1rem 2rem;
  align-self: center;
  color: black;
  position: relative;
  background-color: white;
  border-radius: 8px;

  @media (max-width: 611px) {
    width: 100%;
  }
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
  width: auto;

  :hover {
    cursor: pointer;
  }
  position: relative;
`;

export const Menu = styled.div`
  z-index: 3;
  position: absolute;
  bottom: -3em;
  right: -0.95em;
  background: #171717;
  border-radius: 0px 0px 0px 20px;
  width: 150px;
  height: 47px;
  overflow-y: hidden;
  color: white;
  display: ${({ hoverProfile }) => (hoverProfile ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  /* transition: display 1s; */

  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

export const Avatar = styled.img`
  height: 53px;
  width: 53px;
  border-radius: 9999px;
  background-color: red;
`;
