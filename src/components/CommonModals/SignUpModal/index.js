import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { SignUp } from 'components';
import { withCommonModals } from '../withCommonModals';
import TitleWithTextButton from '../_CommonModalComponents/TitleWithTextButton';
import lang from './lang.json';

@withCommonModals
class SignUpModal extends PureComponent {
  render() {
    const { isShow } = this.props;
    const {
      EN: { title, btnText },
    } = lang;
    return (
      <Modal
        visible={isShow}
        onCancel={this.props.hideModal}
        title={<TitleWithTextButton title={title} btnText={btnText} onClick={() => this.props.showModal('login')} />}
        closable={false}
        footer={null}
        style={{ maxWidth: '400px' }}>
        <SignUp hideModal={this.props.hideModal} />
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

SignUpModal.defaultProps = {
  isShow: false,
  options: {},
  hideModal: Function.prototype,
  showModal: Function.prototype,
};

export default SignUpModal;
