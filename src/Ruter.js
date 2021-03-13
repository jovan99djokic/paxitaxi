import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Cenovnik from './Pages/Cenovnik';

const Ruter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/Cenovnik'>
          <Cenovnik />
        </Route>
      </Switch>
    </Router>
  );
};

export default Ruter;