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
  background-color: ${(props) => props.secondarybg? props.secondarybg : 'red' };

  :hover {
    background-color:${(props) => props.secondarybgh? props.secondarybgh : '#ee5e5e' };
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


const AlertErro = styled.h2 `


background-color: #e06d6d;
color: white;
display: flex;
text-align: center;
font-size: 0.8rem;
padding: 2rem;
border-radius: 1rem;

`

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modo, setModo] = useState<"login" | "register">("login");

  const [erro, setErro] = useState(null)

  const { user, signin, signinGit, signinEmail, register } = useContext(AuthContext);

  console.log(user);

  async function submit() {

    try{


      if (modo === "login") {
       
       await   signinEmail(email, password)
      } else {
        
         await register(email, password)
      }
    } catch(e) {

      setErro(e.message)

      setTimeout(() => {
        setErro(null)
      }, 5000);
    }
  }

  return (
    <BoxAuth>
      <TitleAuth>
        {modo === "login" ? "Login with your account" : "Sign in"}{" "}
      </TitleAuth>
       { erro?   <AlertErro>{erro}</AlertErro> : false}
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

      <ButtonFirebase secondarybg={'darkgray'} secondarybgh={'gray'} onClick={signinGit}>Enter with Github</ButtonFirebase>

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
