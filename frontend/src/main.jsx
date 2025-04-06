import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import { Layout } from "./Layouts/Layout.jsx";
import CartProvider from "./Context/CartProvider.jsx";
import App from "./App.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <Layout>
        <App />
      </Layout>
    </CartProvider>
  </BrowserRouter>
);
