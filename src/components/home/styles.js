import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  heigth: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Timeline = styled.div`
  width: 611px;
  height: auto;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  width: 145px;
  height: 64px;

  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;

  color: #ffffff;
`;

const Form = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding: 20px 20px;

  border-radius: 5px;

  p {
    width: 445px;
    height: 40px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;

    color: #707070;
  }

  input {
    width: 503px;
    height: 30px;

    border: none;

    background: #efefef;
    border-radius: 5px;
  }

  .body {
    width: 502px;
    height: 66px;

    margin-top: 5px;

    background: #efefef;
    border-radius: 5px;
  }
`;

const Content = styled.div`
  width: 611px;
  height: 209px;
  display: flex;
  flex-direction: row;
  margin-top: 46px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

const Posts = styled.div`
  width: 611px;
  height: 276px;
  margin-top: 26px;

  background: #171717;
  border-radius: 16px;
`;

const Profile = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const Icon = styled.img`
  position: relative;
  width: 50px;
  height: 50px;
  left: 0;
  top: 13px;

  border-radius: 26.5px;

  background: #999;
`;

export { Container, Timeline, Top, Content, Posts, Form, Icon, Profile };
