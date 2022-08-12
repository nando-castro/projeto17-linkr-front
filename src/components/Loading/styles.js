import styled from "styled-components";
export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 20px;
    color: #063970;
    font-weight: 500;
  }
`;
export const Loader = styled.div`
  animation: is-rotating 1s infinite;
  width: 100px;
  height: 100px;
  border: 10px solid #ffffff;
  border-top-color: #1877f2;
  border-radius: 50%;
  margin-bottom: 20px;
  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
