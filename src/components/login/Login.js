import React from "react";
import { Link } from "react-router-dom";
import { pageurl } from "../../utils/constants";
import FormHeader from "../reusables/navigation/formsReusables/FormHeader";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="page-wrap">
        <FormHeader />
        <div className="container-fluid login-wrap">
          <div className="login-txt">
            <span>Telling</span>
            <p>The Untold African Story</p>
          </div>
          <div className="form-wrap">
            <h2>Sign In</h2>
            <form className="form login-form">
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter your email address"
                />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter your password"
                />
                <span className="showPassword">show</span>
                <Link className="fpass" to="/forgotPassword">Forgot your password?</Link>
              </div>
              <button className="my-2" type="submit">Sign In</button>
            </form>
            <div className="gosignup">
              <h5 >
                Don't have an account?{" "}
                <Link className="gsignup"  to="/signup"> SIGN UP </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
