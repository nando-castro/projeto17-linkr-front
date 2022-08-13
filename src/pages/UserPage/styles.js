import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
  margin-top: 40px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 611px) {
    border-radius: 0px;
    padding: 0;
  }
`;

const Body = styled.div`
  max-width: 611px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 18px;

  background: #171717;
  border-radius: 16px;

  @media (max-width: 611px) {
    border-radius: 0px;
  }
`;

const Name = styled.p`
  position: relative;
  width: 502px;
  height: 23px;

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
  margin-top: 8px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;

  color: #b7b7b7;
`;

const Link = styled.div`
  box-sizing: border-box;
  max-width: 503px;
  width: 100%;
  height: 155px;

  border: 1px solid #4d4d4d;
  border-radius: 11px;
  cursor: pointer;
`;

const Image = styled.img`
  position: relative;
  width: 150px;
  height: 155px;
  left: 355px;
  top: -68px;

  background: #fff;
  border-radius: 0px 12px 13px 0px;
`;

const Title = styled.h1`
  position: relative;
  width: 249.98px;
  height: 38px;
  left: 20px;
  top: 24px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #cecece;
`;

const Article = styled.span`
  position: relative;
  width: 303px;
  height: 39px;
  left: 20px;
  top: 15px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;

  color: #9b9595;
`;

const Url = styled.p`
  position: relative;
  width: 264px;
  height: 13px;
  left: 20px;
  top: 70px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;

  color: #cecece;
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

const Profile = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 611px) {
    display: none;
  }
`;

const Icon = styled.img`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 999px;

  background: #999;
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;

  .username {
    margin-left: 1rem;
    color: #fff;
    font-size: 44px;
    font-weight: bold;

    @media (max-width: 611px) {
      margin-left: 0;
    }
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-top: 45px;

  @media (max-width: 611px) {
    width: 100%;
  }
`;

export {
  Container,
  Timeline,
  Top,
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
  Image,
  Title,
  Article,
  Url,
};
