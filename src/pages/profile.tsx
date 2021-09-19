import { useContext } from "react";
import Layout from "../components/template/Layout";
import { AuthContext } from "../data/context/AuthContext";
import styled from 'styled-components'
import { ContentTitle } from "../assets/UI";




export default function Perfil() {

  const {user} = useContext(AuthContext)


  return (
   
   <Layout title="Perfil Page" subtitle="Here you see your profile">

      <ContentTitle>Welcome, {user?.displayName}</ContentTitle>
      <ContentTitle>your email: {user?.email}</ContentTitle>
   </Layout>
  )
}