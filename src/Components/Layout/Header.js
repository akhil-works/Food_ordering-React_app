import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import './Header.css';
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header" >
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table full of delicious Food!" />
      </div>
    </Fragment>
  );
};
export default Header;
