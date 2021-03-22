import React from "react";
import { NavBarDiv } from "./style";
import { Link } from "react-router-dom";
import kari from "../../assets/kari-soft.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <NavBarDiv>
      <nav className="navbar fixed-top navbar-dark inner-container">
        <div className="container pt-1">
          <Link to="/">
            <img src={kari} alt="" />
          </Link>

          <button
            className="toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar1"
          >
            <span className="navbar-toggler-icon"></span>
        </button>
        </div>
      </nav>
    </NavBarDiv>
  );
}

export default Navbar;
