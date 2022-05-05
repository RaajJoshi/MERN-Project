import React, { useState, useContext } from "react";
import './App.css';
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, DropdownItem, MobileIcon } from './fpelements';
import { DropdownData } from "./DropdownData";
import DMenu from "./DMenu";
import { IconContext } from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';
import { UserContext } from "./App";

function Firstpage() {

  const { state, dispatch } = useContext(UserContext);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const userInfo = localStorage.getItem("userInfo");
  const facInfo = localStorage.getItem("facInfo");
  const admnInfo = localStorage.getItem("admnInfo");


  const RenderMenu = () => {
    if (state || userInfo || facInfo || admnInfo) {
      return (
        <>
          <NavLink to="/home" activeStyle>
            <i className="bi bi-house-door-fill" style={{ marginRight: '3px' }} />
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            <i className="bi bi-people-fill" style={{ marginRight: '3px' }} />
            About us
          </NavLink>
          <NavBtn>
            <NavBtnLink to='/logout'>Logout</NavBtnLink>
          </NavBtn>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/home" activeStyle>
            <i className="bi bi-house-door-fill" style={{ marginRight: '3px' }} />
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            <i className="bi bi-people-fill" style={{ marginRight: '3px' }} />
            About us
          </NavLink>
          <NavBtn>
            <NavBtnLink onClick={showSidebar} to='#'>Log-in</NavBtnLink>
          </NavBtn>
        </>
      );
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav className="navbar">
          <h4 style={{ color: '#15cdfc', margin: '5px' }}>Complain Managment System</h4>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <RenderMenu onClick={closeMobileMenu} />
          </NavMenu>
          {sidebar && <DropdownItem onClick={showSidebar}>
            {DropdownData.map((item, index) => {
              return <DMenu item={item} key={index} />;
            })}
          </DropdownItem>}
        </Nav>
      </IconContext.Provider>

    </>
  );
};

export default Firstpage;

