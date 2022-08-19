import { Container, Loader } from "./styles";

export function LoadingPost() {
  return (
    <Container>
      <Loader />

      <p>Loading more posts...</p>
    </Container>
  );
}
