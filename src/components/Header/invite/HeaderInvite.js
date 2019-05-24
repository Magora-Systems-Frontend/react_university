import React, { Component } from 'react';
import { Wrapper } from 'components/Wrapper';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import lang from './lang.json';
import './style.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    const { language } = languageState;
    const { text, linkText, buttonText } = lang[language];

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
