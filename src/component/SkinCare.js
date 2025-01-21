import React, { useState } from "react";
import useSkinCare from "../utils/useSkinCare";
import useOnline from "../utils/useOnline";
import { filterData } from "../utils/helper";
import { Shimmer } from "./shimmer";
import { Link } from "react-router-dom";
import SkinCard from "./SkinCard";
import Offline from "./Offline";


const SkinCare = () => {
  const [item, filterItem, setFilterItem, loading] = useSkinCare();
  const [searchTxt, setSearchTxt] = useState("");
  const onlineCheck = useOnline();

  if (!onlineCheck) {
    return <Offline />;
  }

  if (loading) return <Shimmer />;

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
              const data = filterData(searchTxt, item);
              setFilterItem(data);
            }
          }}
        />
        <button
          className="searchbtn"
          onClick={() => {
            const data = filterData(searchTxt, item);
            setFilterItem(data);
          }}
        >
          Search
        </button>
      </div>

      {/* Skincare Cards */}
      <div className="allcards">
        {filterItem.length > 0 ? (
          filterItem.map((item) => <SkinCard key={item.id} {...item} />)
        ) : (
          <div>No items found</div>
        )}
      </div>
    </>
  );
};

export default SkinCare;
