import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contacts from './pages/Contacts';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
