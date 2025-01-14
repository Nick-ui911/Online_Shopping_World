import { useState } from "react";
import Card from "./Card";
import { Shimmer } from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useBody from "../utils/useBody";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";
const Restaurant = () => {
  const [filteredRestaurants, allRestaurants, loading, setFilteredRestaurants] =
    useBody();

  const [searchtxt, setSearchTxt] = useState("");

  const onlinecheck = useOnline();
  if (!onlinecheck) {
    return <Offline />;
  }

  if (loading === true) return <Shimmer />;

 

  return (
    <>
    
      <div className="searchBar">
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
              const data = filterData(searchtxt, allRestaurants);
              setFilteredRestaurants(data);
            }
          }}
        />

        <button
          className="searchbtn"
          onClick={() => {
            const data = filterData(searchtxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        {/* <p> you typed : {searchtxt}</p> */}
      </div>
      <div className="image-container">
      <img
        className="image"
        alt="image"
        src="https://alphasilver.productsalphawizz.com/uploads/media/2024/7mdfskoasdhgoihgio047805.png"
      />
      </div>
      <div className="allcards">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              className="nick"
              to={`/restaurant/${restaurant.id}`}
              key={restaurant.id}
            >
              <Card {...restaurant} />
            </Link>
          ))
        ) : (
          <h1>No data available</h1>
        )}
      </div>
    </>
  );
};

export default Restaurant ;
