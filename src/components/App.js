import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Counter from '../containers/Counter';
import Controls from '../containers/Control';

const About = (props) => {
  return <div> All there is to know about me </div>;
};
const Welcome = (props) => {
  return (
    <div>
    Welcome
      <Counter />
      <Controls />
    </div>);
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
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={About} />
            <Route exact path="/test/:id" component={Test} />
            <Route component={FallBack} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
