import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Counter from '../containers/Counter';
import Controls from '../containers/Control';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Welcome
        <a href="https://www.instagram.com/oauth/authorize/?client_id=06b1bbf83926467a8a44fc3678430a64&redirect_uri=http://second-chances.surge.sh&response_type=code">
          Sign in with Instagram
        </a>
        <Counter />
        <Controls />
      </div>
    );
  }
}

export default withRouter(connect(null, { })(MainPage));
