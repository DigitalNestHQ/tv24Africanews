import React from "react";
import { Link } from "react-router-dom";
import { pageurl } from "../../utils/constants";
import FormHeader from "../reusables/navigation/formsReusables/FormHeader";
import "./signup.css";

const signup = () => {
  return (
    <div className="signup">
      <div className="page-wrap">
        <FormHeader />
        <div className="container-fluid signup-wrap">
          <div className="signup-txt">
            <p>The original African story every day in your inbox</p>
            <span>
              Register today to receive an email from our Editor in Chief.
            </span>
          </div>
          <div className="form-wrap">
            <h2>Sign Up</h2>
            <form className="form signup-form">
              <div className="row mb-3">
                <div className="col-sm-6 inp-half">
                  <label for="first name" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                  />
                </div>
                <div className="col-sm-6 inp-half">
                  <label for="Last name" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mb-3">
                <label for="phone" class="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your phone number (e.g +2347030403416)"
                />
              </div>

              <div className="mb-1">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
                <span className="showPassword">show</span>
              </div>
              <div className="mb-2 my-0">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck2"
                    required
                  />
                  <label className="form-check-label tclabel" for="invalidCheck2">
                    I agree to the Stears Terms and{" "}
                    <Link className="link_terms" to={pageurl.COOKIEPOLICY}>Conditions</Link> and{" "}
                    <Link className="link_privacy" to={pageurl.PRIVACYPOLICY}> Privacy Policy</Link>{" "}
                  </label>
                </div>
              </div>
              <button className="my-2" type="submit">
                Continue
              </button>
            </form>
            <div className="gosignup">
              <h5>
                Already have an account?{" "}
                <Link className="gsignup" to="/login">
                  {" "}
                  Sign In{" "}
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
