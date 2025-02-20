import React, { useState } from "react";
import Slider from "react-slick";
import Trending from "./Trending";
import { filterData } from "../utils/helper";
import CarouselImage from "./CarouselImage";
import DownloadSection from "./DownloadSection";
import BelowDownloadSection from "./BelowDownloadSection";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons

const Home = () => {
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

  const onlineCheck = useOnline();
  if (!onlineCheck) {
    return <Offline />;
  }

  const [items, setItems] = useState(carouselItems);
  const [searchTxt, setSearchTxt] = useState("");

  const handleSearch = () => {
    if (searchTxt.trim() === "") {
      setItems(carouselItems); // Reset to full list if search text is empty
    } else {
      const filteredData = filterData(searchTxt, carouselItems);
      console.log("Filtered Data:", filteredData); // Debugging log
      setItems(filteredData);
    }
  };

  // Custom Arrow Components
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={`${className} custom-prev-arrow`} onClick={onClick}>
        <FaArrowLeft size={24} color="black" /> {/* Left arrow icon */}
      </button>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className={`${className} custom-next-arrow`} onClick={onClick}>
        <FaArrowRight size={24} color="black" /> {/* Right arrow icon */}
      </button>
    );
  };

  const settings = {
    infinite: false, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 2, // Number of slides to scroll
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 3000, // Auto-scroll interval (2 seconds)
    centerPadding: "60px", // Padding around the center slide
    prevArrow: <PrevArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "40px", // Adjust padding for smaller screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px", // Minimal padding for mobile
        },
      },
    ],
  };

  return (
    <>
      <div className="main">
        {/* Search Bar */}
        <div className="searchBar">
          <input
            type="text"
            className="inputbox"
            placeholder="Search"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button
            className="searchbtn btn btn-outline-primary"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Carousel Section */}
        <CarouselImage />
        <div className="carousel">
          <h1>Categories</h1>
          <Slider {...settings}>
            {items.map((item) => {
              return (
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
                        e.target.src = "https://via.placeholder.com/300"; // Fallback image
                      }}
                    />
                    <div className="carousel-name">{item.name}</div>
                  </a>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <Trending />
      <DownloadSection />
      <BelowDownloadSection />
    </>
  );
};

export default Home;