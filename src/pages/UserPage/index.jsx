import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { HashtagBox } from "../../components/HashtagBox/HashtagBox";
import { Header } from "../../components/Header";
import Loading from "../../components/Loading/Loading";
import Post from "../../components/PostBox/Post";
import { useAuth } from "../../context/auth";
import { api } from "../../services/api";
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

  const { userToken, user } = useAuth();

  const [userPage, setUserPage] = useState({});
  const [posts, setPosts] = useState([]);
  function getPostsByUser() {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    if (!userToken || userToken === "null") {
      navigate("/");
      return;
    }
    api
      .get(`/user/${id}`, config)
      .then((response) => {
        if (response.status === 200) {
          const { data } = response;
          const userData = data[0];
          const user = {
            userName: userData.username,
            userPicture: userData.picture,
          };
          setUserPage(user);
          setPosts(response.data);
        }
      })
      .catch((err) => {
        localStorage.setItem("token", null);
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
        <Content>
          <UserDetails>
            <Profile>
              <Icon src={userPage.userPicture} />
            </Profile>
            <h2 className="username">{userPage.userName}'s posts</h2>
          </UserDetails>

          <Posts>
            {posts?.map((post, index) => (
              <Post
                description={post.description}
                id={post.postId}
                picture={post.picture}
                url={post.url}
                likes={post.likes}
                likesUsernames={post.likesUsername}
                urlDescription={post.urlDescription}
                urlImage={post.urlImage}
                urlTitle={post.urlTitle}
                username={post.username}
                writerId={post.userId}
                key={index}
                getPosts={getPostsByUser}
				shares={post.shares}
				reposted={post.sharedBy ? post.sharedBy : null}
              />
            ))}
          </Posts>
        </Content>

        <HashtagBox />
      </Main>
    </Container>
  );
}
