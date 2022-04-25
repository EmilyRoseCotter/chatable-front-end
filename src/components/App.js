import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import NavBar from "./NavBar";
import Home from "./HomePage/HomePage";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
