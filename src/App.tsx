import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Router, Switch, Route, useHistory } from 'react-router-dom';

import {Lista} from './componentes/lista';
import {Detalle} from './componentes/detalle';
import {NavBar} from './componentes/navbar'
import {Home} from './componentes/home';
import {Donde} from './componentes/donde';

import {createBrowserHistory} from 'history';

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={Lista} />
          <Route path="/detalle/:id" component={Detalle} />
        <Route path="/donde" component={Donde} />
        <Route path="/home" component={Home} />
        </Switch>
    </Router>
  );
}

export default App;
