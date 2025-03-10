import { useState } from "react";
import "./Info.css";

const Info = () => {
  // renk seçimi state
  const [activeWrapper, setActiveWrapper] = useState("blue");

  // beden seçmi state
  const [activeSize, setActiveSize] = useState("xs");

  return (
    <div className="product-info">
      <h1 className="product-title">Ridley High Waist</h1>
      <div className="product-review">
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <span>2 reviews</span>
      </div>
      <div className="product-price">
        <s className="old-price">$165</s>
        <strong className="new-price">$100</strong>
      </div>
      <p className="product-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <form className="variations-form">
        <div className="variations">
          <div className="colors">
            <div className="colors-label">
              <span>Color</span>
            </div>
            {/* colors */}
            <div className="colors-wrapper">
              <div
                className={`color-wrapper ${
                  activeWrapper === "blue" ? "active" : ""
                }`}
                id="blue"
              >
                <label className="blue-color">
                  <input
                    type="radio"
                    name="product-color"
                    onClick={() => setActiveWrapper("blue")}
                  />
                </label>
              </div>
              <div
                className={`color-wrapper ${
                  activeWrapper === "red" ? "active" : ""
                }`}
                id="red"
              >
                <label className="red-color">
                  <input
                    type="radio"
                    name="product-color"
                    onClick={() => setActiveWrapper("red")}
                  />
                </label>
              </div>
              <div
                className={`color-wrapper ${
                  activeWrapper === "green" ? "active" : ""
                }`}
                id="green"
              >
                <label className="green-color">
                  <input
                    type="radio"
                    name="product-color"
                    onClick={() => setActiveWrapper("green")}
                  />
                </label>
              </div>
              <div
                className={`color-wrapper ${
                  activeWrapper === "purple" ? "active" : ""
                }`}
                id="purple"
              >
                <label className="purple-color">
                  <input
                    type="radio"
                    name="product-color"
                    onClick={() => setActiveWrapper("purple")}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="values">
            <div className="values-label">
              <span>Size</span>
            </div>
            <div className="values-list">
              <span
                className={`${activeSize === "xs" ? "active" : ""}`}
                id="xs"
                onClick={() => setActiveSize("xs")}
              >
                XS
              </span>
              <span
                className={`${activeSize === "s" ? "active" : ""}`}
                id="s"
                onClick={() => setActiveSize("s")}
              >
                S
              </span>
              <span
                className={`${activeSize === "m" ? "active" : ""}`}
                id="m"
                onClick={() => setActiveSize("m")}
              >
                M
              </span>
              <span
                className={`${activeSize === "l" ? "active" : ""}`}
                id="l"
                onClick={() => setActiveSize("l")}
              >
                L
              </span>
              <span
                className={`${activeSize === "xl" ? "active" : ""}`}
                id="xl"
                onClick={() => setActiveSize("xl")}
              >
                XL
              </span>
            </div>
          </div>
          <div className="cart-button">
            <input type="number" defaultValue="1" min="1" id="quantity" />
            <button
              className="btn btn-lg btn-warning"
              id="add-to-cart"
              type="button"
            >
              Add to cart
            </button>
          </div>
          <div className="product-extra-buttons">
            <a href="#">
              <i className="bi bi-globe"></i>
              <span>Size Guide</span>
            </a>
            <a href="#">
              <i className="bi bi-heart"></i>
              <span>Add to Wislist</span>
            </a>
            <a href="#">
              <i className="bi bi-share"></i>
              <span>Share this Product</span>
            </a>
          </div>
        </div>
      </form>
      <div className="divider"></div>
      <div className="product-meta">
        <div className="product-sku">
          <span>SKU:</span>
          <strong>BE45VGRT</strong>
        </div>
        <div className="product-categories">
          <span>Categories:</span>
          <strong>Pants , Women</strong>
        </div>
        <div className="product-tags">
          <span>Tags:</span>
          <a href="#">black</a>,<a href="#">white</a>
        </div>
      </div>
    </div>
  );
};

export default Info;
