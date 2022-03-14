import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Axios from 'axios';

const Nav = styled.div`
  background: #15171c;
  height: 50px;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  width: 80px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  overflow: scroll;
  overflow-x: hidden;
  background: black;
  width: 270px;
  height: 74vh;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  position: fixed;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  margin-top: 7px;
`;



const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [finalValue, setFinalValue] = useState([]);

  useEffect(() => {
    let data = [];
    data = JSON.parse(localStorage.getItem("admnInfo"));
    const uid = data[2];
    Axios.get(`/readadmnbyid/${uid}`, {
    }).then((response) => {
      setFinalValue(response.data)
    })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          
          <h6 style={{ color: '#15cdfc', marginBottom:'-5px'}}>Welcome...</h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {finalValue.map((val) => {
            return (
              <div style={{color:'white', marginTop:'2px'}}>
                <h4>{val.fname}&nbsp;&nbsp;
                {val.lname}</h4>
              </div>
            );
          })}
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>  
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>          
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;