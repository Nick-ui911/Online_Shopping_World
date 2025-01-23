import { useState } from "react";
import InstaCard from "./Instacard";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useInstamartItem from "../utils/useInstamart";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";
import { Shimmer } from "./shimmer";
import CarouselImage from "./CarouselImage";

const Instamart = () => {
  const [item, allitem, loading, setItem, setAllItem, error] =
    useInstamartItem();
  const [searchtxt, setSearchTxt] = useState("");
  // State for sorting price

  const onlinecheck = useOnline();
  if (!onlinecheck) {
    return <Offline />;
  }
  if (loading === true) return <Shimmer />;
  if (error) return <p>Error: {error}</p>;

  if (item.length === 0) {
    return (
      <>
        <h1>No data found!</h1>
      </>
    );
  }

  const handlePriceSort = (order) => {
    const sortedItems = [...item].sort((a, b) => {
      if (order === "asc") return a.price - b.price;
      if (order === "desc") return b.price - a.price;
      return 0;
    });
    setItem(sortedItems);
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
              const data = filterData(searchtxt, allitem);
              setItem(data);
            }
          }}
        />
        <button
          className="searchbtn"
          onClick={() => {
            const data = filterData(searchtxt, allitem);
            setItem(data);
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
      <CarouselImage />
      <div className="allcards trending-container">
        {item.map((val) => (
          <Link className="nick" to={`/instamart/${val.id}`} key={val.id}>
            <InstaCard {...val} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Instamart;
