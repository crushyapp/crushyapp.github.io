import React, { Component } from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';

import { ToastContainer } from 'react-toastify';

// import { signin } from '../actions';
// import { getUrlVars } from '../ders_func_lib';
import MainPage from './MainPage';
import Profile from './Profile';


library.add(faInstagram);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="full-height">
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/profile" component={Profile} />
            <Route render={() => (<div className="pageNotFound">404 page not found</div>)} />
          </Switch>
          <ToastContainer />
        </div>

      </Router>
    );
  }
}

export default connect(null, { })(App);
