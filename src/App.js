import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={ Login } exact />
          <Route path='/dashboard' component={ Dashboard } />
        </div>
      </HashRouter>
    );
  }
}
export default App;
