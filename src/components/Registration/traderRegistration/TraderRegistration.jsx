import React from "react";
import { TraderRegistrationDiv } from "./style";
import { Link } from "react-router-dom";

function TraderRegistration() {
  return (
    <TraderRegistrationDiv>
      <div className="inner-container">
        <div className="main-content col-md-6">
          <h2>How to Register</h2>
          <p>As an Trader </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit neque
            est repellat suscipit laborum illum delectus quo, ipsam accusantium
            harum doloribus eum aliquid ea unde optio, dolorum voluptatibus
            distinctio accusamus!
          </p>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <button>Register Now</button>
          </Link>
        </div>
      </div>
    </TraderRegistrationDiv>
  );
}

export default TraderRegistration;
