import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./styles";

export function UserPage() {
  const { id } = useParams();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTY2MDI2OTM1MiwiZXhwIjoxNjYwMjcyOTUyfQ.a-HdJnGXAXgLIKRz9_5JC2Uk49FrQVICP02uv-UQ3M8`,
      },
    };

    api.get(`/user/${id}`, config).then((response) => {
      if (response.status === 200) {
        setPosts(response.data);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h2>user page {id}</h2>

      {posts?.map((post) => (
        <div
          key={post.description}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <img src={post.picture} alt="" />
          <span>{post.likes}</span>
          <span>{post.username}</span>
          <span>{post.description}</span>
          <span>{post.url}</span>
        </div>
      ))}
    </Container>
  );
}
