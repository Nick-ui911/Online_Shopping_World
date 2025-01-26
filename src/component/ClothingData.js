import React, { useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

// Function to filter data by size
const filterBySize = (data, size) => {
  if (!size) return data; // Return all data if no size is selected
  return data.filter((item) => item.size === size);
};

const ClothingData = ({ activeSection, data, loading, error, searchTerm }) => {
  const [selectedSize, setSelectedSize] = useState("");

  // Filter data based on search term and selected size
  const filteredData = data
    ? filterBySize(
        searchTerm ? filterData(searchTerm, data) : data,
        selectedSize
      )
    : [];

  return (
    <div className="clothing-data trending-container">
      {loading && <p className="loading">Loading data...</p>}
      {error && <p className="error">{error}</p>}
      {data && (
        <div>
          <h2 className="section-title">{activeSection?.toUpperCase()} Section</h2>

          {/* Size Filter Dropdown */}
          <div className="filter-container">
            <label htmlFor="size-filter">Filter by Size: </label>
            <select
              id="size-filter"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">All Sizes</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          <div className="cards-container">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div key={item.id} className="card">
                  <img
                    src={item.image || "https://via.placeholder.com/200"}
                    alt={item.name}
                    className="card-image"
                  />
                  <div className="card-info">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-price">{item.price}</p>
                    <p className="card-size">Size: {item.size}</p>
                    <Link
                      to={`/fashion/${item.id}?section=${activeSection}`}
                      className="view-details"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>No items found matching your criteria.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClothingData;
