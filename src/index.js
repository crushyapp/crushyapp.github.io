import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.scss';

const About = (props) => {
  return <div> All there is to know about me </div>;
};
const Welcome = (props) => {
  return <div>Welcome</div>;
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
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />
        </Switch>
      </ul>
    </nav>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
        <Route exact path="/test/:id" component={Test} />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
