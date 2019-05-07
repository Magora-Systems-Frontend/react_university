import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { withCommonModals } from 'components';
import './header-controls.scss';

@withCommonModals
export default class HeaderControls extends React.PureComponent {
  static propTypes = {
    showModal: PropTypes.func,
  };

  static defaultProps = {
    showModal: Function.prototype,
  };

  showLoginModal = () => {
    this.props.showModal('login');
  };

  showSignUpModal = () => {
    this.props.showModal('sign-up');
  };

  render() {
    return (
      <div className="header-controls">
        <Button type="primary" onClick={this.showLoginModal}>
          Log in
        </Button>
        <Button type="primary" onClick={this.showSignUpModal}>
          Sign up
        </Button>
      </div>
    );
  }
}
