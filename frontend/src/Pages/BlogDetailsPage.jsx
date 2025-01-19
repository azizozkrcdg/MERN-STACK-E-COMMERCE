import React from "react";
import BlogDetails from "../components/Layout/BlogDetails/BlogDetails";
import Header from "../components/Layout/Layouts/Header/Header";
import Footer from "../components/Layout/Layouts/Footer/Footer";


const BlogDetailsPage = () => {
  return (
    <React.Fragment>
      <Header />
      <BlogDetails />
      <Footer />
    </React.Fragment>
  );
};

export default BlogDetailsPage;
