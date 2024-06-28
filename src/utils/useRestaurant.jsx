import { useState, useEffect } from "react";
import { FETCH_URL1, FETCH_URL2 } from "../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_URL1 + resId + FETCH_URL2);
    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data?.cards);
  }

  return restaurant;
};

export default useRestaurant;
