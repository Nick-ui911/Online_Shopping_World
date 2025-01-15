import React, { useState } from "react";
import ClothingData from "./ClothingData";
import { Link } from "react-router-dom";

const Clothing = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Search term state for each section
  const [searchTerm, setSearchTerm] = useState("");

  // API base URL
  const apiBaseUrl = "http://localhost:3500";

  // Function to handle API call
  const fetchData = async (section) => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await fetch(`${apiBaseUrl}/fashion?section=${section}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle section click
  const handleSectionClick = (section) => {
    setActiveSection(section);
    fetchData(section);
    setSearchTerm(""); // Reset search term on section change
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearchTerm(e.target.value);
    }
  };

  return (
    <div className="clothing-container">
      <h1 className="title">Clothing Sections</h1>

      {/* Section Cards */}
      <div className="sections-container">
        <div
          className="section-card men"
          onClick={() => handleSectionClick("men")}
        >
          <h3>Men</h3>
        </div>
        <div
          className="section-card women"
          onClick={() => handleSectionClick("women")}
        >
          <h3>Women</h3>
        </div>
        <div
          className="section-card kids"
          onClick={() => handleSectionClick("kids")}
        >
          <h3>Kids</h3>
        </div>
      </div>

      {/* Show search bar and pass search term */}
      {activeSection && (
        <div className="search-container">
          <input
            type="text"
            placeholder={`Search ${activeSection} items...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="search-bar"
          />
          <button
            onClick={() => setSearchTerm(searchTerm)}
            className="search-button"
          >
            Search
          </button>
        </div>
      )}

      {/* Display the filtered data */}
      <ClothingData
        activeSection={activeSection}
        data={data}
        loading={loading}
        error={error}
        searchTerm={searchTerm} // Pass the search term to ClothingData
      />
    </div>
   
  );
};

export default Clothing;
