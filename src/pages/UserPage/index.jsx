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
import jwt_decode from "jwt-decode";
import "../../assets/css/Swall.css";
import {
  Content,
  Profile,
  Icon,
  Posts,
  Container,
  UserDetails,
  Main,
  IconText,
  Follow,
} from "./styles";
import Swal from "sweetalert2";

export function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const scrollBy = useScrollTo();
  const { userToken, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [enableButton, setEnableButton] = useState(true);
  const decoded = jwt_decode(userToken);
  const [userPage, setUserPage] = useState({});
  const [posts, setPosts] = useState([]);
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
            userId: data.userId,
            isFollowed: data.isFollowed,
          };
          setUserPage(user);
          setPosts(data.postsInfo);
          setIsLoading(false);
          scrollBy(0, 0);
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

  const FollowRequest = (isFollowed) => {
    if (!enableButton) return;
    setEnableButton(false);
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
    if (!isFollowed) {
      api
        .post(`/follow/${id}`, {}, config)
        .then(async () => {
          setUserPage({ ...userPage, isFollowed: true });
          setEnableButton(true);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-right",
            iconColor: "white",
            customClass: {
              popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          await Toast.fire({
            icon: "success",
            title: "Success",
          });
        })
        .catch(async (err) => {
          if (err.response.status === 404) {
            localStorage.removeItem("token");
            navigate("/");
            return;
          }
          const Toast = Swal.mixin({
            toast: true,
            position: "top-right",
            iconColor: "white",
            customClass: {
              popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          await Toast.fire({
            icon: "error",
            title: "An error has happened. Please try again!",
          });
          setEnableButton(true);
        });
    } else {
      api
        .delete(`/follow/${id}`, config)
        .then(async () => {
          setUserPage({ ...userPage, isFollowed: false });
          setEnableButton(true);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-right",
            iconColor: "white",
            customClass: {
              popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          await Toast.fire({
            icon: "success",
            title: "Success",
          });
        })
        .catch(async (err) => {
          console.log(err.response.status);
          if (err.response.status === 404) {
            localStorage.removeItem("token");
            navigate("/");
            return;
          }

          const Toast = Swal.mixin({
            toast: true,
            position: "top-right",
            iconColor: "white",
            customClass: {
              popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          await Toast.fire({
            icon: "error",
            title: "An error has happened. Please try again!",
          });
          setEnableButton(true);
        });
    }
  };

  const FollowButton = (id, decoded) => {
    if (id === decoded) return <></>;
    if (isLoading) {
      return (
        <Follow isFollowed={userPage.isFollowed}>
          {Loader(ThreeDots, 40, 40)}
        </Follow>
      );
    } else if (!enableButton) {
      return (
        <Follow isFollowed={userPage.isFollowed} buttonEnable={enableButton}>
          <Oval
            color={userPage.isFollowed ? "#1877f2" : "white"}
            secondaryColor="#c6c6c6"
            height={25}
            width={25}
          />
        </Follow>
      );
    } else {
      return (
        <Follow
          isFollowed={userPage.isFollowed}
          buttonEnable={enableButton}
          onClick={() => FollowRequest(userPage.isFollowed)}
        >
          {userPage.isFollowed ? "Unfollow" : "Follow"}
        </Follow>
      );
    }
  };

  if (!user) {
    return <Loading />;
  }
  return (
    <Container>
      <Header />

      <Main>
        <UserDetails>
          <IconText>
            <Profile>
              <Icon src={userPage.userPicture} />
            </Profile>
            <h2 className="username">
              {isLoading
                ? Loader(ThreeDots, 40, 40)
                : `${userPage.userName}'s posts`}
            </h2>
          </IconText>
          {FollowButton(Number(id), decoded.userId)}
        </UserDetails>
        <Content>
          <Posts isLoading={isLoading}>
            {isLoading
              ? Loader(Oval, 40, 40)
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
                    commentsCount={post.commentsCount}
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

const Loader = (LoadingName, height, width) => {
  return (
    <LoadingName
      color="white"
      secondaryColor="#c6c6c6"
      height={height}
      width={width}
    />
  );
};
