import styled from "styled-components";

export const Container = styled.div`
  background-color: #171717;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  width: 300px;
`;
export const Content = styled.div`
  padding: 0 20px;
  margin: 20px 0;
  a {
    text-decoration: none;
  }
  p {
    font-family: "Lato", sans-serif;
    margin-bottom: 40px;
    font-weight: 700;
    height: 0px;
    color: #ffffff;
    font-size: 20px;
  }
`;
export const Title = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #484848;
  h1 {
    font-family: "Oswald", sans-serif;
    color: #ffffff;
    font-size: 27px;
    font-weight: 700;
  }
`;
