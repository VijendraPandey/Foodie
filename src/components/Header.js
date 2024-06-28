import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

//contains logo
const Title = () => {
  return (
    <a href="/">
      <img data-testid="logo" className="h-24 p-4" alt="logo" src={Logo} />
    </a>
  );
};

//contains nav-bar
const Header = () => {
  const [isloggedin, setIsLoggedin] = useState(true);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-orange-200 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-6">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-6">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-6">Contact Us</li>
          </Link>
          <Link to="/instamart">
            <li className="px-6">InstaMart</li>
          </Link>
          <Link to="/cart">
            <li className="px-6" data-testid="cart-items">Cart ({cartItems.length})</li>
          </Link>
        </ul>
      </div>

      <h1 data-testid="status" className="py-10">{isOnline ? "✅" : "🔴"}</h1>
      <span className="text-lg font-semibold py-10 text-orange-800">
        {user.name}
      </span>
      <div className="text-white rounded-md bg-orange-700 px-2 py-1 mt-10 mb-10 mr-2">
        {isloggedin ? (
          <button
            onClick={() => {
              setIsLoggedin(false);
            }}
          >
            LogOut
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedin(true);
            }}
          >
            LogIn
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
