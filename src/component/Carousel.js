import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const carouselItems = [
  {
    id: 1,
    name: "CLOTHING",
    link: "/clothing",
    image:
      "https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg",
  },
  {
    id: 2,
    name: "RESTAURANT",
    link: "/restaurant",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "GROCERY",
    link: "/instamart",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/Grocery_Gourmet_Food1.jpeg",
  },
  {
    id: 4,
    name: "DINEOUT",
    link: "/dineout",
    image:
      "https://www.dineout.co.in/blog/wp-content/uploads/2019/11/rsz_101.jpg",
  },
  {
    id: 5,
    name: "BEAUTY",
    link: "/beauty",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/Beauty_Personal_Care_.jpg",
  },
  {
    id: 6,
    name: "ELECTRONICS",
    link: "/electronics",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/Electronicss1.jpeg",
  },
  {
    id: 7,
    name: "MOBILES",
    link: "/mobiles",
    image:
      "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$",
  },
  {
    id: 8,
    name: "BOOKS",
    link: "/books",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/Books.jpeg",
  },
  {
    id: 9,
    name: "HOME & KITCHEN",
    link: "/homekitchen",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/Home_Kitchen.jpeg",
  },
  {
    id: 10,
    name: "TOYS",
    link: "/toys",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/_Toys_Games.jpeg",
  },
  {
    id: 11,
    name: "STATIONARY",
    link: "/stationary",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/Stationery_.jpeg",
  },
  {
    id: 12,
    name: "FITNESS",
    link: "/fitness",
    image:
      "https://alphasilver.productsalphawizz.com/uploads/media/2024/Fitness.jpeg",
  },
];
const Carousel = ({items}) => {
  const [items, setItems] = useState(carouselItems);
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
