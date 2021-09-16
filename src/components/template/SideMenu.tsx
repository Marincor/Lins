import { IconAdjust, IconBell, IconHome, IconLogout } from "../icons";
import MenuItem from "./MenuItem";
import styled from "styled-components";

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

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;


`;

const BoxLogo = styled.div `
    margin: 2rem 0rem; 
    width: 40px;    
    height: 40px;
    background: radial-gradient(#d3d3ec, #7008e7, #3a2db6);
    border-radius: 2rem;
    border: 1px solid black;
   

`

export default function MenuLateral() {
  return (
    <Aside>
        <BoxLogo/>
      <Ul>
        <MenuItem url="/" text={"Home"} icon={IconHome} />
        <MenuItem url="/adjust" text={"Adjust"} icon={IconAdjust} />
        <MenuItem url="/notifications" text={"Notifications"} icon={IconBell} />
      </Ul>
      <Ul>
      <MenuItem  text={"Logout"} icon={IconLogout} />
      </Ul>
    </Aside>
  );
}
