import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="text-2xl font-bold m-10">Cart Items</h1>
      <button
        className="bg-red-600 text-white p-2 rounded-md ml-10"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      
      <div className="flex flex-wrap">
        {cartItems.map((items) => (
          <FoodItems key={items.id} {...items} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
