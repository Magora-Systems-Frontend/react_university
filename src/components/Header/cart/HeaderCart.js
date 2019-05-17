import React, { Component } from 'react';
import { Icon } from 'antd';
import './style.scss';
import { Wrapper } from 'components/Wrapper';
import Dropdown from 'components/Dropdown';
import lang from './lang.json';

export default class HeaderCart extends Component {
  render() {
    const {
      RU: { text, linkText },
    } = lang;
    return (
      <Dropdown dropdownType="emptyCart" text={text} linkText={linkText} width="270px">
        <Wrapper margin="0 2px" padding="10px 0">
          <div className="shopping-list">
            <div className="shopping-list__icon">
              <Icon style={{ fontSize: '20px' }} type="shopping-cart" />
            </div>
          </div>
        </Wrapper>
      </Dropdown>
    );
  }
}
