import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import './header-controls.scss';
import { Wrapper } from 'components/Wrapper';
import lang from './lang.json';

export default class HeaderControls extends React.PureComponent {
  static propTypes = {
    showModal: PropTypes.func,
  };

  static defaultProps = {
    showModal: Function.prototype,
  };

  render() {
    const {
      EN: { loginTitle, signTitle },
    } = lang;
    return (
      <div className="header-controls">
        <Wrapper margin="0 2px" padding="10px 0">
          <Button colorStyle="bordered">{loginTitle}</Button>
        </Wrapper>
        <Wrapper margin="0 2px" padding="10px 0">
          <Button colorStyle="colored">{signTitle}</Button>
        </Wrapper>
      </div>
    );
  }
}
