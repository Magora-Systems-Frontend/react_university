import React, { Component } from 'react';
import { Wrapper } from 'components/Wrapper';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import lang from './lang.json';
import './style.scss';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

@connect(mapStateToProps)
export default class HeaderInvite extends Component {
  static propTypes = {
    languageState: PropTypes.object,
  };

  static defaultProps = {
    languageState: {},
  };

  render() {
    const { languageState = {} } = this.props;
    const { language } = languageState; //variable pointing to current language
    const { text, linkText, buttonText } = lang[language]; //variables responsible for textual data, changeable depending on the selected language

    return (
      <div className="invite-to-courses_wrapper">
        <Dropdown dropdownType="emptyCart" text={text} linkText={linkText} width="330px" bubblePosition="left">
          <Wrapper margin="0 2px" padding="9px 0">
            <Button colorStyle="transparent" cssModify={{ fontWeight: 'normal' }}>
              {buttonText}
            </Button>
          </Wrapper>
        </Dropdown>
      </div>
    );
  }
}
