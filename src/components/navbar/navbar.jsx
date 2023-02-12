import "./navbar.css";
import logo from "../../img/logo.png";
import { BsTelephone } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [navMenu, setNavMenu] = useState(true);
  return (
    <div className="navbar__container">
      <Link to={"/"} className="logo">
        <img src={logo} alt="Logo png" />
      </Link>

      <div className={`box ${navMenu ? "exits" : "active"}`}>
        <ul>
          <li>
            <AiOutlineDoubleRight className="li__icon" />
            <a href="#aboutSchool">About school</a>
          </li>
          <li>
            <AiOutlineDoubleRight className="li__icon" />
            <a href="#advantages">Advantages</a>
          </li>
          <li>
            <AiOutlineDoubleRight className="li__icon" />
            <a href="#taechers">Teachers</a>
          </li>
          <li>
            <AiOutlineDoubleRight className="li__icon" />
            <a href="#prices">Prices</a>
          </li>
          <li>
            <AiOutlineDoubleRight className="li__icon" />
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="nav__icons">
        <a className="nav__number" href="tel:+998907777777">
          <BsTelephone className="nav__phone" />
          <i>+99809997777</i>
        </a>
        <div className="nav__menu" onClick={() => setNavMenu(!navMenu)}>
          <GiHamburgerMenu className={`meda-icon ${navMenu ? "active" : ""}`} />
          <AiOutlineClose className={`meda-icon ${navMenu ? "" : "active"}`} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
