import { useContext } from "react";
import foodImage from "../assets/img/logo.png"
import cart from "../assets/img/cart.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Title = () => (
         <a href="/">
                <img className="h-1/2 w-1/2 ml-[25%] sm:w-28 sm:h-28" src={foodImage} alt="logo"/>
         </a>
)

const Header =  () => {

    const {user} = useContext(UserContext);
    return (
        <>
            <div className="h-[13vh] w-full flex flex-col items-center sm:flex-row sm:flex justify-between bg-[#FAF1E4] border-[#DEB887] border shadow-lg">
               <Title />
                   <ul className="flex gap-20 py-10 ml-auto mr-12">
                       <Link to="/" className="hover:text-orange-800 text-md font-serif">Home</Link>
                       <Link to="/about" className="hover:text-orange-800 text-md font-serif">About</Link>
                       <Link to="/instamart" className="hover:text-orange-800 text-md font-serif">Instamart</Link>
                       <Link to="/contact" className="hover:text-orange-800 text-md font-serif">Contact us</Link>
                   </ul>
               <img className="h-8 w-8 cursor-pointer m-7" src={cart} alt="cart" />
               </div>
        </>
    )
}

export default Header;