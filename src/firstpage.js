import React, { useState } from "react";
import './App.css';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, DropdownItem } from './fpelements';
import { DropdownData } from "./DropdownData";
import DMenu from "./DMenu";

function Firstpage() {


  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);


  return (
    <>
      <Nav className="navbar">
        <h4 style={{ color: '#15cdfc', margin: '5px' }}>Complain Managment System</h4>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            <i class="bi bi-house-door-fill" style={{marginRight:'3px'}} />
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
          <i class="bi bi-people-fill" style={{marginRight:'3px'}} />
            About us
          </NavLink>

          <NavLink to="/reg" activeStyle>
          <i class="bi bi-person-circle" style={{marginRight:'3px'}} />
            Registration
          </NavLink>

          <NavBtn>
            <NavBtnLink onClick={showSidebar} to='#'>Log-in</NavBtnLink>
          </NavBtn>

          
          {/* <NavBtn>
            <NavBtnLink to='/' activeStyle onClick={() => { localStorage.removeItem("userInfo"); }}>Logout</NavBtnLink>
          </NavBtn> */}
          

        </NavMenu>
      </Nav>
      {sidebar && <DropdownItem onClick={showSidebar}>
        {DropdownData.map((item, index) => {
          return <DMenu item={item} key={index} />;
        })}
      </DropdownItem>}
    </>
  );
};

export default Firstpage;

