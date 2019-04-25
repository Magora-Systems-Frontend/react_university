import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { withCommonModals } from '../withCommonModals';
import TitleWithTextButton from '../_CommonModalComponents/TitleWithTextButton';

@withCommonModals
class SignUpModal extends React.PureComponent {
  render() {
    const { isShow, options } = this.props;
    return (
      <Modal
        visible={isShow}
        onCancel={this.props.hideModal}
        title={<TitleWithTextButton title="Sign Up" btnText="Log In" onClick={() =>  this.props.showModal('login')} />}
        closable={false}
        style={{ maxWidth: '400px' }}
      >
        SignUp modal template
      </Modal>
    );
  }
}

SignUpModal.propTypes = {
  isShow: PropTypes.bool,
  options: PropTypes.object,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
};

export default SignUpModal;
