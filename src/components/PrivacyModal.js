import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const PrivacyModal = () => (
  <Modal trigger={<Button id="privacy-policy" className="invisible">Privacy Policy</Button>} >
    <Modal.Header className="modal-header">Second Chance Matches Privacy Policy</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p className="modal-text">All your data is encrypted. Nobody can see your crushes except you and your matches.</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default PrivacyModal;
