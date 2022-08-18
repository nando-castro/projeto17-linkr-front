import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  p {
    margin-top: 1rem;
    font-family: "Lato";
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.05em;

    color: #6d6d6d;
  }
`;
export const Loader = styled.div`
  animation: is-rotating 1s infinite;
  width: 36px;
  height: 36px;
  border: 4px solid #6d6d6d;
  border-top-color: transparent;
  border-radius: 50%;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
