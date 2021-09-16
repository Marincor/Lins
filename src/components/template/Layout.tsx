import Content from "./Content";
import Header from "./Header";
import MenuLateral from "./SideMenu";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../data/context/AppContext";
import Lottie from 'react-lottie-player'
import ThemeAnimation from "../../assets/lotties/thememode.json";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

const BoxLayout = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const ButtonTheme = styled.button`
  cursor: pointer;
`;

const DivThemeButton = styled.div `
    width: 0rem;
    cursor: pointer;
    background-color: transparent;

`

export default function Layout(props: LayoutProps) {
    
  const { theme, setTheme } = useContext(AppContext);

  const [themeIcon, setThemeIcon] = useState({
    isStopped: false, direction: null
})





  function changeTheme() {



   
    setThemeIcon({...themeIcon, isStopped:!themeIcon.isStopped, direction: theme === "light"? -1: 1
        
        
        })

        setTimeout(() => {
            
           
   
    setThemeIcon({...themeIcon, isStopped:false
        
        
    })
        }, 1400);
  
    


    setTheme(theme === "light" ? "dark" : "light");

    window.localStorage.setItem(
      "USER_THEME",
      theme === "light" ? "dark" : "light"
    );
  }

  return (
    <BoxLayout>
      <MenuLateral theme={theme} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "grey",
          width: "100%",
          padding: "4rem",
        }}
      >
        <DivThemeButton onClick={changeTheme}>
                <Lottie

            animationData={ThemeAnimation}
            direction={themeIcon.direction}
             play={themeIcon.isStopped}
            style={{ width: 80, height: 80 }}
            />
        </DivThemeButton>
        <Header title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </BoxLayout>
  );
}
