import { useContext } from "react"
import { AuthContext } from "../../data/context/AuthContext"
import route from 'next/router'

export default function ForceAuth(props) {


    const {user, loading} = useContext(AuthContext)

function renderContent() {

    return(

        <> 
            {props.children}
        </>
    )
}

function renderLoading() {

    return(

        <div>
            loading...
        </div>
    )
}




    if(!loading && user?.email) {

        return renderContent()

    } else if(loading) {

        return renderLoading()
    } else {

     
        route.push('/auth')
       return null

    }


  
}