import route from "next/router";
import { createContext, useState } from "react";
import User from "../../model/User";
import firebase from "../../firebase/config";
import Router from "next/router";
import router from "next/router";

export const AuthContext = createContext(null);

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signin = async () => {
    try {

      return await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((res) => {
          setUser(res.user);
          Router.push("/");
        });
    } finally {
      setLoading(false);
    }
  };
  const signinGit = async () => {
    try {

      return await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then((res) => {
          setUser(res.user);
          Router.push("/");
        });
    } finally {
      setLoading(false);
    }
  };



  const signout = async () => {

    try{
        Router.push('/auth');

        return firebase
        .auth()
        .signOut()
        .then(()=> setUser(false))
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
        signout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
