import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

import { signin } from '../actions';
import Footer from './Footer';
import { getUrlVars } from '../ders_func_lib';
// import { Modal } from 'semantic-ui-react';
// import Button from '@material-ui/core/Button';

const override = css`
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -75px;
    margin-top: -75px;
`;

const Preloader = (props) => {
  if (props.active) {
    return (
      <div>
        <div className="preloader-background" />
        <ClipLoader
          css={override}
          sizeUnit="px"
          size={150}
          color="#3498db"
          loading
        />
      </div>
    );
  }
  return <span />;
};

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    // TODO once we have a function to test if a token is still valid, we should
    // immediately redirect to the profile page so we don't have to send a sign
    // in requet to the backend.

    // const token = localStorage.getItem('token');
    // if (token) {
    //   this.props.history.push('/profile');
    // }

    const params = getUrlVars();
    // if we have a code from instagram, then activate the preloader
    // we do this because otherwise we will be hanging on the landing page for
    // a few seconds before being redirected to the profile page
    if (params.code) {
      this.setState({
        loading: true,
      }, () => {
        // after activating the preloader, try to sign in
        this.props.signin(params.code, this.props.history, () => {
          // if we failed to sign in it's probably because we used the code
          // before in a previous session and it's no longer valid. In this case
          // deactivate the preloader and remove the code from the browser's url
          this.setState({
            loading: false,
          }, () => {
            window.history.replaceState({}, document.title, '/');
          });
        });
      });
    }
  }

  render() {
    return (
      <div className="full-height">
        <div className="header-background">
          <img src={require('../img/icon.jpg')} alt="Love" className="center-content" />
          <p className="subtitle">Second Chance Matches</p>
          <p className="subsubtitle">Add your crush&#39;s Instagram handle. If they add you back we&#39;ll let you know ;)</p>
        </div>

        <div className="sign-up-container">
          <div className="insta-default">
            {/* TODO REDIRECT URI */}
            <a href="https://www.instagram.com/oauth/authorize/?client_id=06b1bbf83926467a8a44fc3678430a64&redirect_uri=http://localhost:8080&response_type=code" className="insta-default">Sign in with Instagram <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></a>
          </div>
        </div>
        <Footer />
        <Preloader active={this.state.loading} />
      </div>
    );
  }
}

export default withRouter(connect(null, { signin })(MainPage));
