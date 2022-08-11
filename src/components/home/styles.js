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
  max-width: 611px;
  width: 100%;
  height: auto;
  margin-top: 150px;
  display: flex;
  flex-direction: column;

  @media (max-width: 611px) {
    margin-top: 91px;
  }
`;

const Top = styled.div`
  max-width: 145px;
  width: 100%;
  height: 64px;

  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;

  color: #ffffff;

  @media (max-width: 611px) {
    margin-left: 17px;
  }
`;

const Content = styled.div`
  max-width: 611px;
  width: 1005;
  height: 209px;
  display: flex;
  flex-direction: row;
  margin-top: 46px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  @media (max-width: 611px) {
    .icon-profile {
      display: none;
    }
  }
`;

const Form = styled.div`
  max-width: 611px;
  width: 100%;
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
    max-width: 503px;
    width: 100%;
    height: 30px;

    border: none;

    background: #efefef;
    border-radius: 5px;
  }

  .body {
    max-width: 502px;
    width: 100%;
    height: 66px;

    margin-top: 5px;

    background: #efefef;
    border-radius: 5px;
  }
`;

const Posts = styled.div`
  max-width: 611px;
  width: 100%;
  height: 276px;
  margin-top: 26px;
  display: flex;
  flex-direction: row;

  background: #171717;

  @media (max-width: 611px;) {
    border-radius: 0px;
  }
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
  left: 18px;
  top: 13px;

  border-radius: 26.5px;

  background: #999;
`;

const Body = styled.div`
  max-width: 611px;
  width: 100%;
  height: 276px;

  background: #171717;
  border-radius: 16px;

  @media (max-width: 611px;) {
    border-radius: 0px;
  }
`;

const Name = styled.p`
  position: relative;
  width: 502px;
  height: 23px;
  top: 15px;
  left: 25px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #ffffff;
`;

const Description = styled.div`
  position: relative;
  width: 502px;
  height: 52px;
  top: 25px;
  left: 25px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;

  color: #b7b7b7;
`;

const Link = styled.div`
  width: 90%;
  height: auto;
  margin-top: 40px;
  margin-left: 20px;

  border: 1px solid #4d4d4d;
  border-radius: 11px;

  background: #fff;
`;

const Button = styled.button`
  width: 112px;
  height: 31px;
  position: relative;
  left: 75%;
  top: 10px;

  background: #1877f2;
  border: none;
  border-radius: 5px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;

  cursor: pointer;
`;

const Message = styled.span`
  margin-top: 40px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #ffffff;
`;

export {
  Container,
  Timeline,
  Top,
  Content,
  Posts,
  Form,
  Icon,
  Profile,
  Button,
  Name,
  Body,
  Description,
  Message,
  Link,
};
