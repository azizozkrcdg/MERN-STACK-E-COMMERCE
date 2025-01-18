import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import ContactPage from "./Pages/ContactPage";
import React from "react";
import "./App.css";

function App() {
  return (
      <React.Fragment>
        <HomePage />
        <ShopPage />
        <ContactPage />
      </React.Fragment>
  );
}

export default App;
