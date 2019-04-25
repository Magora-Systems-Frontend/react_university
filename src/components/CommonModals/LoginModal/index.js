import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { Login } from 'components';
import { withCommonModals } from '../withCommonModals';
import TitleWithTextButton from '../_CommonModalComponents/TitleWithTextButton';

@withCommonModals
class LoginModal extends React.PureComponent {

  render() {
    const { isShow, options } = this.props;
    return (
      <Modal
        visible={isShow}
        onCancel={this.props.hideModal}
        title={<TitleWithTextButton title="Log In" btnText="Sign up" onClick={() =>  this.props.showModal('sign-up')} />}
        closable={false}
        footer={null}
        style={{ maxWidth: '400px' }}
      >
        <Login hideModal={this.props.hideModal} />
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
