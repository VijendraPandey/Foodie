import { IMG_CDN_URL } from "../constants";

const FoodItems = ({ imageId, name, description, price }) => {
  return (
    <div className="flex flex-col justify-between w-56 h-80 p-3 border-2 border-slate-300 m-2 shadow-xl bg-orange-100">
      <img
        className="w-[100%] h-44 border-2 border-slate-200"
        src={IMG_CDN_URL + imageId}
      />
      <h1 className="font-bold">{name}</h1>
      <p className="italic text-sm">{description}</p>
      <h2 className="text-lg font-semibold"> ₹ {price / 100}</h2>
    </div>
  );
};

export default FoodItems;
