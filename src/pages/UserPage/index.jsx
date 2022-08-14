import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HashtagBox } from "../../components/HashtagBox/HashtagBox";
import { Header } from "../../components/Header";
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

  const { user, userToken } = useAuth();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    api
      .get(`/user/${id}`, config)
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.data);
        }
      })
      .catch((err) => {
        localStorage.setItem("token", null);
        navigate("/");
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />

      <Main>
        <Content>
          <UserDetails>
            <Profile>
              <Icon src={user.userPicture} />
            </Profile>
            <h2 className="username">{user.userName}'s posts</h2>
          </UserDetails>

          <Posts>
            {posts?.map((post) => (
              <Post
                description={post.description}
                id={post.postId}
                picture={post.picture}
                url={post.url}
                likes={post.likes}
                urlDescription={post.urlDescription}
                urlImage={post.urlImage}
                urlTitle={post.urlTitle}
                username={post.username}
                writerId={post.userId}
                key={post.postId}
              />
            ))}
          </Posts>
        </Content>

        <HashtagBox />
      </Main>
    </Container>
  );
}
