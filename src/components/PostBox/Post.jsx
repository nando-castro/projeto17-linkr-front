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
<<<<<<< HEAD
  Like,
=======
  PostHeader,
  PostIcons,
  StyledModal,
  ModalButtons,
  ModalButton,
>>>>>>> 23f9d7b22c8b9a293860604089771e563d3f497a
} from "./styles";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useContext, useState } from "react";
import { api } from "../../services/api";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../context/auth";

export default function Post({
  picture,
  username,
  description,
  url,
  urlDescription,
  urlTitle,
  urlImage,
<<<<<<< HEAD
  likes
=======
  id,
  writerId,
>>>>>>> 23f9d7b22c8b9a293860604089771e563d3f497a
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

  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { userToken } = useContext(AuthContext);
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
  return (
    <PostWrapper>
      <Profile>
        <Icon src={picture} />
        <Like>{likes}</Like>
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
