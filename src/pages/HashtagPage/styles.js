import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Timeline = styled.div`
  margin-top: 50px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
`;

export const Top = styled.div`
  width: 100%;
  max-width: 611px;
  height: 64px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  color: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  max-width: 100%;
`;
