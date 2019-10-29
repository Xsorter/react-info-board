import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/includes/Header/Header';
import MainMenu from '../components/includes/MainMenu/MainMenu';
import HomePage from '../components/wrappers/HomePage/HomePage';
import RouterTest from '../components/wrappers/RouterTest/RouterTest';

export default class MainRouter extends React.Component {

  render() {
    return (
      <Router>
        <Header />
        <MainMenu />
        <div>
          <Switch>
            <Route path="/code-snippets">
              <RouterTest data="to code-snippets" />
            </Route>
            <Route path="/general-info">
              <RouterTest data="to general-info" />
            </Route>
            <Route path="/warnings">
              <RouterTest data="to warnings" />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
