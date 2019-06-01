import React, { Component } from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { signin } from '../actions';
import { getUrlVars } from '../ders_func_lib';
import MainPage from './MainPage';


const About = (props) => {
  return <div> All there is to know about me </div>;
};
const FallBack = (props) => {
  return <div>URL Not Found</div>;
};
const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};


const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

class App extends Component {
  componentDidMount() {
    const params = getUrlVars();
    console.log(params);
    if (params.code) {
      this.props.signin(params.code);
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact
              path="/"
              component={MainPage}
            />
            <Route path="/about" component={About} />
            <Route exact path="/test/:id" component={Test} />
            <Route component={FallBack} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, { signin })(App);
