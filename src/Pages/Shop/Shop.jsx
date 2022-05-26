import React from "react";
import "../Shop/Shop.css"
import Ads from "../../Components/Adsbar/Ads";
import Pastaproduct from "../../Components/PastaProducts/Pastaproduct";
import Shopnav from "../../Components/ShopNav/Shopnav";
import Pancakeproduct from "../../Components/PancakesProducts/Pancakeproduct";
import Ketoneproducts from "../../Components/KetoneProducts/Ketoneproducts";


const Shop = () => {
  return (
    <div className="shop">
      <Ads/>
      <Shopnav/>
      <div className="products-section">
        <Pastaproduct/>
        <Pancakeproduct/>
        <Ketoneproducts/>
      </div>
    </div>
  );
};

export default Shop;
