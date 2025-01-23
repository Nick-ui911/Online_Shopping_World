import { Shimmer } from "./shimmer";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useTrending from "../utils/useTrending";


const Trending = () => {
  const [trending, setTrending, searchTrending, loading, error] = useTrending();
  const [searchTxt, setSearchTxt] = useState("");

  const handleSearch = () => {
    if (searchTxt.trim() === "") {
      setTrending(searchTrending);
    } else {
      const filteredData = filterData(searchTxt, searchTrending);
      setTrending(filteredData);
    }
  };

  const handlePriceSort = (order) => {
    const sortedItems = [...trending].sort((a, b) => {
      if (order === "asc") return a.price - b.price;
      if (order === "desc") return b.price - a.price;
      return 0;
    });
    setTrending(sortedItems);
  };

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="trending-container ">
      <div className="trending-header">
        <h1>Trending Products</h1>
        <p>Explore the latest trends</p>
      </div>
      <div className="trending-controls">
        <input
          type="text"
          className="search-input"
          placeholder="Search Trending items..."
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
        <select
          className="price-sort-dropdown"
          onChange={(e) => handlePriceSort(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="trending-products">
        {trending.length === 0 ? (
          <div>No trending items found.</div>
        ) : (
          trending.map((item) => (
            <Link className="product-card" to={`/trending/${item.id}`} key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Trending;
