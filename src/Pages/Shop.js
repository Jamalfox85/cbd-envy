import React from "react";
import Products from "../Components/Shop-Components/Products/Products";
import RightPanel from "../Components/Shop-Components/RightPanel/RightPanel";
import SideNav from "../Components/Shop-Components/SideNav/SideNav";
import "../Main.css";

const Shop = () => {
  return (
    <div className="shop-wrapper">
      <SideNav />
      <Products />
      <RightPanel />
    </div>
  );
};

export default Shop;
