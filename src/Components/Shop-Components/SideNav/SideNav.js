import { React, useState } from "react";
import "./SideNav.css";

const SideNav = () => {
  const checkBoxFilters = ["tincutres", "edibles", "tools"];

  const [checkedState, setCheckedState] = useState(
    new Array(checkBoxFilters.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    console.log(position);
    return position;
  };

  return (
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
  );
};

export default SideNav;
