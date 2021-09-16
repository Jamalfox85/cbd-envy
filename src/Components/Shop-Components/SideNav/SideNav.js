import React from "react";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="sidenav-wrapper">
      <div className="sidenav-contents">
        <div className="search-group">
          <div className="icon"></div>
          <input placeholder="Search Now!" />
          <button>Enter</button>
        </div>
        <div className="filter-group">
          <h2>Sort By:</h2>
          <div className="price-filter-group">
            <h4>Price</h4>
            <div className="price-range">
              <input placeholder="$0" maxLength="5" />
              <p>to</p>
              <input placeholder="$100" maxLength="5" />
            </div>
          </div>
          <div className="category-filter-group">
            <h4>Categories</h4>
            <div className="filters">
              <div className="filter">
                <input type="checkbox" name="tinctures" />
                <label for="tinctures">Tinctures</label>
              </div>

              <div className="filter">
                <input type="checkbox" name="edibles" />
                <label for="edibles">Edibles</label>
              </div>

              <div className="filter">
                <input type="checkbox" name="vapes" />
                <label for="vapes">Vapes</label>
              </div>

              <div className="filter">
                <input type="checkbox" name="flower" />
                <label for="flower">Flower</label>
              </div>

              <div className="filter">
                <input type="checkbox" name="tools" />
                <label for="tools">Tools</label>
              </div>
            </div>
          </div>
          <div className="rating-filter-group">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
