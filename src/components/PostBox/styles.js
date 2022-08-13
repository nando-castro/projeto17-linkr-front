import styled from "styled-components";

export const PostWrapper = styled.div`
  max-width: 600px;
  display: flex;
  border-radius: 16px;
  background-color: #171717;
  padding: 20px;
  column-gap: 20px;
`;

export const Article = styled.span`
  width: 100%;
  font-family: "Lato";
  font-weight: 400;
  font-size: 11px;
  color: #9b9595;
`;
export const Url = styled.p`
  font-family: "Lato";
  font-weight: 400;
  font-size: 11px;
  color: #cecece;
`;
export const Message = styled.span`
  font-family: "Lato";
  font-weight: 400;
  font-size: 19px;
  color: #ffffff;
`;
export const Profile = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  img {
    border-radius: 50%;
    object-fit: cover;
  }
`;
export const Body = styled.div`
  background: #171717;
  border-radius: 16px;
`;
export const Name = styled.p`
  width: 100%;
  font-family: "Lato";
  font-weight: 400;
  font-size: 19px;
  color: #ffffff;
  margin-bottom: 10px;
`;
export const Description = styled.div`
  width: 100%;
  margin-bottom: 10px;
  font-family: "Lato";
  font-weight: 400;
  font-size: 17px;
  color: #b7b7b7;
  span {
    font-weight: 700;
    color: white;
  }
`;
export const Link = styled.div`
  max-width: 100%;
  height: 155px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  cursor: pointer;
`;
export const UrlContent = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;
export const Image = styled.img`
  height: 100%;
  background: #fff;
  border-radius: 0px 12px 13px 0px;
  object-fit: cover;
`;
export const Title = styled.h1`
  width: 100%;
  font-family: "Lato";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #cecece;
`;

export const Like = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 20px;

  cursor: pointer;
`;

export const Form = styled.div`
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

export const Button = styled.button`
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