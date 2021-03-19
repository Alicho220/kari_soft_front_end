import React from "react";
import { RegisterDiv } from "./style";
import { Link } from "react-router-dom";
import register from "../../../assets/register.png";

function Register() {
  return (
    <RegisterDiv>
      <div className="inner-container">
        <div className="main-container row">
          <div className="img-div col-md-6">
            <img src={register} alt="" />
          </div>
          <div className="form-div col-md-4">
            <h3 className="h3">Let's get your details to serve you better</h3>
            <form>
              <div className="name-div row">
                <div className="form-group  col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                />
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Phone Number"
                />
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder=" Comfirm Password"
                />
                <p>
                  By clicking sign up, you have accepted out terms and
                  conditions.
                </p>
              </div>

              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
            <p className="sign-up">
              Already have an account?{" "}
              <Link to='/login' style={{textDecoration:'none'}}>
                <span>Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </RegisterDiv>
  );
}

export default Register;
