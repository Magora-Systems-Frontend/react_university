import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { Login } from 'components';
import { withCommonModals } from '../withCommonModals';
import TitleWithTextButton from '../_CommonModalComponents/TitleWithTextButton';
import lang from './lang.json';

export default
@withCommonModals
class LoginModal extends React.PureComponent {
  render() {
    const { isShow } = this.props;
    const {
      EN: { title, btnText },
    } = lang;
    return (
      <Modal
        visible={isShow}
        onCancel={this.props.hideModal}
        title={<TitleWithTextButton title={title} btnText={btnText} onClick={() => this.props.showModal('sign-up')} />}
        closable={false}
        footer={null}
        style={{ maxWidth: '400px' }}>
        <Login hideModal={this.props.hideModal} showModal={this.props.showModal} />
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

LoginModal.defaultProps = {
  isShow: false,
  options: {},
  showModal: Function.prototype,
  hideModal: Function.prototype,
};
