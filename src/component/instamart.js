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
  const [item, allitem,loading, setItem, setAllItem,error] = useInstamartItem();
  const [searchtxt, setSearchTxt] = useState("");

  const onlinecheck = useOnline();
  if (!onlinecheck) {
    return (
      <Offline/>
    )
  }
   if (loading === true) return <Shimmer />;
   if (error) return <p>Error: {error}</p>; // Display error message if there is an error

  if (item.length === 0) {
    return (
      <>
        <h1>No data found!</h1>
      </>
    );
  }

  return (
    <>
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
      </div>
      <CarouselImage/>
      {/* <p> you typed : {searchtxt}</p> */}
      <div className="allcards">
        {item.map((val) => {
          return (
            <Link className="nick" to={`/instamart/${val.id}`} key={val.id}>
              <InstaCard {...val} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Instamart;
