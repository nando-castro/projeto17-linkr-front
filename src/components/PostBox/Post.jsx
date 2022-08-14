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
  Like,
  PostHeader,
  PostIcons,
  StyledModal,
  ModalButtons,
  ModalButton,
  Likes,
} from "./styles";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { RiHeartLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useContext, useState } from "react";
import { api } from "../../services/api";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../context/auth";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import axios from "axios";

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
  const [like, setLike] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { userToken } = useContext(AuthContext);
  const [postLike, setPostLike] = useState({
    postId: "",
  });
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

  function handleLike() {
    if (like === false) {
      return setLike(true);
    } else {
      return setLike(false);
    }
  }
  return (
    <PostWrapper>
      <Profile>
        <Icon src={picture} />
        <Likes>
          {like === false ? (
            <IoIosHeartEmpty onClick={handleLike} />
          ) : (
            <IoIosHeart onClick={handleLike} className="active-like" />
          )}
          <span className="likes">{likes} likes</span>
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
