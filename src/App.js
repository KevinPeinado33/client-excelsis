import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Principal from './pages/Principal';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Principal} />
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
