import React from 'react'
import Auth from "../components/Layout/Auth/Auth"
import Header from '../components/Layout/Layouts/Header/Header'
import Footer from '../components/Layout/Layouts/Footer/Footer'

const AuthPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Auth />
      <Footer />
    </React.Fragment>
  )
}

export default AuthPage
