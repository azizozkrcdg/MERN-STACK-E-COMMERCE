import React from "react";
import Categories from "../components/Layout/Categories/Categories";
import Products from "../components/Layout/Products/Products";
import CampaignSingle from "../components/Layout/CampaignSingle/CampaignSingle";

const ShopPage = () => {
  return (
    <React.Fragment>
        
        <Categories />
        <Products />
        <CampaignSingle />
        <Products />
        
    </React.Fragment>
  );
};

export default ShopPage;
