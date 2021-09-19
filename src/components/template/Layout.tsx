import Content from "./Content";
import Header from "./Header";
import MenuLateral from "./SideMenu";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../data/context/AppContext";
import { AuthContext } from "../../data/context/AuthContext";
import ForceAuth from "../auth/AuthForce";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

const BoxLayout = styled.div`
  display: flex;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.bg};


  @media screen and (min-width:768px){

    height: 100vh;
    width: 100vw;

  }
  
`;

export default function Layout(props: LayoutProps) {

  const { theme } = useContext(AppContext);





  return (


    
<ForceAuth>



    <BoxLayout bg={theme === 'light'? 'lightblue':'gray'} >
    <MenuLateral theme={theme} />

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflow: "hidden",
        height: '100vh',
        marginLeft: '2rem',
        marginRight: '2rem'
       
      }}
      >
      <Header title={props.title} subtitle={props.subtitle} />
      <Content>{props.children}</Content>
    </div>
  </BoxLayout>

      </ForceAuth>
    

  

  );
}
