import foodImage from "../assets/img/logo.png"
import cart from "../assets/img/cart.png";

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
                       <li>Home</li>
                       <li>Menu</li>
                       <li>About</li>
                       <li>Contact</li>
                   </ul>
               </div>
               <img className="cart-img" src={cart} alt="cart" />
   
               </div>
       </>
   )

export default Header;