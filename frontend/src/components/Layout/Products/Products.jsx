import { useState } from "react";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
import PropTypes from "prop-types";
import productsData from "../../../data.json";
import "./Products.css";

// slider sağ butonu
function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}
NextBtn.propTypes = {
  onClick: PropTypes.func,
};

// slider sol butonu
function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}
PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const Products = () => {
  const [products] = useState(productsData);

  // slider ayarları 
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4, //kaç adet ürün görünecek
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    autoplaySpeed : 3000, //otomatik kayma süresi
    autoplay : true, 
    responsive : [
      {
        breakpoint : 992,
        settings : {
          slidesToShow : 2
        }
      },
      {
        breakpoint : 520,
        settings : {
          slidesToShow : 1
        }
      }
    ]
  };

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper product-carousel">
          <div className="glide__track">
            <Slider {...sliderSettings}>
              {products.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
