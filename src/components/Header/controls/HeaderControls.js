import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'components/Button';
import './header-controls.scss';
import { Wrapper } from 'components/Wrapper';
import lang from './lang.json';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

@connect(mapStateToProps)
export default class HeaderControls extends React.PureComponent {
  static propTypes = {
    languageState: PropTypes.object,
  };

  static defaultProps = {
    languageState: {},
  };

  render() {
    const { languageState = {} } = this.props;
    const { language } = languageState; //variable pointing to current language
    const { loginTitle, signTitle } = lang[language]; //variables responsible for textual data, changeable depending on the selected language

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
