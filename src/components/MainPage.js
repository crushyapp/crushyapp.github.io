import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Footer from './Footer';
// import { Modal } from 'semantic-ui-react';
// import Button from '@material-ui/core/Button';


class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="full-height">
        <div className="header-background">
          <img src={require('../img/icon.jpg')} alt="Love" className="center-trump" />
          <p className="trump-subtitle">Second Chance Matches</p>
          <p className="trump-subsubtitle">Add your crush&#39;s Instagram handle. If they add you back we&#39;ll let you know ;)</p>
        </div>

        <div className="sign-up-container">
          <div className="insta-default">
            <a href="https://www.instagram.com/oauth/authorize/?client_id=06b1bbf83926467a8a44fc3678430a64&redirect_uri=http://second-chances.surge.sh&response_type=code" className="insta-default">Sign in with Instagram <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(null, { })(MainPage));
