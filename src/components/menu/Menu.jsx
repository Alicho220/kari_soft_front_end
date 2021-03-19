import React from "react";
import { MenuDiv } from "./style";
import { BsChevronCompactDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import menu from "../../assets/menu.png";

function Menu() {
  return (
    <MenuDiv>
      <div className="inner-container ">
        <div classNameName="dropdown col-md-6">
          <h2
            className="dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            How to register
          </h2>
          <ul
            className="dropdown-menu dp"
            aria-labelledby="dropdownMenuButton1"
          >
            <Link to="register/investor" style={{ textDecoration: "none" }}>
              Register as an investor
            </Link>
            <hr />
            <Link to="register/trader" style={{ textDecoration: "none" }}>
              Register as a trader
            </Link>
            <hr />
            <Link to="register/student" style={{ textDecoration: "none" }}>
              Register as a student
            </Link>
          </ul>
        </div>

        <div className="image-div col-md-6">
          <img src={menu} alt="" />
        </div>
      </div>
    </MenuDiv>
  );
}

export default Menu;
