import { useContext } from "react";
import foodImage from "../assets/img/logo.png";
import cart from "../assets/img/cart.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img
      className="h-1/2 w-1/2 ml-[25%] sm:w-28 sm:h-28"
      src={foodImage}
      alt="logo"
    />
  </a>
);

const Header = () => {
  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  
  return (
    <>
      <div className="h-[13vh] w-full flex flex-col items-center sm:flex-row sm:flex justify-between bg-[#FAF1E4] border-[#DEB887] border shadow-lg">
        <Title />
        <ul className="flex gap-20 py-10 ml-auto mr-12">
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
        <Link to="/cart">
          <div className="flex flex-row items-center">
            <img className="h-8 w-8 m-2" src={cart} alt="cart" />
            <p className=" bg-green-400 hover:bg-[#935116] text-white w-5 h-6 text-md font-mono text-center rounded-t-md mr-6">
              {cartItems.length}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
