import React, {useState} from "react";
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
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About us
          </NavLink>
          <NavLink to="/reg" activeStyle>
            Registration
          </NavLink>
          <NavLink to="/" activeStyle onClick={()=>{ localStorage.removeItem("userInfo"); }}>
            Logout
          </NavLink>
        </NavMenu>
         
        <NavBtn>
          <NavBtnLink onClick={showSidebar} to='#'>Log-in</NavBtnLink>
        </NavBtn>
        
      </Nav>
      {sidebar && <DropdownItem>
          {DropdownData.map((item, index) => {
              return <DMenu item={item} key={index} />;
          })}
        </DropdownItem>}
    </>
  );
};

export default Firstpage;

