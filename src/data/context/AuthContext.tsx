import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import Router from "next/router";
import Cookies from "js-cookie";

export const AuthContext = createContext(null);

function manageCookie(loggged: boolean) {
  if (loggged) {

    Cookies.set('admin-lins-auth', loggged, {

      expires: 7

    })
  } else {

    Cookies.remove('admin-lins-auth')
  }
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{

    if(Cookies.get('admin-lins-auth')){
   

      const cancel =   firebase.auth().onIdTokenChanged(configSession)

      return () => cancel()
    
    } else {

      setLoading(false)
    }
 




 

  },[])

  function configSession (userFirebase) {

    if (userFirebase) {

      setLoading(false)
      setUser(userFirebase)
      manageCookie(true)
      return console.log(user?.email)

    }else {

      manageCookie(false)
      setLoading(false)
      return false
    }

  }

  const signin = async () => {
    try {
      setLoading(true)
      return await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((res) => {

          configSession(res.user)
          Router.push("/");
        });
    } finally {
      setLoading(false)
    }
  };
  const signinGit = async () => {
    try {
      setLoading(true)
      return await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then((res) => {
          configSession(res.user)
          Router.push("/");
        });
    } finally {

      setLoading(false)
    }
  };

  const signout = async () => {
    try {
      setLoading(true)
      Router.push("/auth");

      return firebase
        .auth()
        .signOut()
        .then(() => setUser(false));
    } finally {
      setLoading(false)
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signin,
        signinGit,
        signout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
