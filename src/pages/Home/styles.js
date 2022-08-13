import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Top = styled.div`
  width: 100%;
  max-width: 611px;
  height: 64px;
  margin-top: 40px;
  padding-left: 10px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  color: #ffffff;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;
  background: #fff;


`;

export const Timeline = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const ContentForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 20px;
  border-radius: 5px;
  background: #fff;
`;

export const Form = styled.form`
  max-width: 600px;
  width: 100%;
  height: 209px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  backgound: #ffff;

  input {
    width: 100%;
    height: 30px;
    border: none;
    background: #efefef;
    border-radius: 5px;
    margin-top: 10px;
  }

  input::placeholder {
    padding-left: 13px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;

    color: #949494;
  }

  .article {
    height: 66px;
  }
`;

export const Title = styled.p`
  width: 100%;
  height: 40px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;

  color: #707070;
`;

export const Button = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #1877f2;
  border-radius: 5px;

  cursor: pointer;
`;

export const Profile = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
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