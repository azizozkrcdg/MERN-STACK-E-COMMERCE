import React from "react"
import Header from "../components/Layout/Layouts/Header/Header"
import Footer from "../components/Layout/Layouts/Footer/Footer"
import Blogs from "../components/Layout/Blogs/Blogs"

const BlogPage = () => {
  return (
    <React.Fragment>
        <Header />
        <div className="blog-page">
        <Blogs />
        </div>
        <Footer />
    </React.Fragment>
  )
}

export default BlogPage
