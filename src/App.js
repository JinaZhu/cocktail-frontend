import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
// import Register from "./userInfo/register";
// import Login from "./userInfo/login";
import Homepage from "./homepage/Homepage";

function App() {

  const [user, setUser] = useState(false);
  const [value, setValue] = useState('');

  // check if user is logged in
  useEffect(() => {
    const fetchUser = async () => {
      const userName = await fetch('/getUser');
      try {
        const jsonUserName = await userName.json();
        if (jsonUserName.response) {
          setUser(true);
      }
    } catch (error) {
      console.log(`Error: ${error}`)
      }
    }
    fetchUser();
  }, []);

  // handles user logging out
  const userLogout = (evt) => {
    evt.preventDefault();
    fetch('/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    setUser(false)
    alert('Successfully logged out!')

  }
  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} userLogout={userLogout}/>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/displaySavedCocktails" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );

  //sending ingredients to server.py when clicking submit
  
  function handleSubmit(e) {
    e.preventDefault();
    const data = { ingredients: value };
    console.log('submit');
    console.log(value);
    fetch('/ingredientsresults.json', {
      method: 'POST',
      headers: {

      }
    })
  }

  function handleValue(e) {
    setValue(e.target.value);
  }
}

export default App;
