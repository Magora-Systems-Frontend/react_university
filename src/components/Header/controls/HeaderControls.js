import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import './header-controls.scss';
import { Wrapper } from 'components/Wrapper';
import lang from './lang.json';
import { connect } from 'react-redux';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

@connect(mapStateToProps)
export default class HeaderControls extends React.PureComponent {
  static propTypes = {
    languageState: PropTypes.object,
    showModal: PropTypes.func,
  };

  static defaultProps = {
    showModal: Function.prototype,
    languageState: {},
  };

  render() {
    const { languageState = {} } = this.props;
    const { language } = languageState;
    const { loginTitle, signTitle } = lang[language];

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
