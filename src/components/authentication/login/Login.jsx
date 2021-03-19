import React from "react";
import { LoginDiv } from "./style";
import login from "../../../assets/login.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <LoginDiv>
      <div className="inner-container">
        <div className="main-container row">
          <div className="img-div col-md-6">
            <img src={login} alt="" />
          </div>
          <div className="form-div col-md-4">
            <h2 className="pt-5">Welcome Back!</h2>
            <p>Continue to your dashboard</p>

            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email / Phone Number"
                />
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
                <Link to="#" style={{ textDecoration: "none" }}>
                  <p>Forget Password?</p>
                </Link>
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
            <p className="sign-up">
              Dont have an account?{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span>SignUp</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </LoginDiv>
  );
}

export default Login;
