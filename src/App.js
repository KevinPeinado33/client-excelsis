import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Principal from './pages/Principal';
import Cuenta from './pages/Cuenta/Cuenta';
import Login from './pages/Cuenta/Login';
import Dashboard from './pages/Dashboard';
import Contactanos from './pages/Contactanos';
import Noticias from './pages/Noticias';
import AlbumFotos from './pages/AlbumFotos';
import Interesados from './pages/Interesados';

import './utils/firebase';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/login" component={Cuenta} />
        <Route exact path="/iniciar-sesion" component={Login} />
        <Route exact path="/contactanos" component={Contactanos} />
        <Route exact path="/publicaciones-noticias" component={Noticias} />
        <Route exact path="/album-fotos" component={AlbumFotos} />

        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/personas-interesadas" component={Interesados} />
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