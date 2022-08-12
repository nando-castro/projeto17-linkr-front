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
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Loader } from "../../components/Loading/styles";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

export default function Post() {
  const { timeline, setTimeline } = useAuth();
  const [like, setLike] = useState(false);

  const URL = `http://localhost:4000/timeline`;

  useEffect(() => {
    function getPostsTimeline() {
      const promise = axios.get(URL);
      promise
        .then((res) => {
          setTimeline(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getPostsTimeline();
  }, []);

  function haddleLike() {
    setLike(true);
  }
  function haddleDislike() {
    setLike(false);
  }

  function renderTimeline() {
    return timeline.map((i, index) => (
      <Posts key={index}>
        <Profile>
          <Icon src={i.picture} />
          <Like>
            {like === false ? (
              <IoIosHeartEmpty onClick={haddleLike} />
            ) : (
              <IoIosHeart onClick={haddleDislike} className="active-like" />
            )}
          </Like>
          <Cont>{i.likes}</Cont>
        </Profile>
        <Body>
          <Name>{i.username}</Name>
          <Description>{i.description}</Description>
          <OpenLink href={i.url} target="_blank" rel="noreferrer noopener">
            <Link key={index}>
              <Title>{i.urlTitle}</Title>
              <Article>{i.urlDescription}</Article>
              <Url>{i.url}</Url>
              <Image src={i.urlImage} />
            </Link>
          </OpenLink>
        </Body>
      </Posts>
    ));
  }

  return (
    <>
      {timeline.length > 0 ? (
        <Container>{renderTimeline()}</Container>
      ) : (
        <Container>
          <Message>Carregando...</Message>
          <br></br>
          <Loader />
        </Container>
      )}
    </>
  );
}
