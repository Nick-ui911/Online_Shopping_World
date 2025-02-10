import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Clothing = () => {


  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className="clothing-container">
      <h1 className="title">Clothing Sections</h1>

      {/* Section Cards */}
      <div className="sections-container">
        <div
          className="section-card men"
          onClick={() => handleNavigate("/men")}
        >
          <h3>Men</h3>
        </div>
        <div
          className="section-card women"
          onClick={() => handleNavigate("/women")}
        >
          <h3>Women</h3>
        </div>
        <div
          className="section-card kids"
          onClick={() => handleNavigate("/kids")}
        >
          <h3>Kids</h3>
        </div>
      </div>
    </div>
  );
};

export default Clothing;
