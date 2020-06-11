import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Homepage from "./homepage/Homepage";
import { Background } from "./homepage/HomepageStyles";


function App() {

  const [user, setUser] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  // check if user is logged in
  async function checkLoggedIn() {
    const userName = await fetch('/getUser')
      try {
        const jsonUserName = await userName.json();
        if (jsonUserName.response) {
          // console.log(jsonUserName.response)
          setUser(jsonUserName.response);
      }
    } catch (error) {
      console.log(`Error: ${error}`)
      }
  }

  useEffect(() => {
    checkLoggedIn()
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, [])

  // handles user logging out
  const userLogout = (evt) => {
    evt.preventDefault();
    fetch('/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    setUser('')
    alert('Successfully logged out!')

  }
  return (
    <Background className="App" style={{display: 'grid'}}>
      {
        isLoaded && (
        <>
          <Navbar user={user} setUser={setUser} userLogout={userLogout}/>
          <Router>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/displaySavedCocktails" component={Homepage} />
            </Switch>
          </Router>
        </>
        ) 
      }
    </Background>
  );
}

export default App;
