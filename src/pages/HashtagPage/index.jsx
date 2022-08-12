import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Timeline, Top, Content, Posts } from "./styles";
import { Header } from "../../components/Header";
import Post from "../../components/PostBox/Post";
import { HashtagBox } from "../../components/HashtagBox/HashtagBox";
import Loading from "../../components/Loading/Loading";
export default function HashtagPage() {
  const mockposts = [
    {
      id: 1,
      picture:
        "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000",
      username: "aaa",
      description:
        "descriçãaoooo oa  qwe qwe qwe qwe qwe #qweqwdasdas dasd asda sodasd aas #123",
      url: "https://www.youtube.com/",
      urlDescription: "asdasd asdas das dasda sada sdasdasdas",
      urlTitle: "tesetstes",
      urlImage:
        "https://yt3.ggpht.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      id: 2,
      picture:
        "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000",
      username: "bbbb",
      description:
        "#descriçã qwe qweq weqw eqw eqwe qwe qwe qwe qwe qweqwe qw qweqw qwaooooeeqwe qweq weqw as #123",
      url: "https://www.google.com/",
      urlDescription:
        "aqweqwe qwe qwe wqeqw qwe qwe qw qweq wq eqwe qwasasdas das dasda sada sdasdasdas ",
      urlTitle: "google",
      urlImage:
        "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png",
    },
    {
      id: 3,
      picture:
        "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000",
      username: "bbbb",
      description:
        "#descriçã qwe qweq weqw eqw eqwe qwe qwe qwe qwe qweqwe qw qweqw qwaooooeeqwe qweq weqw as #123",
      url: "https://www.google.com/",
      urlDescription:
        "aqweqwe qwe qwe wqeqw qwe qwe qw qweq wq eqwe qwasasdas das dasda sada sdasdasdas ",
      urlTitle: "google",
      urlImage:
        "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png",
    },
    {
      id: 4,
      picture:
        "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000",
      username: "bbbb",
      description:
        "#descriçã qwe qweq weqw eqw eqwe qwe qwe qwe qwe qweqwe qw qweqw qwaooooeeqwe qweq weqw as #123",
      url: "https://www.google.com/",
      urlDescription:
        "aqweqwe qwe qwe wqeqw qwe qwe qw qweq wq eqwe qwasasdas das dasda sada sdasdasdas ",
      urlTitle: "google",
      urlImage:
        "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png",
    },
    {
      id: 5,
      picture:
        "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000",
      username: "bbbb",
      description:
        "#descriçã qwe qweq weqw eqw eqwe qwe qwe qwe qwe qweqwe qw qweqw qwaooooeeqwe qweq weqw as #123",
      url: "https://www.google.com/",
      urlDescription:
        "aqweqwe qwe qwe wqeqw qwe qwe qw qweq wq eqwe qwasasdas das dasda sada sdasdasdas ",
      urlTitle: "google",
      urlImage:
        "https://t.ctcdn.com.br/P7-_JvQTS4U7-if6zHyXjyMiNQ8=/400x400/smart/i606944.png",
    },
  ];
  const { hashtag } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState(mockposts);
  function getPostsByHashtag() {
    axios
      .get(`${api}/hashtag/${hashtag}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  }
  // useEffect(() => getPostsByHashtag(), []);

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
                id={post.id}
              />
            ))}
          </Posts>
          <HashtagBox />
        </Content>
      </Timeline>
    </Container>
  );
}
