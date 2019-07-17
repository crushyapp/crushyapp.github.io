import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import $ from 'jquery';

// import PrivacyModal from './PrivacyModal';


class Profile extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   $('#privacy-policy-link').on('click', () => {
  //     document.getElementById('privacy-policy').click();
  //   });
  // }

  render() {
    const crushes = ['crush1', 'crush2', 'crush3'];
    return (
      <div className="full-height">
        <div className="red-background">
          <div className="profile-nav">
            <img src={require('../img/icon.jpg')} alt="Love" className="logo" />
            <div className="username-nav">@abandohess</div>
          </div>
          <div className="enter-crush-container">
            <p className="trump-subtitle">Add a Crush</p>
            <input className="input-bar" placeholder="@johnsmith" onChange={null} value={null} />
            <Button variant="extendedFab" aria-label="Add" className="add-crush-button" onClick={null}>
              Add
            </Button>
          </div>
        </div>
        <div className="crush-info-container">

          <div className="crushes-container">
            <div className="your-crushes-header">Your Crushes</div>
            {crushes.map((crush) => {
              return <div>{crush}</div>;
            })}
          </div>
          <div className="crushes-container">
            <div className="your-crushes-header">Your Matches</div>
            {crushes.map((crush) => {
              return <div>{crush}</div>;
            })}
          </div>
        </div>

        <hr className="divider" />
        <div className="footer-container min-height-5">
          <div id="privacy-policy-link" className="footer-link" >Privacy Policy</div>
          <a href="#" onClick={() => { this.props.history.push('/profile'); }} className="footer-link">Contact</a>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { })(Profile));
