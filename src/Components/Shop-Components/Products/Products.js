import React, { useState } from "react";
import Product from "./Product";
import "./Products.css";

import tincture from "../../../assets/tincture-img.png";

const Products = () => {
  // const [productIndex, setproductIndex] = useState([]);

  // fetch(
  //   // "https://brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com/strains/?rapidapi-key=74e2c24ffdmsh70146fdb0d2975fp12e7dajsn5787807be78c"
  //   "https://api.agify.io/?name=bella"
  // )
  //   .then((res) => res.json())
  //   .then((json) => {
  //     setproductIndex(json);
  //     // console.log(json);
  //     console.log(productIndex);
  //   })
  //   .catch((error) => {
  //     throw error;
  //   });

  const productIndex = [
    {
      name: "Gorilla Glue CBD",
      price: 4.0,
      image: tincture,
      quantity: 0,
    },
    {
      name: "Gorilla Glue CBD",
      price: 4.0,
      image: tincture,
      quantity: 0,
    },
    {
      name: "Gorilla Glue CBD",
      price: 4.0,
      image: tincture,
      quantity: 0,
    },
    {
      name: "Gorilla Glue CBD",
      price: 4.0,
      image: tincture,
      quantity: 0,
    },
    {
      name: "Gorilla Glue CBD",
      price: 4.0,
      image: tincture,
      quantity: 0,
    },
    {
      name: "Gorilla Glue CBD",
      price: 4.0,
      image: tincture,
      quantity: 0,
    },
    {
      name: "Gorilla Glue CBD",
      price: 4.0,
      image: tincture,
      quantity: 0,
    },
    {
      name: "Gorilla Glue CBD",
      price: 4.0,
      image: tincture,
      quantity: 0,
    },
    {
      name: "Gorilla Glue CBD",
      price: 4.0,
      image: tincture,
      quantity: 0,
    },
    {
      name: "Gorilla Glue CBD",
      price: 4.0,
      image: tincture,
      quantity: 0,
    },
  ];

  const loadProductName = () => {
    const next = productIndex[0];
    return next.name;
  };
  const loadProductPrice = () => {
    const next = productIndex[0];
    return next.price;
  };
  const loadProductImage = () => {
    const next = productIndex[0];
    return next.image;
  };
  const loadProductQuantity = () => {
    const next = productIndex[0];
    const remove = productIndex.shift();
    productIndex.push(remove);
    return next.quantity;
  };

  return (
    <div className="products-wrapper">
      <h1 className="products-header">Shop</h1>
      <div className="products-list">
        {productIndex.map(() => (
          <Product
            name={loadProductName()}
            price={loadProductPrice()}
            image={loadProductImage()}
            quantity={loadProductQuantity()}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
