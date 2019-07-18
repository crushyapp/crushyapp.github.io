import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Modal } from 'semantic-ui-react';
import Footer from './Footer';
import { isValidPhoneNumber, isValidEmail } from '../ders_func_lib';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import $ from 'jquery';

// import PrivacyModal from './PrivacyModal';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotifyAddedUserModalOpen: false,
      enteringCrush: '',
      enteringCrushPhone: '',
      enteringCrushEmail: '',
    };
  }

  render() {
    const crushes = ['crush1', 'crush2', 'crush3'];
    return (
      <div className="full-height">
        <Modal
          open={this.state.isNotifyAddedUserModalOpen}
          onOpen={() => { this.setState({ isNotifyAddedUserModalOpen: true }); }}
          onClose={() => { this.setState({ isNotifyAddedUserModalOpen: false }); }}
          trigger={(<span />)}
        >
          <Modal.Content>
            <Modal.Header className="modal-header">{`${this.state.enteringCrush} has not signed up yet`}</Modal.Header>
            <Modal.Content>
              <hr className="priv-modal-break" />
              <Modal.Description>
                <div className="send-user-notif-container">
                  <p className="modal-text">{`Would you like to send ${this.state.enteringCrush} an anonymous notification so they know they've been crushed on?`}</p>
                  <div className="crush-info-input-container">
                    <input className="crush-info-input-bar"
                      placeholder="xxx-xxx-xxxx"
                      onChange={(event) => { this.setState({ enteringCrushPhone: event.target.value }); }}
                      value={this.state.enteringCrushPhone}
                    />
                    <Button className="send-notif-button"
                      onClick={() => {
                      if (isValidPhoneNumber(this.state.enteringCrushPhone)) {
                        // TODO send notification to crush
                        // only allow user to send one notif

                      }
                    }}
                    >Send text
                    </Button>
                  </div>
                  <div className="crush-info-input-container">
                    <input className="crush-info-input-bar"
                      placeholder="john@gmail.com"
                      onChange={(event) => { this.setState({ enteringCrushEmail: event.target.value }); }}
                      value={this.state.enteringCrushEmail}
                    />
                    <Button className="send-notif-button"
                      onClick={() => {
                      if (isValidEmail(this.state.enteringCrushEmail)) {
                        // TODO send email to crush1
                        // only allow user to send once
                      }
                    }}
                    >Send email
                    </Button>
                  </div>
                </div>
              </Modal.Description>
            </Modal.Content>
          </Modal.Content>
        </Modal>
        <div className="red-background">
          <div className="profile-nav">
            <img src={require('../img/icon.jpg')} alt="Love" className="logo" />
            <div className="user-info-container">
              <div className="username-nav">@abandohess</div>
              <img alt="Love" className="user-image" src="https://scontent-lga3-1.cdninstagram.com/vp/dd4022773eaee97d2439dc466f7f1cf9/5DB884A1/t51.2885-19/s320x320/53439421_300042017343002_8389409655645798400_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com" />
            </div>
          </div>
          <div className="enter-crush-container">
            <p className="trump-subtitle">Add a Crush</p>
            <input className="input-bar"
              placeholder="@johnsmith"
              onChange={(event) => { this.setState({ enteringCrush: event.target.value }); }}
              value={this.state.enteringCrush}
            />
            <Button variant="extendedFab"
              aria-label="Add"
              className="add-crush-button"
              onClick={() => {
              // TODO make call to backend
              if (true /* added user has not signed up yet */) {
                this.setState({ isNotifyAddedUserModalOpen: true });
              }
            }}
            >
              Add
            </Button>
          </div>
        </div>
        <div className="crush-info-container">

          <div className="crushes-container">
            <div className="your-crushes-header">Your Crushes</div>
            {crushes.map((crush) => {
              return <div key={crush}>{crush}</div>;
            })}
          </div>
          <div className="crushes-container">
            <div className="your-crushes-header">Your Matches</div>
            {crushes.map((crush) => {
              return <div key={crush}>{crush}</div>;
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(null, { })(Profile));
