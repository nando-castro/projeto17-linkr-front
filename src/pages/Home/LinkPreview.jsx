import { useAuth } from "../../context/auth";
import { Article, Image, Link, Title, Url } from "./styles";

export default function LinkPreview() {
  const { timeline } = useAuth();

  let metadata = [];
  for (let i = 0; i < timeline.length; i++) {
    const { urlData } = timeline[i];

    metadata.push(urlData);
  }
  return metadata.map((i, index) => (
    <Link key={index}>
      <Title>{i.title}</Title>
      <Article>{i.description}</Article>
      <Url>{i.url}</Url>
      <Image src={i.image} />
    </Link>
  ));
}
