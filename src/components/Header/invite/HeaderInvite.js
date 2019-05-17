import React, { Component } from 'react';
import lang from './lang.json';
import { Wrapper } from 'components/Wrapper';
import ButtonColored from 'components/ButtonColored';
import Dropdown from 'components/Dropdown';

export default class HeaderInvite extends Component {
  render() {
    const {
      RU: { text, linkText, buttonText },
    } = lang;
    return (
      <Dropdown dropdownType="emptyCart" text={text} linkText={linkText} width="330px">
        <Wrapper margin="0 2px" padding="10px 0">
          <ButtonColored colorStyle="transparent" cssModify={{ fontWeight: 'normal' }}>
            {buttonText}
          </ButtonColored>
        </Wrapper>
      </Dropdown>
    );
  }
}
