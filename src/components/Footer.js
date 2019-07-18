import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
// import Button from '@material-ui/core/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPrivacyModalOpen: false,
    };
  }

  render() {
    return (
      <div>
        <hr className="divider" />
        <div className="footer-container">
          <Modal
            open={this.state.isPrivacyModalOpen}
            onOpen={() => { this.setState({ isPrivacyModalOpen: true }); }}
            onClose={() => { this.setState({ isPrivacyModalOpen: false }); }}
            trigger={(<div id="privacy-policy-link" className="footer-link" >Privacy Policy</div>)}
          >
            <Modal.Content>
              <Modal.Header className="modal-header">Second Chance Matches Privacy Policy</Modal.Header>
              <Modal.Content>
                <hr className="priv-modal-break" />
                <Modal.Description>
                  <p className="modal-text">All your data is encrypted. Nobody can see your crushes except you and your matches.</p>
                </Modal.Description>
              </Modal.Content>
            </Modal.Content>
          </Modal>

          <a href="#" onClick={() => { this.props.history.push('/profile'); }} className="footer-link">Contact</a>
        </div>

      </div>
    );
  }
}

export default withRouter(connect(null, { })(Footer));
