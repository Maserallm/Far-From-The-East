import React, { Fragment } from "react";
import ShopStyles from "./shop.module.css";

const Shop = () => {
  return (
    <Fragment>
      <div className={ShopStyles.container_}>
        <h1 className={ShopStyles.header1}>OFFICIAL FFTE SHOP</h1>
        <p className={ShopStyles.header2}>The Latest Drops From the Ends.</p>
        <h3 className={ShopStyles.fwStyle}>FALL / WINTER 2020</h3>
      </div>
    </Fragment>
  );
};

export default Shop;
