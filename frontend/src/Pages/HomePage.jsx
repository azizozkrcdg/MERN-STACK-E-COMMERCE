import React from "react"
import Header from '../components/Layout/Layouts/Header/Header'
import Sliders from '../components/Layout/Sliders/Sliders'
import Footer from '../components/Layout/Layouts/Footer/Footer'
import Policy from '../components/Layout/Layouts/Policy/Policy'
import Categories from '../components/Layout/Categories/Categories'
import Products from '../components/Layout/Products/Products'
import Campaigns from '../components/Layout/Campaigns/Campaigns'
import Blogs from '../components/Layout/Blogs/Blogs'
import Brands from '../components/Layout/Brands/Brands'
import CampaignSingle from '../components/Layout/CampaignSingle/CampaignSingle'
const HomePage = () => {
  return (
    <React.Fragment>
        <Header />
        <Sliders />
        <Categories />
        <Products />
        <Campaigns />
        <Products />
        <Blogs />
        <Brands />
        <CampaignSingle />
        <Policy />
        <Footer />
    </React.Fragment>
      
  )
}

export default HomePage
