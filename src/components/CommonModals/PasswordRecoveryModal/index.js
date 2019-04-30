import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { PasswordRecovery } from 'components';
import { withCommonModals } from '../withCommonModals';

export default
@withCommonModals
class PasswordRecoveryModal extends PureComponent {
  render() {
    const { isShow } = this.props;
    return (
      <Modal
        visible={isShow}
        onCancel={this.props.hideModal}
        title={'Password recovery'}
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
