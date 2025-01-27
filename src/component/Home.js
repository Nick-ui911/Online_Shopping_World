import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Trending from "./Trending";
import { useState } from "react";
import { filterData } from "../utils/helper";
import CarouselImage from "./CarouselImage";
import DownloadSection from "./DownloadSection";
import BelowDownloadSection from "./BelowDownloadSection";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  // Example data for carousel items with links
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
      name: " GROCERY",
      link: "/instamart",
      image:
        "https://alphasilver.productsalphawizz.com/uploads/media/2024/Grocery_Gourmet_Food1.jpeg",
    },

    {
      id: 4,
      name: " DINEOUT",
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
      name: "HOME&KITCHEN",
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
      name: " FITNESS",
      link: "/fitness",
      image:
        "https://alphasilver.productsalphawizz.com/uploads/media/2024/Fitness.jpeg",
    },
  ];
  const [item, setItem] = useState(carouselItems);
  const [searchTxt, setSearchTxt] = useState("");

  const handleSearch = () => {
    if (searchTxt.trim() === "") {
      setItem(carouselItems); // Reset to full list if search text is empty
    } else {
      const filteredData = filterData(searchTxt, carouselItems);
      setItem(filteredData);
    }
  };
  return (
    <>
      <div className="main">
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
          <button className="searchbtn btn btn-outline-primary" onClick={handleSearch}>
            Search
          </button>
        </div>

        <CarouselImage />

        <div className="carousal">
          <h1>Categories</h1>
          <Carousel responsive={responsive}>
            {item.map((item) => (
              <a
                key={item.id}
                href={item.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="carousel-image"
                  />
                  <div className="carousel-name">{item.name}</div>
                </div>
              </a>
            ))}
          </Carousel>
        </div>
      </div>

      <Trending />

      <DownloadSection />
      <BelowDownloadSection />
    </>
  );
};

export default Home;
