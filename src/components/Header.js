import { useContext, useState } from "react";
import foodImage from "../assets/img/logo2.png";
import cart from "../assets/img/cart.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLoginClick = () => {
    // Logic for login (e.g., authentication)
    setLoggedIn(true);
  };

  const handleLogoutClick = () => {
    // Logic for logout
    setLoggedIn(false);
  };

  return (
    <>
      <div className="h-[13vh] w-full flex flex-col items-center sm:flex-row sm:flex justify-between bg-[#FAF1E4] border-[#DEB887] border shadow-lg">
        <Link to="/">
          <img
            className="h-[70px] w-[70px] ml-8 transform transition-transform hover:scale-105"
            src={foodImage}
            alt="logo"
          />
        </Link>
        <ul className="flex gap-20 py-7 ml-auto mr-12">
          <Link to="/" className="hover:text-orange-800 text-md font-serif">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-orange-800 text-md font-serif"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-orange-800 text-md font-serif"
          >
            Contact us
          </Link>
        </ul>
        {isLoggedIn ? (
          <div className="flex flex-row items-center justify-center">
            <h3 className="font-bold text-sm">{user.name}</h3>
            <button
              className="mr-6 bg-[#DEB887] border-2 border-black rounded-lg h-6 w-16 hover:bg-black hover:text-red-50 text-sm font-medium m-5 hover:shadow-lg"
              onClick={handleLogoutClick}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="mr-6 bg-[#DEB887] border-2 border-black rounded-lg h-6 w-14 hover:bg-black hover:text-red-50 text-sm font-medium m-5 hover:shadow-lg"
            onClick={handleLoginClick}
          >
            Login
          </button>
        )}
        <Link to="/cart">
          <div className="flex flex-row items-center">
            <img className="h-7 w-7 m-2" src={cart} alt="cart" />
            <p className=" hover:bg-black bg-[#935116] text-white w-5 h-6 text-md font-mono text-center rounded-t-md mr-6">
              {cartItems.length}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
