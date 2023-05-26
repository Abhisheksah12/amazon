import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
function Header() {

  const [{basket,user}, dispatch]=useStateValue();
  const handleAuthentication =() => {
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className="header">
         
      <Link to="/">
      <img 
        className='header__logo'
        src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg" alt="" />
      </Link>
        
        <div className="header__search">
          <input className="header_searchInput"
          type="text"
          />
          <SearchIcon 
          className="header__searchIcon"/>
        </div>
        <div className="header__nav">
        <Link to={!user &&"/Login"}>
          <div  onClick={handleAuthentication} className="header__option">
            <span className="header__optionLine1">
              Hello {user? user.email : "Guest"}
            </span>
            
            <span className="header__optionLine2">
              {user ? "Sign Out" : "Sign In"}
            </span>
            
            </div>
            </Link>
            <div className="header__option">
            <span className="header__optionLine1">
              Return
            </span>
            <span className="header__optionLine2">
              &Order
            </span>
            </div> <div className="header__option">
            <span className="header__optionLine1">
              Your
            </span>
            <span className="header__optionLine2">
              Prime
            </span>
            </div>
            <Link to="/Checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon/>
              <span className="header__optionLine2 header__basketCount">{basket?.length}</span>

            </div>
           </Link>


        </div>
     


       
    </div>
  )
}

export default Header;