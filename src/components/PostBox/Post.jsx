import ReactHashtag from "@mdnm/react-hashtag";
import jwt_decode from "jwt-decode";
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
} from "./styles";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Loading from "../Loading/Loading";
import { useAuth } from "../../context/auth";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import ReactTooltip from "react-tooltip";


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

  const { userToken, user } = useAuth();

  const [likedText, setLikedText] = useState("");
  const [like, setLike] = useState(
    likesUsernames.some((username) => username === user.userName)
  );

  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [postLike, setPostLike] = useState(null);
  const [likesAmount, setLikesAmount] = useState(Number(likes));

  const decoded = jwt_decode(userToken);
  function openUrl(url) {
    window.open(`${url}`);
  }
  function toogleModal() {
    setIsOpen(!modalIsOpen);
  }
  const navigate = useNavigate();
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

    const userLiked = likesUsernames.some(
      (username) => username === user.userName
    );

    const likesUsernamesFiltered = likesUsernames.filter(
      (username) => username !== user.userName
    );

    if (likesUsernames.length === 1) {
      if (userLiked) {
        const string = `Você curtiu este post`;
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
        const string = `Você e ${likesUsernamesFiltered[0]} curtiram este post`;
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
      const string = `Você, ${likesUsernamesFiltered[0]} e outras ${
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

  useEffect(() => {
    filterLikesUsernames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      .catch((err) => {
        console.log(err);
      });
  }

  return (
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
      </Profile>
      <Body>
        <PostHeader>
          <Name>{username}</Name>
          {writerId === decoded.userId ? (
            <PostIcons>
              <FaPencilAlt />
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
                      <ModalButton confirm={true} onClick={() => deletePost()}>
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
  );
}
