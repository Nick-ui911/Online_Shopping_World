import React from "react";
import { filterData } from "../utils/helper";

const ClothingData = ({ activeSection, data, loading, error, searchTerm }) => {
  // Filter data based on the search term
  const filteredData = searchTerm
    ? filterData(searchTerm,data)
    : data; // Show all data if searchTerm is empty

  return (
    <div className="clothing-data">
      {loading && <p className="loading">Loading data...</p>}
      {error && <p className="error">{error}</p>}
      {data && (
        <div>
          <h2 className="section-title">{activeSection?.toUpperCase()} Section</h2>
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
                  </div>
                </div>
              ))
            ) : (
              <p>No items found matching your search.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClothingData;
