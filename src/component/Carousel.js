import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Carousel = ({items}) => {
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={`${className} custom-prev-arrow`} onClick={onClick}>
        <FaArrowLeft size={24} color="black" />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={`${className} custom-next-arrow`} onClick={onClick}>
        <FaArrowRight size={24} color="black" />
      </button>
    );
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "60px",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <h1>Categories</h1>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="item">
            <a
              href={item.link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="carousel-image"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300";
                }}
              />
              <div className="carousel-name">{item.name}</div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
