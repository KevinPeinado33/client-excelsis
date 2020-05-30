import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Principal from './pages/Principal';
import Cuenta from './pages/Cuenta/Cuenta';
import Login from './pages/Cuenta/Login';
import Dashboard from './pages/Dashboard';

import './utils/firebase';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/login" component={Cuenta} />
        <Route exact path="/iniciar-sesion" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact component={() => {
          return (
            <h1>Error 404</h1>
          )
        }} />
      </Switch>
    </Router>
  );
}

export default App;