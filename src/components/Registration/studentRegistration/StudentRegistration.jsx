import React from "react";
import { StudentRegistrationDiv } from "./style";
import { Link } from "react-router-dom";

function StudentRegistration() {
  return (
    <StudentRegistrationDiv>
      <div className="inner-container">
        <div className="main-content col-md-6">
          <h2>How to Register</h2>
          <p>As an Student </p>
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
    </StudentRegistrationDiv>
  );
}

export default StudentRegistration;
