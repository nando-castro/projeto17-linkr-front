import styled from "styled-components";

export const PostWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  /* height: 100%; */
  display: flex;
  border-radius: 16px;
  background-color: #171717;
  padding: 20px;
  column-gap: 20px;
  @media (max-width: 611px) {
    border-radius: 0px;
    padding: 10px;
  }
`;

export const RepostedDiv = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  border-radius: 16px 16px 0px 0px;
  background-color: #1E1E1E;
  padding: 10px 10px 20px 20px;
  margin-bottom: -35px;
  @media (max-width: 611px) {
    border-radius: 0px;
    padding: 10px;
  }
`;

export const RespostedText = styled.p`
	font-family: "Lato";
	font-weight: 400;
	font-size: 11px;
	color: white;
	margin-left: 10px;
	margin-bottom: 30px;
`;

export const Article = styled.span`
  width: 100%;
  font-family: "Lato";
  font-weight: 400;
  font-size: 11px;
  color: #9b9595;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;
export const Url = styled.p`
  font-family: "Lato";
  font-weight: 400;
  font-size: 11px;
  color: #cecece;
  max-width: 100%;
  word-break: break-all;
`;
export const Message = styled.span`
  font-family: "Lato";
  font-weight: 400;
  font-size: 19px;
  color: #ffffff;
  max-width: 100%;
`;
export const Profile = styled.div`
  font-family: "Lato";
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #ffffff;
  gap: 20px;
  font-size: 20px;
  width: 80px;
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

export const Likes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer;
  .likes {
    margin-top: 4px;
    text-align: center;
    font-size: 11px;
    line-height: 13px;
  }
  .active-like {
    color: red;
  }
`;

export const Shares = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer;
  .shares {
    margin-top: 4px;
    text-align: center;
    font-size: 11px;
    line-height: 13px;
  }
`;

export const Body = styled.div`
  background: #171717;
  border-radius: 16px;
  width: 100%;
`;
export const Name = styled.p`
  width: 100%;
  font-family: "Lato";
  font-weight: 400;
  font-size: 19px;
  color: #ffffff;
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
    cursor: pointer;
  }
`;

export const Editing = styled.input`
  width: 100%;
  max-height: 44px;
  height: 100%;
  margin-bottom: 10px;
  font-family: "Lato";
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4c4c4c;
  border-radius: 7px;
  word-break: break-word;
  outline: none;
  background-color: ${({ isLoading }) => (isLoading ? "#CECECE" : "white")};
`;
export const Link = styled.div`
  width: 100%;
  height: 155px;
  margin-bottom: 10px;
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
  max-width: 150px;
  height: 100%;
  background: #fff;
  border-radius: 0px 12px 13px 0px;
  object-fit: cover;
  @media (max-width: 611px) {
    width: 90px;
  }
`;
export const Title = styled.h1`
  width: 100%;
  font-family: "Lato";
  font-weight: 400;
  font-size: 16px;
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

  .active-like {
    color: red;
  }
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

export const PostHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const PostIcons = styled.div`
  display: flex;
  color: #ffffff;
  font-size: 20px;
  column-gap: 15px;
  cursor: pointer;
`;
export const StyledModal = styled.div`
  font-family: "Lato";
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
`;
export const ModalButtons = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ModalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.confirm ? "#1877F2" : "#FFFFFF")};
  color: ${(props) => (props.confirm ? "#FFFFFF" : "#1877F2")};
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const LoadingMessage = styled.div`
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
export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  cursor: pointer;
  span {
    margin-top: 4px;
    text-align: center;
    font-size: 11px;
    line-height: 13px;
  }
`;

export const CommentBox = styled.div`
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  border-radius: 0 0 16px 16px;
  width: 100%;
  padding: 0 30px;
`;
export const CommentIcon = styled.div`
  border-radius: 50%;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
export const InputBox = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  justify-content: space-between;
  column-gap: 20px;
  position: relative;
  input {
    width: 100%;
    background-color: #252525;
    height: 100%;
    border-radius: 10px;
    padding: 15px 10px;
    color: #ffffff;
  }
  input::placeholder {
    font-family: "Lato";
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    color: #575757;
  }
`;
export const SendButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 20px;
  position: absolute;
  right: 20px;
  cursor: pointer;
`;
