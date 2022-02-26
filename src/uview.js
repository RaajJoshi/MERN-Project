import React from 'react';
import Sidebar from './usercomponents/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feedback from './userpages/Feedback';
import PostComp from './userpages/PostComp';
import ModComp from './userpages/ModComp';
import ViewComp from './userpages/ViewComp';

const Uview = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/postcomp' component={PostComp} />
        <Route path='/modcomp' component={ModComp} />
        <Route path='/viewcomp' component={ViewComp} />
        <Route path='/usrfeedback' component={Feedback} />
      </Switch>
    </Router>
  );
};

export default Uview;

