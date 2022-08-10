import styled from "styled-components";

export const Container = styled.header`
  background-color: #151515;
  display: flex;
  width: 100%;
  height: 5rem;
  padding-inline: 1rem;
  align-items: center;
  justify-content: space-between;
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

export const SearchBar = styled.label`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 1rem 2rem;
  margin-left: 1.25rem;
  max-width: 564px;
  align-self: center;
  color: black;
  position: relative;
  background-color: white;
  border-radius: 8px;
`;

export const Input = styled.input`
  color: black;
  width: 100%;
  background: none;
  border: none;
  padding-inline: 0.5rem;
  margin-right: 1rem;
  ::placeholder {
    color: gray;
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