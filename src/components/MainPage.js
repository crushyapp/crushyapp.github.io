import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';

import PrivacyModal from './PrivacyModal';


class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('#privacy-policy-link').on('click', () => {
      document.getElementById('privacy-policy').click();
    });
  }

  render() {
    return (
      <div className="full-height">
        <PrivacyModal className="top-aligned" />
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
        <hr className="divider" />

        <div className="footer-container">
          <div id="privacy-policy-link" className="footer-link" >Privacy Policy</div>
          <a href="#" className="footer-link">Contact</a>
        </div>

      </div>
    );
  }
}

export default withRouter(connect(null, { })(MainPage));
