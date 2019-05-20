import React, { Component } from 'react';
import lang from './lang.json';
import { Wrapper } from 'components/Wrapper';
import ButtonColored from 'components/ButtonColored';
import Dropdown from 'components/Dropdown';
import './style.scss';

export default class HeaderInvite extends Component {
  render() {
    const {
      RU: { text, linkText, buttonText },
    } = lang;
    return (
      <div className="invite-to-courses_wrapper">
        <Dropdown dropdownType="emptyCart" text={text} linkText={linkText} width="330px">
          <Wrapper margin="0 2px" padding="9px 0">
            <ButtonColored colorStyle="transparent" cssModify={{ fontWeight: 'normal' }}>
              {buttonText}
            </ButtonColored>
          </Wrapper>
        </Dropdown>
      </div>
    );
  }
}
