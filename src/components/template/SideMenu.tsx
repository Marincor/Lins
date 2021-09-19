import {  IconBell, IconHome, IconLogout, IconProfile } from "../icons";
import MenuItem from "./MenuItem";
import styled from "styled-components";
import { useContext } from "react";
import { darkTheme, lightTheme } from "../../assets/themes/themes";
import { AuthContext } from "../../data/context/AuthContext";



const Aside = styled.aside`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props:any)=> props.dark};


`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  text-align: center;


  :nth-child(1) {

    flex-grow: 1;
  }
`;


const BoxLogo = styled.div `
    margin: 2rem 0rem; 
    width: 40px;    
    height: 40px;
    background: radial-gradient(#d3d3ec, #7008e7, #3a2db6);
    border-radius: 2rem;
    border: 1px solid black;
   

`


export default function MenuLateral(props:any) {

  const {signout} = useContext(AuthContext);





  return (
    <Aside dark={props.theme === 'light'? lightTheme.body : darkTheme.body } >
        <BoxLogo/>
      <Ul>
        <MenuItem url="/" text={"Home"} icon={IconHome} theme={props.theme}  />
        <MenuItem url="/profile" text={"Profile"} icon={IconProfile} theme={props.theme}   />
        <MenuItem url="/notifications" text={"Notifications"} theme={props.theme}    icon={IconBell} />
      </Ul>
      <Ul>
      <MenuItem   text={"Logout"} icon={IconLogout} className={'red'} onClick={(e)=> {  signout()}} />
      </Ul>
    </Aside>
  );
}
