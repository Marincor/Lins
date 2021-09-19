import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../data/context/AuthContext"
import route from 'next/router'
import {  Player } from "@lottiefiles/react-lottie-player"
import AnimationLoading from '../../assets/lotties/loading.json'
import Cookie from 'js-cookie'

export default function ForceAuth(props) {


    const {user, loading} = useContext(AuthContext)
    const [currentUser, setCurrentUser] = useState(null)


    useEffect(()=>{


        setCurrentUser(user)
    },[currentUser !== null])

  console.log(user, 'teste usewr')
function renderContent() {

    return(

        <> 
            {props.children}
        </>
    )
}

function renderLoading() {

    return(

     
           <Player
  autoplay
  loop
  src={AnimationLoading}
  style={{ height: '500px', width: '500px' }}
>
</Player>
      
    )
}

const logged = Cookie.get('admin-lins-auth');



    if(!loading && logged)  {

      
 

            return   renderContent() 
 
        
   

    } else if(loading) {

        return renderLoading()
    } else {

     
        route.push('/auth')
       return null

    }


  
}