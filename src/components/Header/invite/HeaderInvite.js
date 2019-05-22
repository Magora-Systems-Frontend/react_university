import React, { Component } from 'react';
import { Wrapper } from 'components/Wrapper';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import lang from './lang.json';
import './style.scss';

export default class HeaderInvite extends Component {
  render() {
    const {
      EN: { text, linkText, buttonText },
    } = lang;
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
