import React from "react";
import { BrowserRouter as Router, Route /* Redirect*/ } from "react-router-dom";
// import logo from "./logo.svg";
import Home from "./pages/Home/Home";
import Artist from "./pages/Artist/Artist";
import Connect from "./pages/Connect/Connect";
import Shop from "./pages/Shop/Shop";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/artist">
        <Artist />
      </Route>

      <Route exact path="/shop">
        <Shop />
      </Route>

      <Route exact path="/connect">
        <Connect />
      </Route>

      <Navbar />
    </Router>
  );
}

export default App;
