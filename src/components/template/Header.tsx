import Title from "./Title";
import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../../data/context/AppContext";
import { IconMoon, IconSun } from "../icons";
import Avatar from "./Avatar";
interface HeaderProps {
  title: string;
  subtitle: string;
}

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const ButtonTheme = styled.button`
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  height: 2rem;
  cursor: pointer;
  width: 10rem;
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  border: none;
  display: flex;
  flex-direction: ${(props) => props.direction};
`;

const BoxIcon = styled.div`
  padding: 1rem;
  width: 3.5rem;
  align-items: center;
  justify-content: space-around;
  height: 1rem;
  border-radius: 1rem;
  display: flex;
  border-radius: 5rem;
  border: 1px solid white;
`;

const TitleButton = styled.p`
  display: none;
  font-size: 0.8rem;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export default function Header(props: HeaderProps) {
  const { theme, setTheme } = useContext(AppContext);

  function changeTheme() {
  

    setTheme(theme === "light" ? "dark" : "light");

    window.localStorage.setItem(
      "USER_THEME",
      theme === "light" ? "dark" : "light"
    );
  }

  const textTheme = {
    light: "Light mode",
    dark: "Dark mode",
  };

  return (
    <BoxHeader>
      <Avatar />
      <ButtonTheme
        onClick={changeTheme}
        bg={
          theme === "light"
            ? "linear-gradient(to right, #a88b8b 40%, #3232b8)"
            : "linear-gradient(to left, #d6c211 , #fc9105)"
        }
        direction={theme === "light" ? "row-reverse" : "row"}
        color={theme === "light" ? "black" : "white"}
      >
        <TitleButton>
          {theme === "light" ? textTheme.dark : textTheme.light}
        </TitleButton>
        <BoxIcon> {theme === "light" ? IconMoon : IconSun}</BoxIcon>
      </ButtonTheme>
      <Title title={props.title} subtitle={props.subtitle} />
     
    </BoxHeader>
  );
}
