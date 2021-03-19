import React from "react";
import { LandingPageDiv } from "./style";
import kari from "../../assets/kari-soft.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <LandingPageDiv>
      <div className="inner-container">
        <div className="image-div col-md-12 col-sm-12">
          <img src={kari} alt="" />
        </div>
        <div className="button-div">
          <button>
            Kari<span>soft</span> Solutions
          </button>
          <Link to="/home">
            <button>
              Kari<span>soft</span> Finances
            </button>
          </Link>
        </div>
      </div>
    </LandingPageDiv>
  );
}

export default LandingPage;
