import React from "react";
import { Container, Loader } from "./styles";

export default function Loading(props) {
  return (
    <Container>
      <Loader></Loader>
      {props.children}
    </Container>
  );
}

