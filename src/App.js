import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Register from "./userInfo/register";
import Login from "./userInfo/login";
import Homepage from "./homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* <Route path="/register" component={Register} /> */}
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/displaySavedCocktails" component={Homepage} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
