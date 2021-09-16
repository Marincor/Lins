import styled from 'styled-components'


const BoxContent = styled.div `

    display: flex;
    flex-direction: column;
    margin-top: 2rem;


`



interface ContentProps {



children?:any


}


export default function Content(props: ContentProps) {


    return(

        <BoxContent>
              {props.children}

        </BoxContent>
    )
} 