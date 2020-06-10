import React, { useState } from "react";
import Register from "../userInfo/register";
import Login from "../userInfo/login";
import { Nav, NavItem, NavLink } from "reactstrap";
import { StyleLink } from "./NavbarStyles";

const Navbar = ({ user, setUser, userLogout }) => {
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const toggleRegister = () => setRegisterModal(!registerModal);
  const toggleLogin = () => setLoginModal(!loginModal);

  return (
    <div style={{ margin: '5px 15px'}}>
      <Nav style={{ float: "right"}}>
        {!user && (
          <NavItem>
            <StyleLink href="#" onClick={toggleRegister}>
              Register
            </StyleLink>
          </NavItem>
        )}
        {!user && (
          <NavItem>
            <StyleLink href="#" onClick={toggleLogin}>
              Login
            </StyleLink>
          </NavItem>
        )}
        {user && (
          <NavItem>
            <StyleLink href="/displaySavedCocktails">
              Saved Cocktails
            </StyleLink>
          </NavItem>
        )}
        {user && (
          <NavItem>
            <StyleLink href="#" onClick={userLogout}> 
              Logout
            </StyleLink>
          </NavItem>
        )}
      </Nav>
      <Register
        isOpen={registerModal}
        toggle={toggleRegister}
        setUser={setUser}
      />
      <Login isOpen={loginModal} toggle={toggleLogin} setUser={setUser} />
    </div>
  );
};

export default Navbar;
