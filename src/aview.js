import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Addinfo from './pages/Addinfo';
import Deleteinfo from './pages/DeleteInfo';
import Feedback from './pages/feedback';
import Updateinfo from './pages/Updateinfo';
import PendingComp from './pages/Pending';
import InprogressComp from './pages/Inprogress';
import UprocessComp from './pages/UnderProcess';
import CompletedComp from './pages/Completed';

const Aview = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/addInfo' component={Addinfo} />
        <Route path='/deleteInfo' component={Deleteinfo} />
        <Route path='/feedback' component={Feedback} />
        <Route path='/updateInfo' component={Updateinfo} />
        <Route path='/pending' component={PendingComp} />
        <Route path='/progress' component={InprogressComp} />
        <Route path='/uprocess' component={UprocessComp} />
        <Route path='/completed' component={CompletedComp} />
      </Switch>
    </Router>
  );
};

export default Aview;
