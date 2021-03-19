import React from "react";
import { InvestorRegistrationDiv } from "./style";
import { Link } from "react-router-dom";

function InvestorRegistration() {
  return (
    <InvestorRegistrationDiv>
      <div className="inner-container">
        <div className="main-content col-md-6">
          <h2>How to Register</h2>
          <p>As an investor </p>
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
    </InvestorRegistrationDiv>
  );
}

export default InvestorRegistration;
