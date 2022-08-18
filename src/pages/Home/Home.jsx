import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import useInterval from "use-interval";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { HashtagBox } from "../../components/HashtagBox/HashtagBox";
import { Header } from "../../components/Header";
import Loading from "../../components/Loading/Loading";
import { Loader } from "../../components/Loading/styles";
import Post from "../../components/PostBox/Post";
import { useAuth } from "../../context/auth";
import { api } from "../../services/api";
import FormPost from "./FormPost";
import {
  Container,
  Message,
  Posts,
  Timeline,
  Top,
  LoaderWrapper,
  TimelineWrapper,
} from "./styles";

export default function Home() {
  const { timeline, setTimeline, setUserToken, user, userToken, update } =
    useAuth();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const itemsPerPage = 10;
  //const [currentPage, setCurrentPage] = useState(1);
  let currentPage = 1;
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [records, setRecords] = useState(0);
  const navigate = useNavigate();
  let [count, setCount] = useState(0);
  let [ok, setOk] = useState("");

  console.log(hasMoreItems);

  function getPostsTimeline() {
    if (loading) return;
    if (!userToken || userToken === "null") {
      navigate("/");
      return;
    }
    setLoading(true);

    api
      .get(`/timeline?page=${currentPage}`)
      .then((res) => {
        currentPage++;
        setTimeline([...timeline, ...res.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title:
            "An error occured while trying to fetch the posts, please refresh the page",
        });
        setLoading(false);
      });
  }

  useEffect(() => {
    getPostsTimeline();
  }, []);
  /*   const getNewPosts = () => {
    let posts = [];

  } */

  let newPosts = 0;
  let postsLength = 1;

  useInterval(() => {
    if (timeline.length + postsLength > timeline.length) {
      newPosts = postsLength;
      setOk(`sim tem mais ${newPosts} novos posts`);
    } else {
      setOk("Não tem novos posts");
    }
    console.log(ok);
  }, 3000);

  /*   const handdleLoadMore = useCallback(() => {
    getPostsTimeline();
  }, [timeline, isLoading]);
 */

  if (!user) {
    return <Loading />;
  }

  return (
    <Container>
      <Header />
      <Timeline>
        <Top>timeline</Top>
        <FormPost />
        {loading ? (
          <LoaderWrapper>
            <Loader />
            <Message>Loading...</Message>
            <br></br>
          </LoaderWrapper>
        ) : timeline.length === 0 ? (
          <Message>There are no posts yet</Message>
        ) : (
          <TimelineWrapper>
            <Posts>
              {timeline?.map((post) => (
                <Post
                  key={post.postId}
                  picture={post.picture}
                  username={post.username}
                  description={post.description}
                  url={post.url}
                  urlDescription={post.urlDescription}
                  urlTitle={post.urlTitle}
                  urlImage={post.urlImage}
                  writerId={post.userId}
                  id={post.postId}
                  getPosts={getPostsTimeline}
                  likesUsernames={post.likesUsername}
                  likes={post.likes}
                  commentsCount={post.commentsCount}
                />
              ))}
            </Posts>
            <HashtagBox />
          </TimelineWrapper>
        )}
      </Timeline>
    </Container>
  );
}
