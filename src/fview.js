import React from 'react';
import Sidebar from './faccomponents/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FacFeedback from './facpages/Feedback';
import FPostComp from './facpages/PostComp';
import FModComp from './facpages/ModComp';
import FViewComp from './facpages/ViewComp';


const Uview = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/postcompf' component={FPostComp} />
        <Route path='/modcompf' component={FModComp} />
        <Route path='/viewcompf' component={FViewComp} />
        <Route path='/facfeedback' component={FacFeedback} />
      </Switch>
    </Router>
  );
};

export default Uview;

