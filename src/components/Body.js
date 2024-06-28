import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearcInput] = useState("UP 14");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=26.884768303037962&lng=80.92255979776382&str=Desserts&trackingId=5b71e44b-ad37-bebc-ca4f-8c9f473ae165&submitAction=ENTER&queryUniqueId=47fcd92b-6395-9192-3644-0f5e964ec838"
    );
    const json = await data.json();
    // console.log(json);
    setFilteredRestaurants(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
      
    );
    setAllRestaurants(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-3 bg-orange-100 my-5">
        <input
          data-testid="input"
          type="text"
          className="rounded-md px-3 py-1 focus:bg-orange-200"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearcInput(e.target.value); //captures what is being written in the text box
          }}
        />
        <button
          data-testid="search"
          className="px-3 py-1 m-2 bg-red-300 rounded-md text-white hover:bg-orange-500"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap" data-testid="res-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.card?.car?.info.id}
              key={Number(restaurant?.card?.card?.info.id)}
            >
              <RestaurantCard {...restaurant?.card?.card?.info} />
            </Link> //spread operator to destructure restaurant info into name, cuisines etc
          );
        })}
      </div>
    </>
  );
};

export default Body;
