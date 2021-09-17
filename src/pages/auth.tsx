import { useContext, useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import styled from "styled-components";
import GoogleIcon from "../assets/img/google.svg";
import GithubIcon from '../assets/img/github-icon-1.svg'
import { AuthContext } from "../data/context/AuthContext";

const BoxAuth = styled.div`
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://source.unsplash.com/random");
  background-color: rgba(200, 02, 255, 0.5);
  background-blend-mode: color;
`;

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
const ButtonFirebase = styled(ButtonSubmit)`
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
  margin-top: 1rem;
`;

const LinkModo = styled.a`
  cursor: pointer;
  font-size: 1rem;
  color: white;

  :hover {
    text-decoration: underline;
    color: darkred;
  }
`;

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modo, setModo] = useState<"login" | "register">("login");

  const { user, signin, signinGit } = useContext(AuthContext);

  console.log(user);

  function submit() {
    if (modo === "login") {
      console.log("login");
    } else {
      console.log("register");
    }
  }

  return (
    <BoxAuth>
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

      <ButtonFirebase onClick={signin}>Enter with Google</ButtonFirebase>

      <IconImg src={GithubIcon} />

      <ButtonFirebase onClick={signinGit}>Enter with Github</ButtonFirebase>

      {modo === "login" ? (
        <p>
          <LinkModo onClick={() => setModo("register")}>
            {" "}
            Create an account
          </LinkModo>
        </p>
      ) : (
        <p>
          <LinkModo onClick={() => setModo("login")}>
            Login with your account
          </LinkModo>
        </p>
      )}
    </BoxAuth>
  );
}
