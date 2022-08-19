import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Timeline, Top, Content, Posts, Message } from "./styles";
import { Header } from "../../components/Header";
import Post from "../../components/PostBox/Post";
import { HashtagBox } from "../../components/HashtagBox/HashtagBox";
import Loading from "../../components/Loading/Loading";
import { useAuth } from "../../context/auth";
export default function HashtagPage() {
  const { hashtag } = useParams();
  const { userToken } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState();
  function getPostsByHashtag() {
    setPosts();
    if (!userToken || userToken === "null") {
      navigate("/");
      return;
    }
    api
      .get(`/hashtag/${hashtag}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        localStorage.setItem("token", null);
        navigate("/");
      });
  }
  useEffect(() => getPostsByHashtag(), [hashtag]);

  if (!posts) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <Container>
      <Header />

      <Timeline>
        <Top># {hashtag}</Top>
        <Content>
          <Posts>
            {posts?.map((post, index) => (
              <Post
                picture={post.picture}
                username={post.username}
                description={post.description}
                url={post.url}
                urlDescription={post.urlDescription}
                urlTitle={post.urlTitle}
                urlImage={post.urlImage}
                key={index}
                writerId={post.writerId}
                id={post.id}
                getPosts={getPostsByHashtag}
                likesUsernames={post.likesUsername}
                likes={post.likes}
				shares={post.shares}
  				reposted={null}
              />
            ))}
          </Posts>
          <HashtagBox />
        </Content>
      </Timeline>
    </Container>
  );
}
