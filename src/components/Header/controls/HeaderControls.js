import React from 'react';
import PropTypes from 'prop-types';
import ButtonColored from 'components/ButtonColored';
import { withCommonModals } from 'components';
import './header-controls.scss';
import lang from './lang.json';
import { Wrapper } from 'components/Wrapper';

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
    const {
      EN: { loginTitle, signTitle },
    } = lang;
    return (
      <div className="header-controls">
        <Wrapper margin="0 2px" padding="10px 0">
          <ButtonColored onClick={this.showLoginModal} colorStyle="bordered">
            {loginTitle}
          </ButtonColored>
        </Wrapper>
        <Wrapper margin="0 2px" padding="10px 0">
          <ButtonColored onClick={this.showSignUpModal} colorStyle="colored">
            {signTitle}
          </ButtonColored>
        </Wrapper>
      </div>
    );
  }
}
