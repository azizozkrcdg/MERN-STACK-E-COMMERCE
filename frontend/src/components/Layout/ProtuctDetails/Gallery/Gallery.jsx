import { useState } from "react";
import productsData from "../../../../data.json";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "./Gallery.css";

// slider sağ butonu
function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" data-glide-dir=">" onClick={onClick} style={{zIndex : "2"}}>
      <i className="bi bi-chevron-right" ></i>
    </button>
  );
}
NextBtn.propTypes = {
  onClick: PropTypes.func,
};

// slider sol butonu
function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" data-glide-dir="<" onClick={onClick} style={{zIndex : "2"}}>
      <i className="bi bi-chevron-left" ></i>
    </button>
  );
}
PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(
    productsData[0].img.singleImage
  );

  // slider ayarları
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4, //kaç adet ürün görünecek
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={activeImage} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          <ol className="gallery-thumbs glide__slides">
            <Slider {...sliderSettings}>
              {productsData[0].img.thumbs.map((itemImage, index) => (
                <li
                  className="glide__slide glide__slide--active"
                  key={index}
                  onClick={() => setActiveImage(itemImage)}
                >
                  <img
                    src={itemImage}
                    alt=""
                    className={`img-fluid ${
                      activeImage === itemImage ? "active" : ""
                    }`}
                  />
                </li>
              ))}
            </Slider>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
