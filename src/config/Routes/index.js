import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../component/Pages/Login';
import Dashboard from '../../component/Pages/Dashboard';
import About from '../../component/Pages/About';
import Register from '../../component/Pages/Register';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login title="Welcome" />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
;}

export default Routes;