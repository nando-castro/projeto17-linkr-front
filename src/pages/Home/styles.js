import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Top = styled.div`
  max-width: 611px;
  width: 100%;
  height: 64px;
  margin-top: 40px;
  padding-left: 10px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  color: #ffffff;
  @media (max-width: 611px) {
    margin-top: 60px;
  }
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
  margin-top: 50px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
`;

export const Posts = styled.div`
  height: auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  max-width: 100%;
`;

export const ContentForm = styled.form`
  width: 100%;
  border-radius: 10px;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 20px;

  background: #fff;
`;

export const Form = styled.div`
  max-width: 600px;
  width: 100%;
  height: 209px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;

  background: #ffff;

  input {
    width: 100%;
    height: 30px;
    border: none;
    background: #efefef;
    border-radius: 5px;
    margin-top: 5px;
  }

  input::placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;

    color: #949494;
  }

  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    font-family: "Lato";
  }

  input[type="text"]:focus {
    border: 3px solid #555;
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

export const ContentButton = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  justify-content: right;
`;

export const Button = styled.div`
  width: 112px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #1877f2;
  border-radius: 5px;
  margin-top: 5px;
  cursor: pointer;

  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-align: center;

  color: #ffffff;
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
  object-fit: cover;
  img {
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Message = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 64px;
  color: #ffffff;
`;
export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100%;
`;

export const TimelineWrapper = styled.div`
  height: auto;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;
`;

export const UpdateContent = styled.div`
max-width: 600px;
  height: 61px;
  background: #1877f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  .icon {
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const InfiniteScrollWrapper = styled.div`
  width: 100%;
  display: flex;
`;
