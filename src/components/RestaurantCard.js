import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";

//props recieve destructured information
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col justify-between w-56 h-96 p-3 border-2 border-slate-300 m-2 shadow-xl bg-orange-100">
      <img
        className="w-[100%] h-44 border-2 border-slate-200"
        src={IMG_CDN_URL + cloudinaryImageId}
      ></img>
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h6 className="text-sm font-extralight">{user.name}</h6>
      <h6 className="text-sm font-extralight">{user.email}</h6>
    </div>
  );
};

export default RestaurantCard;
