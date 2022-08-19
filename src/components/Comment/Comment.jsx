import {
  CommentContent,
  CommentIcon,
  CommentOwner,
  CommentWrapper,
} from "./styles";

export default function Comment({ picture, username, comment }) {
  return (
    <CommentWrapper>
      <CommentIcon>
        <img src={picture} />
      </CommentIcon>
      <CommentContent>
        <CommentOwner>
          <h1>{username} </h1>
          <span> • teste</span>
        </CommentOwner>
        <p>{comment}</p>
      </CommentContent>
    </CommentWrapper>
  );
}
