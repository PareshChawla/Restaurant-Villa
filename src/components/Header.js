import foodImage from "../assets/img/logo.png"
import cart from "../assets/img/cart.png";
import { Link } from "react-router-dom";

const Title = () => (
         <a href="/">
                <img className="h-1/2 w-1/2 ml-[25%] sm:w-28 sm:h-28" src={foodImage} alt="logo"/>
         </a>
)

const Header =  () => (
       <>
               <div className="w-full flex flex-col items-center sm:flex-row sm:flex justify-between bg-[#FAF1E4] border-[#DEB887] border shadow-mdx ">
               <Title />
                   <ul className="flex gap-20 py-10 ml-auto mr-12">
                       <Link to="/" className="hover:text-orange-800 text-lg font-serif">Home</Link>
                       <Link to="/about" className="hover:text-orange-800 text-lg font-serif">About</Link>
                       <Link to="/instamart" className="hover:text-orange-800 text-lg font-serif">Instamart</Link>
                       <Link to="/contact" className="hover:text-orange-800 text-lg font-serif">Contact us</Link>
                   </ul>
               <img className="h-10 w-10 m-7" src={cart} alt="cart" />
               </div>
       </>
   )

export default Header;