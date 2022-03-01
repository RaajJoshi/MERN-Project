import React from 'react';

import './App.css';
import Navbar from './firstpage';
import Ulogin from './ulogin';
import Alogin from './alogin';
import Flogin from './flogin';
import Reg from './reg';
import Abt from './about';
import Uvw from './uview';
import Avw from './aview';
import Fvw from './fview';
import IFvw from './infview';
import Addinfo from './pages/Addinfo';
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
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/ulogin' component={Ulogin} />
        <Route path='/reg' component={Reg} />
        <Route path='/alogin' component={Alogin} />
        <Route path='/flogin' component={Flogin} />
        <Route path='/about' component={Abt} />
        <Route path='/uview' component={Uvw} />
        <Route path='/aview' component={Avw} />
        <Route path='/fview' component={Fvw} />
        <Route path='/infview' component={IFvw} />
        <Route path='/addInfo' component={Addinfo} />
        <Route path='/deleteInfo' component={Deleteinfo} />
        <Route path='/feedback' component={Feedback} />
        <Route path='/updateInfo' component={Updateinfo} />
        <Route path='/pending' component={PendingComp} />
        <Route path='/progress' component={InprogressComp} />
        <Route path='/uprocess' component={UprocessComp} />
        <Route path='/completed' component={CompletedComp} />
        <Route path='/postcomp' component={PostComp} />
        <Route path='/modcomp' component={ModComp} />
        <Route path='/viewcomp' component={ViewComp} />
        <Route path='/usrfeedback' component={UserFeedback} />
        <Route path='/postcompf' component={FPostComp} />
        <Route path='/modcompf' component={FModComp} />
        <Route path='/viewcompf' component={FViewComp} />
        <Route path='/facfeedback' component={FacFeedback} />
        <Route path='/postcompif' component={IFPostComp} />
        <Route path='/modcompif' component={IFModComp} />
        <Route path='/viewcompif' component={IFViewComp} />
        <Route path='/ifacfeedback' component={IFacFeedback} />
        <Route path='/work' component={Work} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

