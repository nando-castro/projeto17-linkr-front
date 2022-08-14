import {
  Article,
  Body,
  Cont,
  Container,
  Description,
  Icon,
  Image,
  Like,
  Link,
  Message,
  Name,
  OpenLink,
  Posts,
  Profile,
  Title,
  Url,
} from "./styles";
import axios from "axios";

import { Link as LinkTo } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Loader } from "../../components/Loading/styles";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import Post from "../../components/PostBox/Post";
import Swal from "sweetalert2";


export default function PostScreen() {
  const { timeline, setTimeline } = useAuth();

  const URL = `http://localhost:4000/timeline`;

  useEffect(() => {
    function getPostsTimeline() {
      const promise = axios.get(URL);
      promise
        .then((res) => {
          setTimeline(res.data);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title:
              "An error occured while trying to fetch the posts, please refresh the page",
          });
        });
    }
    getPostsTimeline();
  }, []);

           /* 
          <Like>
            {like === false ? (
              <IoIosHeartEmpty onClick={haddleLike} />
            ) : (
              <IoIosHeart onClick={haddleDislike} className="active-like" />
            )}
          </Like> */

  function renderTimeline() {
    return timeline.map((i, index) => (
      <Post
        key={index}
        picture={i.picture}
        username={i.username}
        description={i.description}
        url={i.url}
        urlDescription={i.urlDescription}
        urlTitle={i.urlTitle}
        urlImage={i.urlImage}
        likes={i.likes}
      />
    ));
  }

  return (
    <>
      {timeline.length > 0 ? (
        <Container>{renderTimeline()}</Container>
      ) : (
        <Container>
          <Message>Loading...</Message>
          <br></br>
          <Loader />
        </Container>
      )}
    </>
  );
}
