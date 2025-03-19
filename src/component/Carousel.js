import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Carousel Data
const carouselItems = [
  { id: 1, name: "CLOTHING", link: "/clothing", image: "https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg" },
  { id: 2, name: "RESTAURANT", link: "/restaurant", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3" },
  { id: 3, name: "GROCERY", link: "/instamart", image: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Grocery_Gourmet_Food1.jpeg" },
  { id: 4, name: "DINEOUT", link: "/dineout", image: "https://www.dineout.co.in/blog/wp-content/uploads/2019/11/rsz_101.jpg" },
  { id: 5, name: "BEAUTY", link: "/beauty", image: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Beauty_Personal_Care_.jpg" },
  { id: 6, name: "ELECTRONICS", link: "/electronics", image: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Electronicss1.jpeg" },
  { id: 7, name: "MOBILES", link: "/mobiles", image: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$" },
  { id: 8, name: "BOOKS", link: "/books", image: "https://alphasilver.productsalphawizz.com/uploads/media/2024/Books.jpeg" },
];

// Custom Arrows
const PrevArrow = ({ className, onClick }) => (
  <button className={`${className} custom-prev-arrow`} onClick={onClick}>
    <FaArrowLeft size={24} />
  </button>
);

const NextArrow = ({ className, onClick }) => (
  <button className={`${className} custom-next-arrow`} onClick={onClick}>
    <FaArrowRight size={24} />
  </button>
);

// Carousel Component
const Carousel = () => {
  const settings = {
    infinite: true, // Continuous loop
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false, // Keep autoplay even when hovered
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="carousel-container">
      <h2>Categories</h2>
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div key={item.id} className="carousel-item">
            <a href={item.link} className="carousel-link">
              <img
                src={item.image}
                alt={item.name}
                className="carousel-image"
                onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
              />
              <div className="carousel-text">{item.name}</div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
