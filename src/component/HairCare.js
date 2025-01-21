import React, { useState } from "react";
import useOnline from "../utils/useOnline";
import { filterData } from "../utils/helper";
import { Shimmer } from "./shimmer";
import { Link } from "react-router-dom";
import SkinCard from "./SkinCard";
import Offline from "./Offline";
import useHairCare from "../utils/useHairCare";
import HairCard from "./HairCard";

const HairCare = () => {
  const [item, filterItem, setFilterItem, loading] = useHairCare();
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
          filterItem.map((item) => (
            <Link
            className="nick"
            to={`/beauty-and-care/hairCare/${item.id}`}
            key={item.id}>
              <HairCard {...item} />
            </Link>
          ))
        ) : (
          <div>No items found</div>
        )}
      </div>
    </>
  );
};

export default HairCare;
