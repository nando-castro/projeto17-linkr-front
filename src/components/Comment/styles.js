import styled from "styled-components";

export const CommentWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  border-bottom: 1px solid #353535;
  padding: 15px 0;
  align-items: center;
`;
export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  justify-content: space-between;
  p {
    color: #acacac;
    font-family: "Lato";
    font-size: 14px;
    font-weight: 400;
  }
`;
export const CommentOwner = styled.div`
  display: flex;
  column-gap: 5px;
  h1 {
    font-family: "Lato";
    font-size: 14px;
    font-weight: 700;
    color: #f3f3f3;
  }
  span {
    font-family: "Lato";
    font-size: 14px;
    font-weight: 400;
    color: #565656;
  }
`;
export const CommentIcon = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
