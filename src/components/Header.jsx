import React from "react";
import "../Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, withRouter } from "react-router-dom";

function Header(props) {
  const handleChange = (e) => {
    if (e.target.value.length > 0 && e.target.value.length) {
      props.onQueryChange(e.target.value);
      props.history.push(
        props.match.path + `?query=${e.target.value}&offset=0&limit=6`
      );
    } else {
      props.history.push(props.match.path);
      props.onQueryChange(e.target.value);
    }
  };

  return (
    <div className='header'>
      <img
        className='header__logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
      />

      <div className='header__search'>
        <input
          className='header__searchInput'
          type='text'
          value={props.searchWord}
          onChange={(e) => handleChange(e)}
        />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link to='/addProduct'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Add</span>
            <span className='header__optionLineTwo'>New Product</span>
          </div>
        </Link>

        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>

        <div className='header__optionBasket'>
          <ShoppingBasketIcon />
          <span className='header__optionLineTwo header__basketCount'>0</span>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
