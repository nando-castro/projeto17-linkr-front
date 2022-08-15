import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0px;
  top: 0px;

  background: #151515;
  color: #ffffff;
  z-index: 2;
`;

const Profile = styled.div`
  position: absolute;

  right: 17px;
  top: 10px;
`;

const Icon = styled.img`
  width: 53px;
  height: 53px;
  border-radius: 26px;

  background: #ffffff;
`;

export { Container, Profile, Icon };
