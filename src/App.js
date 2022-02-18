import React from 'react';

import './App.css';
import Navbar from './firstpage';
import Ulogin from './ulogin';
import Alogin from './alogin';
import Reg from './reg';
import Abt from './about';
import Uvw from './uview';
import Avw from './aview';
import Addinfo from './pages/Addinfo';
import Deleteinfo from './pages/DeleteInfo';
import Feedback from './pages/feedback';
import Updateinfo from './pages/Updateinfo';
import PendingComp from './pages/Pending';
import InprogressComp from './pages/Inprogress';
import CompletedComp from './pages/Completed';
import Home from './home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/ulogin' component={Ulogin} />
        <Route path='/reg' component={Reg} />
        <Route path='/alogin' component={Alogin} />
        <Route path='/about' component={Abt} />
        <Route path='/uview' component={Uvw} />
        <Route path='/aview' component={Avw} />
        <Route path='/addInfo' component={Addinfo} />
        <Route path='/deleteInfo' component={Deleteinfo} />
        <Route path='/feedback' component={Feedback} />
        <Route path='/updateInfo' component={Updateinfo} />
        <Route path='/pending' component={PendingComp} />
        <Route path='/progress' component={InprogressComp} />
        <Route path='/completed' component={CompletedComp} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

