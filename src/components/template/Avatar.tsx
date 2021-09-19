import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../data/context/AuthContext'
import styled from 'styled-components'
import AvatarIcon from '../../assets/img/avatar.svg.svg'
const Image = styled.img `

    width: 10rem;
    border-radius: 1rem;
    cursor: pointer;
    margin: 1rem 0rem;

`

export default function Avatar () {

const {user} = useContext(AuthContext)

useEffect(()=>{
    console.log(user)


},[])



    return(

          <Link href='/perfil'>
              <Image src={user?.photoURL || AvatarIcon} alt="user avatar" />
          </Link>  

    )
}