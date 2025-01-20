import React from 'react'
import Header from '../components/Layout/Layouts/Header/Header'
import Footer from '../components/Layout/Layouts/Footer/Footer'
import ProductDetails from '../components/Layout/ProtuctDetails/ProductDetails'

const ProductDetailsPage = () => {
  return (
    <React.Fragment>
        <Header />
        <ProductDetails />
        <Footer />
    </React.Fragment>
  )
}

export default ProductDetailsPage
