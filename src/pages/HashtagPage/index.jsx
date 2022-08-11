import React from 'react'
import axios from 'axios'
import {Link, useParams} from "react-router-dom";
import styled from 'styled-components';
import {api} from "../../services/api"
import { Container, Timeline, Top } from './styles';
import { Header } from "../../components/Header";

export default function HashtagPage() {
    const {hashtag} = useParams();
   
  return (
    <Container>
      <Header />
      <Timeline>
        <Top>{hashtag}</Top>
        {/* <Post/> */}
      </Timeline>
    </Container>
  )
}
