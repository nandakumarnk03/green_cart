import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {  
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
 }




    return (
      <div className="header">
          <Link to="/">
        <img
            className="header__logo"
            src="https://www.princessauto.com/file/v1548670002286356716/collections/logo_ZZ.png" alt=""
          />
        </Link> 
          
     {/*   <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
    </div>  */}


        <div className="header__nav">
          <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">Hello, {!user ? 'User' : user.email}</span>
              <span className="header__optionLineTwo">{user ?'Sign Out' : 'Sign In'}</span>
            </div>
          </Link>
  
          <Link to="/Categories">
            <div className="header__option">
            <span className="header__optionLineOne">Go to</span>
              <span className="header__optionLineTwo">
              Categories
              </span>
            </div>
           </Link>
          

           <Link to="/Checkout">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Checkout</span>
          </div>
        </Link>
          
          
            <Link to="/Addproducts">
          <div className="header__option">
            <span className="header__optionLineOne">Sell</span>
            <span className="header__optionLineTwo">Products</span>
          </div>
          </Link>

          
          <div className="header__option">
            <span className="header__BoptionLineOne">Your</span>
            <span className="header__BoptionLineTwo">Basket</span>
          </div>
          
          <Link to="/Checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
              </span>
            </div>
           </Link>

        </div>
      </div>
    );
  }
  
  export default Header;