import { createContext, useEffect, useState } from "react";




export const AppContext = createContext({
    theme: null,
    setTheme: null
})


export function AppProvider (props) {

    const [theme, setTheme] = useState('light')


    useEffect(()=>{

        let currentTheme = 'light';

        if (typeof window !== "undefined") {
    
             currentTheme = window.localStorage.getItem('USER_THEME')

             setTheme(currentTheme)
            
            }
    


    },[])


  


  

    return(

        <AppContext.Provider value={{theme, setTheme}}>

            {props.children}

        </AppContext.Provider>
    )
} 


