import React from "react"
import Categories from "../components/Layout/Categories/Categories"
import Header from "../components/Layout/Layouts/Header/Header"
import Products from "../components/Layout/Products/Products"
import CampaignSingle from "../components/Layout/CampaignSingle/CampaignSingle"
import Footer from "../components/Layout/Layouts/Footer/Footer"
const ShopPage = () => {
  return (
    <React.Fragment>
        <Header />
        <Categories />
        <Products />
        <CampaignSingle />
        <Products />
        <Footer />
    </React.Fragment>
  )
}

export default ShopPage
