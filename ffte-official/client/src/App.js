import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Artist from "./pages/Artist/Artist";
import Connect from "./pages/Connect/Connect";
import Shop from "./pages/Shop/Shop";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Landing from "./pages/LandingPage/Landing";

// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/artist" component={Artist} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/connect" component={Connect} /> */}
        <Route component={NotFound} />
      </Switch>
      {/* <Navbar /> */}
    </Router>
  );
}

export default App;
