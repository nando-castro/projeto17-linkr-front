import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Timeline, Top, Content, Posts } from "./styles";
import { Header } from "../../components/Header";
import Post from "../../components/PostBox/Post";
import { HashtagBox } from "../../components/HashtagBox/HashtagBox";
import Loading from "../../components/Loading/Loading";
export default function HashtagPage() {
  const { hashtag } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  function getPostsByHashtag() {
    setPosts();
    api
      .get(`/hashtag/${hashtag}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
        localStorage.setItem("token", null);
        navigate("/");
      });
  }
  useEffect(() => getPostsByHashtag(), [hashtag]);

  if (!posts) {
    return (
      <>
        <Header />
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
            {posts?.map((post) => (
              <Post
                picture={post.picture}
                username={post.username}
                description={post.description}
                url={post.url}
                urlDescription={post.urlDescription}
                urlTitle={post.urlTitle}
                urlImage={post.urlImage}
                key={post.id}
                writerId={post.writerId}
                id={post.id}
                getPosts={getPostsByHashtag}
                likesUsernames={post.likesUsername}
                likes={post.likes}
              />
            ))}
          </Posts>
          <HashtagBox />
        </Content>
      </Timeline>
    </Container>
  );
}
