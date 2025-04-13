import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import CardPage from "./Pages/CardPage";
import AuthPage from "./Pages/AuthPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";

import "./App.css";
import AdminUserPage from "./Pages/admin/AdminUserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/admin/*">
        <Route path="users" element={<AdminUserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
