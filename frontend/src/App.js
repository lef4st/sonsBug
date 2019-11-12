import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import AdicionarSom from './pages/AdicionarSom';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/adicionar_som" component={AdicionarSom} />
        </Switch>
      </BrowserRouter>
    );

  }
}

export default App;
