import {
  SignUpBody,
  LeftSize,
  RightSize,
  Title,
  SubTitle,
  Text,
  Form,
} from "./styles";
import { Input } from "../shared/Input";
import { Button } from "../shared/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import Swal from "sweetalert2";

export default function SignUp() {
  const URL = 'http://localhost:4000'; // alterar pra context depois
  const navigate = useNavigate();
  const [cadastroData, setCadastroData] = useState({
    email: "",
    password: "",
    username: "",
    picture: "",
  });
  const [enableButton, setEnableButton] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (!enableButton) return;

    setEnableButton(false);
    const response = axios.post(`${URL}/signup`, cadastroData);

    response
      .then(() => {
        setTimeout(() => navigate('/'), 2600)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You have registed with sucess! You will redirect to login page',
            showConfirmButton: false,
            timer: 2500,
            background: '#333333',
            color: '#ffffff'
          })
      })
      .catch((err) => {
        let erro;
        if (err.response.data === 'Email already exists!') {
            erro = err.response.data;
        } else if (err.response.data === 'Username already exists!') {
            erro = err.response.data;
        }

        Swal.fire({
            icon: 'error',
            title: erro,
            text: 'Try with another name',
            confirmButtonColor: '#1877F2',
            background: '#333333',
            color: '#ffffff'
          })
        setEnableButton(true);
      });
  }

  return (
    <SignUpBody>
      <LeftSize>
        <Text>
          <Title>Linkr</Title>
          <SubTitle>
            save, share and discover the best links on the web
          </SubTitle>
        </Text>
      </LeftSize>
      <RightSize>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="jaimecinto_bunito@gmail.com"
            value={cadastroData.email}
            functionOnChange={(e) =>
              setCadastroData({ ...cadastroData, email: e.target.value })
            }
            id="email"
            autocomplete="off"
            pattern="^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
            errorMessage={<p>Type a valid email</p>}
            // autoFocus={true}
          >
            e-mail
          </Input>
          <Input
            type="password"
            placeholder="Senh4_Fort3"
            value={cadastroData.password}
            functionOnChange={(e) =>
              setCadastroData({ ...cadastroData, password: e.target.value })
            }
            id="senha"
            autocomplete="off"
            pattern="^.{3,30}$"
            errorMessage={<p>Type a valid password</p>}
          >
            password
          </Input>
          <Input
            type="text"
            placeholder="usuario_maneiro"
            value={cadastroData.username}
            functionOnChange={(e) =>
              setCadastroData({ ...cadastroData, username: e.target.value })
            }
            id="username"
            autocomplete="off"
            pattern="^.{3,30}$"
            errorMessage={<p>Username must be at least 3 characters</p>}
          >
            username
          </Input>
          <Input
            type="url"
            placeholder="fotinha_legal.jpg"
            value={cadastroData.picture}
            functionOnChange={(e) =>
              setCadastroData({ ...cadastroData, picture: e.target.value })
            }
            id="picture"
            autocomplete="off"
            pattern="^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$"
            errorMessage={<p>Type a valid url</p>}
          >
            picture url
          </Input>
          <Button width="429px">
            {enableButton ? (
              <p>Sign up</p>
            ) : (
              <Oval
                ariaLabel="loading-indicator"
                height={30}
                width={30}
                strokeWidth={7}
                color="#ffffff"
                secondaryColor="#9f9f9f"
              />
            )}
          </Button>
        </Form>
        <Link to="/">Switch back to log in</Link>
      </RightSize>
    </SignUpBody>
  );
}
