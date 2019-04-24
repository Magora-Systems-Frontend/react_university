import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { withCommonModals } from '../withCommonModals';

@withCommonModals
class LoginModal extends React.PureComponent {
  render() {
    const { isShow, options } = this.props;
    return (
      <Modal
        visible={isShow}
        onCancel={this.props.hideModal}
      >
        Login modal template
      </Modal>
    );
  }
}

LoginModal.propTypes = {
  isShow: PropTypes.bool,
  options: PropTypes.object,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
};

export default LoginModal;
