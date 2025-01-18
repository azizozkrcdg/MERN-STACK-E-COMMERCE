import React from "react"
import Policy from "../components/Layout/Layouts/Policy/Policy"
import Header from "../components/Layout/Layouts/Header/Header"
import Footer from "../components/Layout/Layouts/Footer/Footer"
import Contact from "../components/Layout/Contact/Contact"

const ContactPage = () => {
  return (
    <React.Fragment>
        <Header />
        <Contact />
        <Policy />
        <Footer />
    </React.Fragment>
  )
}

export default ContactPage
