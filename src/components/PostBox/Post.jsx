import ReactHashtag from "@mdnm/react-hashtag";
import {
  Article,
  Body,
  Description,
  Icon,
  Image,
  Link,
  Name,
  Profile,
  Title,
  Url,
  PostWrapper,
  UrlContent,
  Like,
} from "./styles";
import { useNavigate } from "react-router-dom";
export default function Post({
  picture,
  username,
  description,
  url,
  urlDescription,
  urlTitle,
  urlImage,
  likes
}) {
  function openUrl(url) {
    window.open(`${url}`);
  }
  const navigate = useNavigate();

  return (
    <PostWrapper>
      <Profile>
        <Icon src={picture} />
        <Like>{likes}</Like>
      </Profile>
      <Body>
        <Name>{username}</Name>
        <Description>
          <p>
            <ReactHashtag
              onHashtagClick={(hashtag) =>
                navigate(`/hashtag/${hashtag.replace("#", "")}`)
              }
            >
              {description}
            </ReactHashtag>
          </p>
        </Description>
        <Link onClick={() => openUrl(url)}>
          <UrlContent>
            <Title>{urlTitle}</Title>
            <Article>{urlDescription}</Article>
            <Url>{url}</Url>
          </UrlContent>
          <Image src={urlImage} />
        </Link>
      </Body>
    </PostWrapper>
  );
}
