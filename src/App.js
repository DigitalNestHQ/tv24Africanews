import React from "react";
import { pageurl } from "./utils/constants.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/reusables/navigation/Nav/nav";
import HomePage from "./components/homepage/homepage";
 import Category from "./components/newscategory/categories";
 import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy";
 import CookiePolicy from "./components/cookie/CookiePolicy";
 import Footer from "./components/reusables/navigation/Footer/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav className='default'/>
        <Switch>
        <Route exact path={pageurl.HOMEPAGE} component={HomePage} />
        <Route exact path={pageurl.CATEGORY} component={Category} />
        <Route exact path={pageurl.PRIVACYPOLICY} component={PrivacyPolicy} />
        <Route exact path={pageurl.COOKIEPOLICY} component={CookiePolicy} />
        </Switch>
        <Footer className='default'/>
      </Router>
    </div>
  );
}

export default App;
