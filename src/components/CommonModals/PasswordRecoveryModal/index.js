import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { PasswordRecovery } from 'components';
import { withCommonModals } from '../withCommonModals';
import lang from './lang.json';

export default
@withCommonModals
class PasswordRecoveryModal extends PureComponent {
  render() {
    const { isShow } = this.props;
    const {
      EN: { modalTitle },
    } = lang;
    return (
      <Modal
        visible={isShow}
        onCancel={this.props.hideModal}
        title={modalTitle}
        closable={false}
        footer={null}
        style={{ maxWidth: '400px' }}>
        <PasswordRecovery hideModal={this.props.hideModal} />
      </Modal>
    );
  }
}

PasswordRecoveryModal.propTypes = {
  isShow: PropTypes.bool,
  hideModal: PropTypes.func,
  showModal: PropTypes.func,
};

PasswordRecoveryModal.defaultProps = {
  isShow: false,
  hideModal: Function.prototype,
  showModal: Function.prototype,
};
