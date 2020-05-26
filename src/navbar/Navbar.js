import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import Register from "../userInfo/register";
import Login from "../userInfo/login";
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = () => {

  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const toggleRegister = () => setRegisterModal(!registerModal);
  const toggleLogin = () => setLoginModal(!loginModal);
  

  return (
    <>
      <Nav>
        <NavItem>
          <NavLink href="#" onClick={toggleRegister}>
            Register
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={toggleLogin}>
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/displaySavedCocktails">
            Saved Cocktails
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">
            Logout
          </NavLink>
        </NavItem>
      </Nav>
      <Register isOpen={registerModal} toggle={toggleRegister}/> 
      <Login isOpen={loginModal} toggle={toggleLogin}/>
    </>
  )
}

export default Navbar;