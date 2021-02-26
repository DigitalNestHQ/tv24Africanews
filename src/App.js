import React from "react";
import { pageurl } from "./utils/constants.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./components/reusables/navigation/Nav/nav";
import HomePage from "./components/homepage/homepage";
import AboutUs from "./components/about/AboutComponent";
import Category from "./components/newscategory/categories";
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy";
import CookiePolicy from "./components/cookie/CookiePolicy";
import Footer from "./components/reusables/navigation/Footer/footer";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Subscribe from "./components/subscription/Subscribe";

// states
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

// middleware
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

if (localStorage.otp) {
  setAuthToken(localStorage.otp);
}
function App() {
  return (
    <AuthState>
      <div className="App">
        <AlertState>
          <Router>
            <Nav className="default" />
            <Switch>
              <Route exact path={pageurl.SUBSCRIBE} component={Subscribe} />
              <Route exact path={pageurl.HOMEPAGE} component={HomePage} />
              <Route exact path={pageurl.CATEGORY} component={Category} />
              <Route exact path={pageurl.ABOUT} component={AboutUs} />
              <Route
                exact
                path={pageurl.PRIVACYPOLICY}
                component={PrivacyPolicy}
              />
              <Route
                exact
                path={pageurl.COOKIEPOLICY}
                component={CookiePolicy}
              />
            </Switch>
            <Footer className="default" />
            <Route exact path={pageurl.SIGNIN} component={Login} />
            <Route exact path={pageurl.SIGNUP} component={Signup} />
          </Router>
        </AlertState>
      </div>
    </AuthState>
  );
}

export default App;
