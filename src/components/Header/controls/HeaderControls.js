import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { withCommonModals } from 'components';

import './header-controls.sass';

@withCommonModals
class HeaderControls extends React.PureComponent {
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

HeaderControls.propTypes = {
  showModal: PropTypes.func,
};

export default HeaderControls;
