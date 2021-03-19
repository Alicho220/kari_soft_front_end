import React from "react";
import { HomeDiv } from "./style";
import homepage from "../../assets/homepage.png";
import computer from "../../assets/computer.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <HomeDiv>
      <div
        className="inner-container row"
        style={{ backgroundImage: `url(${homepage.png})` }}
      >
        <div className="left-side col-md-6">
          <h2>
            Helping Your Investment <br />
            Towards a Better <br />
            Future!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            aperiam nostrum.
          </p>
          <button>Become and Investor</button>
          <Link to="/menu">
            <button>Register as a Trader</button>
          </Link>
        </div>
        <div className="right-side col-md-6">
          <img src={homepage} alt="" />
        </div>
      </div>
    </HomeDiv>
  );
}

export default Home;
