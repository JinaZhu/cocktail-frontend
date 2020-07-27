import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Savedpage from "./saved/Saved";

function App() {
  const [user, setUser] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  let history = useHistory()
  // check if user is logged in
  async function checkLoggedIn() {
    const userName = await fetch("/getUser");
    try {
      const jsonUserName = await userName.json();
      if (jsonUserName.response) {
        setUser(jsonUserName.response);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  useEffect(() => {
    checkLoggedIn();
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  // handles user logging out
  const userLogout = (evt, history) => {
    evt.preventDefault();
    fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setUser("");
    alert("Successfully logged out!");
    
    history.push('/')

  };

  return (
    <div className="App" style={{ display: "grid", padding: 0, margin: 0 }}>
      {isLoaded && (
        <>
          <Router>
            <Switch>
              <Route exact path="/" component={Homepage}>
                <Homepage
                  user={user}
                  setUser={setUser}
                  userLogout={userLogout}
                  history={history}
                />
              </Route>
              <Route path="/displaySavedCocktails" component={Savedpage}>
                <Savedpage
                  user={user}
                  setUser={setUser}
                  userLogout={userLogout}
                />
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
