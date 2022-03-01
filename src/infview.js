import React from 'react';
import Sidebar from './infaccomponents/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IFacFeedback from './infacpages/Feedback';
import IFPostComp from './infacpages/PostComp';
import IFModComp from './infacpages/ModComp';
import IFViewComp from './infacpages/ViewComp';
import Work from './infacpages/work';


const Uview = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/postcompif' component={IFPostComp} />
        <Route path='/modcompif' component={IFModComp} />
        <Route path='/viewcompif' component={IFViewComp} />
        <Route path='/ifacfeedback' component={IFacFeedback} />
        <Route path='/work' component={Work} />
      </Switch>
    </Router>
  );
};

export default Uview;

