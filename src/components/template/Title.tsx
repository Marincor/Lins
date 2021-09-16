import styled from 'styled-components'


interface TitleProps {


    title: string;
    subtitle: string;
   


}

const TitleText = styled.h1 `


    font-size: 2rem;
    font-family: sans-serif;
    font-weight: bolder;
`

const SubtitleText = styled.h2 `


    font-size: 1rem;
    color: lightgray;

`

export default function Title(props: TitleProps) {


    return(

        <div>
            <TitleText>{props.title}</TitleText>
            <SubtitleText>{props.subtitle}</SubtitleText>

        </div>
    )
} 