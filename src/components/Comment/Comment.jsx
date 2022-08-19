import {
  CommentContent,
  CommentIcon,
  CommentOwner,
  CommentWrapper,
} from "./styles";

export default function Comment({
  picture,
  username,
  comment,
  postAuthorId,
  writerId,
}) {
  return (
    <CommentWrapper>
      <CommentIcon>
        <img src={picture} />
      </CommentIcon>
      <CommentContent>
        <CommentOwner>
          <h1>{username} </h1>
          {postAuthorId === writerId ? <span>• post's author</span> : <></>}
        </CommentOwner>
        <p>{comment}</p>
      </CommentContent>
    </CommentWrapper>
  );
}
