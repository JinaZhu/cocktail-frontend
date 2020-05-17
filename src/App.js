import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Register from "./userInfo/register";
// import Login from "./userInfo/login";
import Homepage from "./homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
