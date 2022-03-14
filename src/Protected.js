import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// const userAuth = () => {
//   const Auth = { userInfo: "", facInfo: "", admnInfo: "" };
//   const userInfo = localStorage.getItem("userInfo");
//   Auth.facInfo = localStorage.getItem("facInfo");
//   Auth.admnInfo = localStorage.getItem("admnInfo");
// } 

function Protected  ()  {

  const navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo");

  if(userInfo){
    return <Outlet />;
  }else{
    return navigate("/ulogin");
  }
  
};

export default Protected;