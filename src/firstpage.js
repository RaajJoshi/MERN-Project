import React from "react";
import './App.css';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './fpelements';


function Firstpage() {


  return (
    <>
      <Nav className="navbar">
        <h4 style={{ color: '#15cdfc', margin: '5px' }}>Complain Managment System</h4>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/alogin" activeStyle>
            ADMIN
          </NavLink>
          <NavLink to="/about" activeStyle>
            About us
          </NavLink>
          <NavLink to="/reg" activeStyle>
            Registration
          </NavLink>
        </NavMenu>
        
        <NavBtn>
          <NavBtnLink to='/ulogin'>Log-in</NavBtnLink>
        </NavBtn>
        
      </Nav>
    </>
  );
};

export default Firstpage;

