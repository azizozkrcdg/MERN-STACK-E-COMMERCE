import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
// import ShopPage from "./Pages/ShopPage";
// import ContactPage from "./Pages/ContactPage";
// import React from "react";
// import ProductDetailsPage from "./Pages/ProductDetailsPage";
// import BlogPage from "./Pages/BlogPage";
// import BlogDetailsPage from "./Pages/BlogDetailsPage";
// import AuthPage from "./Pages/AuthPage";
// import CardPage from "./Pages/CardPage";
import "./App.css";


function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
  );
}

export default App;
