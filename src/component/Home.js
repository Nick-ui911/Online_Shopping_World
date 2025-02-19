import React, { useState } from "react";
import Trending from "./Trending";
import CarouselImage from "./CarouselImage";
import DownloadSection from "./DownloadSection";
import BelowDownloadSection from "./BelowDownloadSection";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";

const Home = () => {
 

  const onlineCheck = useOnline();
  if (!onlineCheck) {
    return <Offline />;
  }

  
  // const [searchTxt, setSearchTxt] = useState("");

  // const handleSearch = () => {
  //   if (searchTxt.trim() === "") {
  //     setItems(carouselItems); // Reset to full list if search text is empty
  //   } else {
  //     const filteredData = filterData(searchTxt, carouselItems);
  //     console.log("Filtered Data:", filteredData); // Debugging log
  //     setItems(filteredData);
  //   }
  // };

  return (
    <>
      <div className="main">
        {/* Search Bar */}
        {/* <div className="searchBar">
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
        </div> */}

        {/* Carousel Section */}
        <CarouselImage />
      </div>
      <Trending />
      <DownloadSection />
      <BelowDownloadSection />
    </>
  );
};

export default Home;
