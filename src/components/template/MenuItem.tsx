import styled from "styled-components";
import Link from "next/link";
import { darkTheme, lightTheme } from "../../assets/themes/themes";
interface MenuItemProps {
  url?: string;
  text: string;
  icon: any;
  onClick?: (evento: any) => void;
  className?: string
  theme?: any
}

const Li = styled.li`
  color: ${(props) => props.dark};
  width: 2rem;
  margin-right: 2.5rem;
  padding: 0rem 0.1rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  :hover {
    cursor: pointer;
    border-top: 1px solid black;
  }
`;

const TextLi = styled.p`
  font-size: 0.5rem;
  font-family: sans-serif;
`;

export default function MenuItem(props: MenuItemProps) {



  return (



    props.url? 
      <Link href={props.url} > 
    <Li dark={props.theme === 'light'? lightTheme.color : darkTheme.color}>
        {props.icon}
        <TextLi>{props.text}</TextLi>
     
    </Li>
      </Link> :

       <Li onClick={props.onClick}  dark={'red'}>
       {props.icon}
       <TextLi>{props.text}
       </TextLi>
    
   </Li>
  );
}
