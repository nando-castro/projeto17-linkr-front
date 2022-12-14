import ReactHashtag from "@mdnm/react-hashtag";
import jwt_decode from "jwt-decode";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Swal from "sweetalert2";
import {
  Article,
  Body,
  Description,
  Icon,
  Image,
  Link,
  Name,
  Profile,
  Title,
  Url,
  PostWrapper,
  UrlContent,
  PostHeader,
  PostIcons,
  StyledModal,
  ModalButtons,
  ModalButton,
  Likes,
  Editing,
  Shares,
  RepostedDiv,
  RespostedText,
  Comments,
  InputBox,
  CommentBox,
  CommentIcon,
  SendButton,
} from "./styles";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { useNavigate, Link as LinkTo } from "react-router-dom";
import Modal from "react-modal";
import { useEffect, useState, useRef } from "react";
import { api } from "../../services/api";
import Loading from "../Loading/Loading";
import { useAuth } from "../../context/auth";
import axios from "axios";
// import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { RiHeartLine, RiHeartFill, RiRepeatLine } from "react-icons/ri";
import ReactTooltip from "react-tooltip";
import Comment from "../Comment/Comment";

export default function Post({
  picture,
  username,
  description,
  url,
  urlDescription,
  urlTitle,
  urlImage,
  likes,
  id,
  writerId,
  likesUsernames,
  getPosts,
  shares,
  reposted,
  commentsCount,
}) {
  const customStyles = {
    content: {
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#333333",
      borderRadius: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxHeight: "300px",
      width: "100%",
      maxWidth: "600px",
    },
  };
  const inputRef = useRef();
  const { userToken, user } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(description);
  const [likedText, setLikedText] = useState("");
  const [like, setLike] = useState(
    likesUsernames?.some((username) => username === user.userName)
  );
  const { update, setUpdate } = useAuth();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [postLike, setPostLike] = useState(null);
  const [likesAmount, setLikesAmount] = useState(Number(likes));
  const [shareDisabled, setShareDisabled] = useState(false);
  const [shareAmount, setShareAmount] = useState(Number(shares));
  const [shareModal, setShareModal] = useState(false);
  const [commentsAmount, setCommentsAmount] = useState(Number(commentsCount));
  const [comments, setComments] = useState();
  const [commentsIsOpen, setCommentsIsOpen] = useState(false);
  const [userComment, setUserComent] = useState("");

  const decoded = jwt_decode(userToken);
  function openUrl(url) {
    window.open(`${url}`);
  }
  function toogleModal() {
    setIsOpen(!modalIsOpen);
  }

  function deletePost() {
    setIsLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    api
      .delete(`/post/${id}`, config)
      .then((res) => {
        setIsLoading(false);
        toogleModal();
        getPosts();
      })
      .catch((err) => {
        setIsLoading(false);
        toogleModal();
        alert("It was not possible to delete this post, please try again");
      });
  }
  function filterLikesUsernames() {
    if (likesUsernames.length === 0) {
      return;
    }

    const userLiked = likesUsernames?.some(
      (username) => username === user.userName
    );

    const likesUsernamesFiltered = likesUsernames.filter(
      (username) => username !== user.userName
    );

    if (likesUsernames.length === 1) {
      if (userLiked) {
        const string = `Voc?? curtiu este post`;
        setLikedText(string);
        setLike(true);
        return;
      } else {
        const string = `${likesUsernames[0]} curtiu este post`;
        setLikedText(string);
        return;
      }
    }

    if (likesUsernames.length === 2) {
      if (userLiked) {
        const string = `Voc?? e ${likesUsernamesFiltered[0]} curtiram este post`;
        setLikedText(string);
        setLike(true);
        return;
      } else {
        const string = `${likesUsernames[0]} e ${likesUsernames[1]} curtiram este post`;
        setLikedText(string);
        return;
      }
    }

    if (userLiked) {
      const string = `Voc??, ${likesUsernamesFiltered[0]} e outras ${
        likesUsernamesFiltered.length - 1
      } pessoas curtiram`;
      setLikedText(string);
      setLike(true);
      return;
    } else {
      const string = `${likesUsernames[0]}, ${likesUsernames[1]} e outras ${
        likesUsernames.length - 2
      } pessoas curtiram `;
      setLikedText(string);
      return;
    }
  }

  function editPost() {
    setIsEditing(!isEditing);
    setEditText(description);
  }
  // useEffect(() => {
  //   setEditText(description)
  // }, [description])
  function InputKeys(key) {
    if (isLoading) return;
    if (key === "Esc") {
      setEditText(description);
      setIsEditing(false);
    } else if (key === "Enter") {
      if (editText === description) {
        return;
      } else {
        setIsLoading(true);
        const config = {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        };
        const promisse = axios.put(
          `https://linkr1.herokuapp.com/post/${id}`,
          { description: editText },
          config
        );
        promisse
          .then((res) => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your description has been edited",
              showConfirmButton: false,
              timer: 1500,
            });
            setEditText(editText);
            setIsLoading(false);
            setIsEditing(false);
            getPosts();
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "N??o deu bao",
              text: "Try again!",
              confirmButtonColor: "#1877F2",
              background: "#333333",
              color: "#ffffff",
            });
            setIsLoading(false);
            inputRef.current.focus();
          });
      }
    }
  }

  function descriptionComponent() {
    return (
      <Description>
        <p>
          <ReactHashtag
            onHashtagClick={(hashtag) =>
              navigate(`/hashtag/${hashtag.replace("#", "")}`)
            }
          >
            {description}
          </ReactHashtag>
        </p>
      </Description>
    );
  }

  function editingComponent() {
    return (
      <KeyboardEventHandler
        handleKeys={["Esc", "Enter"]}
        onKeyEvent={(key, e) => InputKeys(key)}
      >
        <Editing
          isLoading={isLoading}
          ref={inputRef}
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      </KeyboardEventHandler>
    );
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    filterLikesUsernames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  function handleLike(e) {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    api
      .post(`/like/${id}`, postLike, config)
      .then((res) => {
        setPostLike(decoded.userId);
        if (like === false) {
          setLikesAmount((old) => old + 1);
          return setLike(true);
        } else {
          setLikesAmount((old) => old - 1);
          return setLike(false);
        }
      })
      .catch((err) => {});
  }
  function getComments() {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    api
      .get(`/comment/${id}`, config)
      .then((res) => {
        setComments(res.data);
        setCommentsIsOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function postComment() {
    if (isLoading) return;
    setIsLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    const body = {
      comment: userComment,
    };
  api
  .post(`/comment/${id}`, body, config)
  .then((res) => {
    setUserComent("");
    getComments();
    setCommentsAmount((old) => old + 1);
    setIsLoading(false);
  })
  .catch((err) => {
    setIsLoading(false);
  });
}
	function handleShare(e) {
		e.preventDefault();
		if(shareDisabled) return;
		setShareDisabled(true);
		const config = {
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		};
		api.post(`/share/${id}`, {}, config)
		.then((res) => {
			setShareAmount((old) => old + 1);
			setShareDisabled(false);
			setShareModal(!shareModal);
			getPosts();
		})
		.catch((err) => {
			setShareDisabled(false);
			setShareModal(!shareModal);
			if(err.response.data === "User alredy shared this post")
				Swal.fire(err.response.data);
		});
	}
    
  return (
    <div>
    {
			(reposted === null) ? 
			<></> :
			<RepostedDiv>
				<RiRepeatLine color="white" fontSize={"20px"}></RiRepeatLine>
				<RespostedText>Re-posted by {
					reposted === username ? 'you' : reposted
				}</RespostedText>
			</RepostedDiv>
		}
      <PostWrapper>
        <Profile>
          <Icon src={picture} />

          <Likes data-tip={likedText} onClick={handleLike}>
            <ReactTooltip />
            {like === false ? (
              <RiHeartLine color="white" fontSize={"20px"} />
            ) : (
              <RiHeartFill fontSize={"20px"} className="active-like" />
            )}
            <span className="likes">{likesAmount} likes</span>
          </Likes>
          <Comments
            onClick={() => {
              if (commentsIsOpen) {
                return setCommentsIsOpen(false);
              }
              getComments();
            }}
          >
            <BsChatDots />
            <span>{commentsAmount} comments</span>
          </Comments>
          <Shares onClick={() => setShareModal(!shareModal)} disabled={shareDisabled}>
				<RiRepeatLine color="white" fontSize={"20px"}></RiRepeatLine>
				<span className="shares">{shareAmount} re-post</span>
				<Modal
					isOpen={shareModal}
					style={customStyles}
					contentLabel="Share Modal"
				>
					{isLoading ? (
					<StyledModal>
						<Loading />
					</StyledModal>
					) : (
					<StyledModal>
						<h1>Do you want to re-post this link?</h1>
						<ModalButtons>
						<ModalButton
							confirm={false}
							onClick={() => setShareModal(!shareModal)}
						>
							<p>No, cancel</p>
						</ModalButton>
						<ModalButton confirm={true} onClick={handleShare}>
							<p> Yes, share!</p>
						</ModalButton>
						</ModalButtons>
					</StyledModal>
					)}
				</Modal>
			</Shares>
        </Profile>
        <Body>
          <PostHeader>
            <LinkTo to={`/user/${writerId}`}>
              <Name>{username}</Name>
            </LinkTo>
            {writerId === decoded.userId ? (
              <PostIcons>
                <FaPencilAlt onClick={() => editPost()} />
                <FaTrash onClick={() => toogleModal()} />
                <Modal
                  isOpen={modalIsOpen}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  {isLoading ? (
                    <StyledModal>
                      <Loading />
                    </StyledModal>
                  ) : (
                    <StyledModal>
                      <h1>Are you sure you want to delete this post?</h1>
                      <ModalButtons>
                        <ModalButton
                          confirm={false}
                          onClick={() => toogleModal()}
                        >
                          <p>No, go back</p>
                        </ModalButton>
                        <ModalButton
                          confirm={true}
                          onClick={() => deletePost()}
                        >
                          <p> Yes, delete it</p>
                        </ModalButton>
                      </ModalButtons>
                    </StyledModal>
                  )}
                </Modal>
              </PostIcons>
            ) : (
              <></>
            )}
          </PostHeader>
          {isEditing ? editingComponent() : descriptionComponent()}
          <Link onClick={() => openUrl(url)}>
            <UrlContent>
              <Title>{urlTitle}</Title>
              <Article>{urlDescription}</Article>
              <Url>{url}</Url>
            </UrlContent>
            <Image src={urlImage} />
          </Link>
        </Body>
      </PostWrapper>
      {commentsIsOpen ? (
        <CommentBox>
          {comments?.map((comment) => (
            <Comment
              key={comment.id}
              picture={comment.picture}
              username={comment.username}
              comment={comment.comment}
              writerId={comment.commentWriterId}
              postAuthorId={writerId}
              isFollowing={comment.isFollowing}
            />
          ))}
          <InputBox>
            <CommentIcon>
              <img src={user.userPicture} />
            </CommentIcon>
            <input
              type="text"
              placeholder="write a comment..."
              value={userComment}
              onChange={(e) => setUserComent(e.target.value)}
            />
            <SendButton onClick={() => postComment()}>
              <FiSend />
            </SendButton>
          </InputBox>
        </CommentBox>
      ) : (
        <></>
      )}
    </div>
  );
}
