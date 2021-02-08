import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Nav from "./components/reusables/navigation/Nav/nav";
import HomePage from "./components/homepage/homepage"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav className='default'/>
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
