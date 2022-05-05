import React, { createContext, useReducer } from 'react';
import './App.css';
//import Protected from './Protected';
import Navbar from './firstpage';
import Ulogin from './ulogin';
import Alogin from './alogin';
import Flogin from './flogin';
import Lout from './logout';
import Reg from './reg';
import Abt from './about';
import Uvw from './uview';
import Avw from './aview';
import Fvw from './fview';
import IFvw from './infview';
import Addinfo from './pages/Addinfo';
import AddSt from './pages/mngstdnts';
import Deleteinfo from './pages/DeleteInfo';
import Feedback from './pages/feedback';
import Updateinfo from './pages/Updateinfo';
import PendingComp from './pages/Pending';
import InprogressComp from './pages/Inprogress';
import UprocessComp from './pages/UnderProcess';
import CompletedComp from './pages/Completed';
import UserFeedback from './userpages/Feedback';
import PostComp from './userpages/PostComp';
import ModComp from './userpages/ModComp';
import ViewComp from './userpages/ViewComp';
import FacFeedback from './facpages/Feedback';
import FPostComp from './facpages/PostComp';
import FModComp from './facpages/ModComp';
import FViewComp from './facpages/ViewComp';
import IFacFeedback from './infacpages/Feedback';
import IFPostComp from './infacpages/PostComp';
import IFModComp from './infacpages/ModComp';
import IFViewComp from './infacpages/ViewComp';
import Work from './infacpages/work';
import Home from './home';
import FP from './forgot';
import NP from './newPass';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { initialState, reducer } from './UseReducer';

export const UserContext = createContext();


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/ulogin' element={<Ulogin />} />
          <Route path='/reg' element={<Reg />} />
          <Route path='/alogin' element={<Alogin />} />
          <Route path='/flogin' element={<Flogin />} />
          <Route path='/logout' element={<Lout />} />
          <Route path='/about' element={<Abt />} />
          <Route path='/home' element={<Home />} />
          
            <Route path='/uview' element={<Uvw />} />
            <Route path='/postcomp' element={<PostComp />} />
            <Route path='/modcomp' element={<ModComp />} />
            <Route path='/viewcomp' element={<ViewComp />} />
            <Route path='/usrfeedback' element={<UserFeedback />} />
          
            <Route path='/fview' element={<Fvw />} />
            <Route path='/infview' element={<IFvw />} />
            <Route path='/postcompf' element={<FPostComp />} />
            <Route path='/modcompf' element={<FModComp />} />
            <Route path='/viewcompf' element={<FViewComp />} />
            <Route path='/facfeedback' element={<FacFeedback />} />
            <Route path='/postcompif' element={<IFPostComp />} />
            <Route path='/modcompif' element={<IFModComp />} />
            <Route path='/viewcompif' element={<IFViewComp />} />
            <Route path='/ifacfeedback' element={<IFacFeedback />} />
            <Route path='/work' element={<Work />} />
          
            <Route path='/aview' element={<Avw />} />
            <Route path='/addInfo' element={<Addinfo />} />
            <Route path='/mngstdnts' element={<AddSt />} />
            <Route path='/deleteInfo' element={<Deleteinfo />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/updateInfo' element={<Updateinfo />} />
            <Route path='/pending' element={<PendingComp />} />
            <Route path='/progress' element={<InprogressComp />} />
            <Route path='/uprocess' element={<UprocessComp />} />
            <Route path='/completed' element={<CompletedComp />} />
          
          
          <Route path='/forgot' element={<FP />} />
          <Route path='/newPass' element={<NP />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );

}

export default App;

