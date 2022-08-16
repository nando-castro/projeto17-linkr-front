import { useEffect, useState } from "react";
import { useScrollTo } from "react-use-window-scroll";
import { useNavigate, useParams } from "react-router-dom";
import { HashtagBox } from "../../components/HashtagBox/HashtagBox";
import { Header } from "../../components/Header";
import Loading from "../../components/Loading/Loading";
import Post from "../../components/PostBox/Post";
import { useAuth } from "../../context/auth";
import { api } from "../../services/api";
import { Oval, ThreeDots } from "react-loader-spinner";
import {
  Content,
  Profile,
  Icon,
  Posts,
  Container,
  UserDetails,
  Main,
} from "./styles";

export function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const scrollBy = useScrollTo();
  const { userToken, user } = useAuth();

  const [userPage, setUserPage] = useState({});
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function getPostsByUser() {
    setIsLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    if (!userToken || userToken === "null") {
      setIsLoading(false);
      navigate("/");
      return;
    }
    api
      .get(`/user/${id}`, config)
      .then((response) => {
        if (response.status === 200) {
          const { data } = response;
          const user = {
            userName: data.username,
            userPicture: data.picture,
          };
          setUserPage(user);
          setPosts(data.postsInfo);
          setIsLoading(false);
          scrollBy(0,0)
        }
      })
      .catch((err) => {
        localStorage.setItem("token", null);
        setIsLoading(false);
        navigate("/");
      });
  }
  useEffect(() => {
    getPostsByUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!user) {
    return <Loading />;
  }
  return (
    <Container>
      <Header />

      <Main>
        <UserDetails>
          <Profile>
            <Icon src={userPage.userPicture} />
          </Profile>
          <h2 className="username">
            {isLoading ? Loader(ThreeDots) : `${userPage.userName}'s posts`}
          </h2>
        </UserDetails>
        <Content>
          <Posts isLoading={isLoading}>
            {isLoading
              ? Loader(Oval)
              : posts?.map((post) => (
                  <Post
                    description={post.description}
                    id={post.postId}
                    picture={userPage.userPicture}
                    url={post.url}
                    likes={post.likes}
                    likesUsernames={post.likesUsername}
                    urlDescription={post.urlDescription}
                    urlImage={post.urlImage}
                    urlTitle={post.urlTitle}
                    username={userPage.userName}
                    writerId={post.userId}
                    key={post.postId}
                    getPosts={getPostsByUser}
                  />
                ))}
          </Posts>
          <HashtagBox />
        </Content>
      </Main>
    </Container>
  );
}

const Loader = (LoadingName) => {
  return (
    <LoadingName
      color="white"
      secondaryColor="#c6c6c6"
      height={40}
      width={40}
    />
  );
};
