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
import { fetchUserData, addCrush, sendNotificationToCrush, NotifTypes } from '../actions';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotifyAddedUserModalOpen: false,
      enteringCrush: '',
      enteringCrushPhone: '',
      enteringCrushEmail: '',
      profilePicture: '',
      crushes: [],
      matches: [],
      username: '',
      numCrushedOnUser: 0,
    };
    this.syncLocalStateWithReduxState = this.syncLocalStateWithReduxState.bind(this);
  }


  componentDidMount() {
    if (this.props.authenticated) {
      this.props.fetchUserData(this.props.id, () => {
        this.syncLocalStateWithReduxState();
      });
    }
  }

  syncLocalStateWithReduxState() {
    this.setState({
      profilePicture: this.props.profile_picture || '',
      crushes: this.props.crushes || [],
      matches: this.props.matches || [],
      username: this.props.username || '',
      numCrushedOnUser: this.props.num_crushed_on_user || 0,
    });
  }

  render() {
    return (
      <div className="full-height">
        <Modal
          open={this.state.isNotifyAddedUserModalOpen}
          onOpen={() => { this.setState({ isNotifyAddedUserModalOpen: true }); }}
          onClose={() => {
           this.setState({
             isNotifyAddedUserModalOpen: false,
             enteringCrush: '',
             enteringCrushEmail: '',
             enteringCrushPhone: '',
           });
          }}
          trigger={(<span />) /* no visible trigger */}
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
                          // TODO make sure phone number is formatted correctly for rob
                          this.props.sendNotificationToCrush(this.state.enteringCrushPhone, NotifTypes.TEXT_MESSAGE, /* callback */ null);
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
                          this.props.sendNotificationToCrush(this.state.enteringCrushEmail, NotifTypes.EMAIL, /* callback */ null);
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
              <div className="username-nav">{this.state.username}</div>
              <img alt="Love" className="user-image" src={this.state.profilePicture} />
            </div>
          </div>
          <div className="enter-crush-container">
            <p className="subtitle">Add a Crush</p>

            <input className="input-bar"
              placeholder="@johnsmith"
              onChange={(event) => { this.setState({ enteringCrush: event.target.value }); }}
              value={this.state.enteringCrush}
            />
            <Button variant="text"
              aria-label="Add"
              className="add-crush-button"
              onClick={() => {
                // TODO make call to backend
                this.props.addCrush(this.props.id, this.state.enteringCrush, (crushHasAccount) => {
                  if (!crushHasAccount) {
                    this.setState({ isNotifyAddedUserModalOpen: true });
                  } else {
                    this.setState({
                      enteringCrush: '',
                    });
                  }
                  this.syncLocalStateWithReduxState();
                });
            }}
            >
              Add
            </Button>
            <p className="subsubtitle">{`${this.state.numCrushedOnUser} people have crushed on you`}</p>
          </div>

        </div>
        <div className="crush-info-container">

          <div className="crushes-container">
            <div className="your-crushes-header">Your Crushes</div>
            {(this.state.crushes.length > 0 ?
              this.state.crushes.map((crush) => {
                return <div key={crush}>{crush}</div>;
              }) :
              <div className="not-entered">You have not crushed on anyone yet</div>
            )}
          </div>
          <div className="crushes-container">
            <div className="your-crushes-header">Your Matches</div>
            {(this.state.matches.length > 0 ?
              this.state.matches.map((match) => {
                return <div key={match}>{match}</div>;
              }) :
              <div className="not-entered">You have not matched with anyone yet</div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
    id: state.auth.id,
    profile_picture: state.user.profile_picture,
    crushes: state.user.crushes,
    matches: state.user.matches,
    username: state.user.username,
    num_crushed_on_user: state.user.num_crushed_on_user,
  }
);

export default withRouter(connect(mapStateToProps, { fetchUserData, addCrush, sendNotificationToCrush })(Profile));
