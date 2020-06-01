import React, { useState } from 'react';
import Register from "../userInfo/register";
import Login from "../userInfo/login";
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = ({user, setUser, userLogout}) => {

  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const toggleRegister = () => setRegisterModal(!registerModal);
  const toggleLogin = () => setLoginModal(!loginModal);
  
  if (user) {
    return (
      <Nav style={{backgroundColor: 'transparent', justifyContent:'right'}}>
        <NavItem>
          <NavLink href="/displaySavedCocktails">
            Saved Cocktails
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={userLogout}>
            Logout
          </NavLink>
        </NavItem>
      </Nav>
    )
  }

  return (
    <>
      <Nav style={{backgroundColor: 'transparent', justifyContent:'right'}}>
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
      </Nav>
      <Register isOpen={registerModal} toggle={toggleRegister} setUser={setUser}/> 
      <Login isOpen={loginModal} toggle={toggleLogin} setUser={setUser}/>
    </>
  )
}

export default Navbar;