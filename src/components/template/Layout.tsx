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
  height: 100vh;
  width: 100vw;
`;

export default function Layout(props: LayoutProps) {

  const { theme } = useContext(AppContext);
  const {user} = useContext(AuthContext);





  return (


    
<ForceAuth>



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
      <Header title={props.title} subtitle={props.subtitle} />
      <Content>{props.children}</Content>
    </div>
  </BoxLayout>

      </ForceAuth>
    

  

  );
}
