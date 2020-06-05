import React from "react";

const Shop = () => {
  return (
    <React.Fragment>
      <h1 style={header}>OFFICIAL FFTE SHOP</h1>
      <p style={header}>The Latest Drops From the Ends.</p>
    </React.Fragment>
  );
};

const header = {
  display: "grid",
  gridTemplateColumns: "1fr",
  textAlign: "center"
};

export default Shop;
