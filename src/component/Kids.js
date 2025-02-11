import React from 'react'
import KidsData from './KidsData';
import useOnline from "../utils/useOnline";
import Offline from "./Offline";
import { Shimmer } from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { useState } from "react";
import useKids from '../utils/useKids';

const Kids = () => {
  const [items, allItem,setItems, error, loading] = useKids();
  const [searchtxt, setSearchTxt] = useState("");
  const onlinecheck = useOnline();
  if (!onlinecheck) {
    return <Offline />;
  }
  if (loading === true) return <Shimmer />;
  if (error) return <p>Error: {error}</p>;

  if (items.length === 0) {
    return (
      <>
        <h1>No data found!</h1>
      </>
    );
  }
  const handlePriceSort = (order) => {
    const sortedItems = [...items].sort((a, b) => {
      if (order === "asc") return a.price - b.price;
      if (order === "desc") return b.price - a.price;
      return 0;
    });
    setItems(sortedItems);
  };
  return (
    <div className="trending-container">
    <div className="search-container">
      <input
        type="text"
        className="inputbox"
        placeholder="Search"
        value={searchtxt}
        onChange={(e) => {
          setSearchTxt(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const data = filterData(searchtxt, allItem);
            setItems(data);
          }
        }}
      />
      <button
        className="searchbtn"
        onClick={() => {
          const data = filterData(searchtxt, allItem);
          setItems(data);
        }}
      >
        Search
      </button>
      {/* price sort */}
      <select
  className="priceSortDropdown"
  onChange={(e) => {
    const order = e.target.value;
    if (order) handlePriceSort(order);
  }}
>
  <option value="">Sort by Price</option>
  <option value="asc">Low to High</option>
  <option value="desc">High to Low</option>
</select>
    </div>
  
    <div className="allcards trending-container">
      {items.map((val) => (
        <Link className="nick" to={`/kids/${val.id}`} key={val.id}>
          <KidsData {...val} />
        </Link>
      ))}
    </div>
  </div>
  )
}

export default Kids
