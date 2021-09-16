import styled from "styled-components";
import Link from "next/link";
interface MenuItemProps {
  url?: string;
  text: string;
  icon: any;
  onClick?: (evento: any) => void
}

const Li = styled.li`
  background-color: white;
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
  function renderLink() {
    return (
      <Link href={props.url}>
        {props.icon}
        <TextLi>{props.text}</TextLi>
      </Link>
    );
  }

  return (



    props.url? 
      <Link href={props.url} > 
    <Li>
        {props.icon}
        <TextLi>{props.text}</TextLi>
     
    </Li>
      </Link> :
       <Li onClick={props.onClick}>
       {props.icon}
       <TextLi>{props.text}</TextLi>
    
   </Li>
  );
}
