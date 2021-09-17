import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import styled from "styled-components";
import GoogleIcon from "../assets/img/google.svg";


const BoxAuth = styled.div `
background-position: center;
background-size: cover;
overflow-x:hidden;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-image: url('https://source.unsplash.com/random');
background-color: rgba(200, 02, 255, 0.5);
background-blend-mode: color;

`

const TitleAuth = styled.h1`
  font-size: 2rem;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
`;

const ButtonSubmit = styled.button`
  margin-top: 1rem;
  width: 20rem;
  border-radius: 1rem;
  background-color: purple;
  color: white;
  padding: 1rem;

  :hover {
    cursor: pointer;
    background-color: darkmagenta;
  }
`;
const ButtonGoogle = styled(ButtonSubmit)`
  background-color: red;

  :hover {
    background-color: #ee5e5e;
  }
`;

const Hr = styled.hr`
  width: 100%;
  height: 5px;
  background-color: #6306fa;
`;

const IconImg = styled.img`
  width: 5rem;
`;

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modo, setModo] = useState<"login" | "register">("login");

  function submit() {
    if (modo === "login") {
      console.log("login");
    } else {
      console.log("register");
    }
  }

  return (
    <BoxAuth
      
    >
      <TitleAuth>
        {modo === "login" ? "Login with your account" : "Sign in"}{" "}
      </TitleAuth>
      <AuthInput
        required={false}
        type="email"
        label="Email"
        value={email}
        valueChange={setEmail}
      />
      <AuthInput
        required
        type="password"
        label="Password"
        value={password}
        valueChange={setPassword}
      />

      <ButtonSubmit onClick={submit}>
        {modo === "login" ? "Enter" : "Sign in"}
      </ButtonSubmit>

      <Hr />
      <IconImg src={GoogleIcon} />

      <ButtonGoogle onClick={submit}>Enter with Google</ButtonGoogle>
    </BoxAuth>
  );
}
