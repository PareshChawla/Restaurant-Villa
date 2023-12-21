import foodImage from "../assets/img/logo.png"
import cart from "../assets/img/cart.png";
import { Link } from "react-router-dom";

const Title = () => (
         <a href="/">
                <img className="logo-img" src={foodImage} alt="logo"/>
         </a>
)

const Header =  () => (
       <>
               <div className="navbar">
               <Title />
               <div className="nav-items">
                   <ul>
                       <Link to="/" className="link">Home</Link>
                       <Link to="/about" className="link">About</Link>
                       <Link to="/contact" className="link">Contact us</Link>
                   </ul>
               </div>
               <img className="cart-img" src={cart} alt="cart" />
   
               </div>
       </>
   )

export default Header;