import React, { useState } from "react";
import RightPanel from "../RightPanel/RightPanel";
import Product from "./Product";
import "./Products.css";
import "../../../Main.css";
import "../../../Components/Shop-Components/SideNav/SideNav.css";
import "../../../Components/Shop-Components/RightPanel/RightPanel.css";

import tinctureimg from "../../../assets/tincture-img.png";

const Products = () => {
  //Products
  const [productIndex, setproductIndex] = useState([
    {
      name: "Gorilla Glue CBD",
      price: 4.0,
      image: tinctureimg,
      quantity: 0,
      category: "tincture",
    },
    {
      name: "Girl Scout Cookies",
      price: 5.0,
      image: tinctureimg,
      quantity: 0,
      category: "tincture",
    },
    {
      name: "Alaskan Thunderfuck",
      price: 8.0,
      image: tinctureimg,
      quantity: 0,
      category: "tool",
    },
  ]);
  const [visible, setVisible] = useState([]);
  const [tincture, setTincture] = useState(false);
  const [edible, setEdible] = useState(false);
  const [tool, setTool] = useState(false);
  //
  // fetch(
  //   "https://brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com/strains/?rapidapi-key=74e2c24ffdmsh70146fdb0d2975fp12e7dajsn5787807be78c"
  //   // "https://api.agify.io/?name=bella"
  // )
  //   .then((res) => res.json())
  //   .then((json) => {
  //     setproductIndex([json]);
  //     // console.log(json);
  //     console.log(productIndex);
  //   })
  //   .catch((error) => {
  //     throw error;
  //   });

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

  //Side Nav
  const checkBoxFilters = ["tinctures", "edibles", "tools"];

  const [checkedState, setCheckedState] = useState(
    new Array(checkBoxFilters.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    switch (position) {
      case 0:
        setTincture(!tincture);
        if (tincture === true) {
          setVisible(productIndex);
          console.log(productIndex.length);
          console.log(visible.length);
          setproductIndex(visible);
        } else {
          setVisible(visible.filter((e) => e.category !== "tincture"));
          console.log("false");
          setproductIndex(visible);
        }
        // setVisible(productIndex.filter((e) => e.category === "tincture"));
        // setproductIndex(visible);
        // console.log(checkedState);
        break;
      case 1:
        setVisible(productIndex.filter((e) => e.category === "edible"));
        setproductIndex(visible);
        console.log(checkedState);
        break;
      case 2:
        setVisible(productIndex.filter((e) => e.category === "tool"));
        setproductIndex(visible);
        console.log(checkedState);
        break;
      default:
        return;
    }
    return position;
  };

  const updateList = () => {
    setproductIndex();
  };

  return (
    <div className="shop-wrapper">
      <div className="sidenav-wrapper">
        <div className="sidenav-contents">
          {/* <div className="search-group">
        <div className="icon"></div>
        <input placeholder="Search Now!" />
        <button>Enter</button>
      </div> */}
          <div className="filter-group">
            {/* <h2>Sort By:</h2>
        <div className="price-filter-group">
          <h4>Price</h4>
          <div className="price-range">
            <input placeholder="$0" maxLength="5" />
            <p>to</p>
            <input placeholder="$100" maxLength="5" />
          </div>
        </div> */}
            <div className="category-filter-group">
              <h4>Categories</h4>
              <div className="filters">
                {checkBoxFilters.map((name, index) => {
                  return (
                    <div className="filter">
                      <input
                        type="checkbox"
                        id={index}
                        name={name}
                        value={name}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                      />
                      <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <div className="rating-filter-group">
          <h4>Rating</h4>
          <div className="ratings">
            <div className="rating">
              <div className="stars">
                <div className="star checked"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
              </div>
              <p>And Up</p>
            </div>
            <div className="rating">
              <div className="stars">
                <div className="star checked"></div>
                <div className="star checked"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
              </div>
              <p>And Up</p>
            </div>
            <div className="rating">
              <div className="stars">
                <div className="star checked"></div>
                <div className="star checked"></div>
                <div className="star checked"></div>
                <div className="star"></div>
                <div className="star"></div>
              </div>
              <p>And Up</p>
            </div>
            <div className="rating">
              <div className="stars">
                <div className="star checked"></div>
                <div className="star checked"></div>
                <div className="star checked"></div>
                <div className="star checked"></div>
                <div className="star"></div>
              </div>
              <p>And Up</p>
            </div>
          </div>
        </div> */}
          </div>
        </div>
      </div>
      <div className="products-wrapper">
        <h1 className="products-header">Shop</h1>
        <div className="products-list">
          {productIndex.map((index) => (
            <Product
              name={loadProductName()}
              price={loadProductPrice()}
              image={loadProductImage()}
              quantity={loadProductQuantity()}
            />
          ))}
        </div>
      </div>

      <RightPanel />
    </div>
  );
};

export default Products;
