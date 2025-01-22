import React, { useState } from "react";
import useSkinCare from "../utils/useSkinCare";
import useOnline from "../utils/useOnline";
import { filterData } from "../utils/helper";
import { Shimmer } from "./shimmer";
import { Link } from "react-router-dom";
import SkinCard from "./SkinCard";
import Offline from "./Offline";

const SkinCare = () => {
  const [items, filterItem, setFilterItem, loading] = useSkinCare();
  const [searchTxt, setSearchTxt] = useState("");
  const onlineCheck = useOnline();

  if (!onlineCheck) {
    return <Offline />;
  }

  if (loading) return <Shimmer />;
  const handlePriceSort = (order) => {
    const sortedItems = [...items].sort((a, b) => {
      if (order === "asc") return a.price - b.price;
      if (order === "desc") return b.price - a.price;
      return 0;
    });
    setFilterItem(sortedItems);
  };

  return (
    <>
      {/* Search Bar */}
      <div className="searchBar">
        <input
          type="text"
          className="inputbox"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const data = filterData(searchTxt, items);
              setFilterItem(data);
            }
          }}
        />
        <button
          className="searchbtn"
          onClick={() => {
            const data = filterData(searchTxt, items);
            setFilterItem(data);
          }}
        >
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

      {/* Skincare Cards */}
      <div className="allcards">
        {filterItem.length > 0 ? (
          filterItem.map((item) => (
            <Link
              className="nick"
              to={`/beauty-and-care/skinCare/${item.id}`}
              key={item.id}
            >
              <SkinCard {...item} />
            </Link>
          ))
        ) : (
          <div>No items found</div>
        )}
      </div>
    </>
  );
};

export default SkinCare;
