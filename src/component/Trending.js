import React, { useState } from "react";
import TrendingData from "./TrendingData";
import { Shimmer } from "./shimmer";
import { filterData } from "../utils/helper";
import { Link } from "react-router-dom";
import useTrending from "../utils/useTrending";

const Trending = () => {
  const [trending, setTrending, searchTrending, loading, error] = useTrending();
  const [searchTxt, setSearchTxt] = useState("");

  const handleSearch = () => {
    if (searchTxt.trim() === "") {
      setTrending(searchTrending); // Reset to the original data
    } else {
      const filteredData = filterData(searchTxt, searchTrending);
      setTrending(filteredData);
    }
  };

  if (loading) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handlePriceSort = (order) => {
    const sortedItems = [...trending].sort((a, b) => {
      if (order === "asc") return a.price - b.price;
      if (order === "desc") return b.price - a.price;
      return 0;
    });
    setTrending(sortedItems);
  };


  return (
    <>
      <div className="Trending-search-Bar">
        <input
          type="text"
          className="inputbox"
          placeholder="Search Trending item...."
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button className="searchbtn" onClick={handleSearch}>
          Search
        </button>
          {/* price sort */}
          <select
          className="priceSortDropdown"
          onChange={(e) => {
            const order = e.target.value;

            handlePriceSort(order);
          }}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="heading">
        <h1>Trendings</h1>
        <p>Explore the latest trends</p>
      </div>
      <div className="allcards">
        {trending.length === 0 ? (
          <div>No trending items found.</div>
        ) : (
          trending.map((item) => (
            <Link className="nick" to={`/trending/${item.id}`} key={item.id}>
              <TrendingData {...item} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Trending;
