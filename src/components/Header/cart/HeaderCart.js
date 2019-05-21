import React, { Component } from 'react';
import { Icon } from 'antd';
import './style.scss';

export default class HeaderCart extends Component {
  render() {
    return (
      <div className="shopping-list">
        <div className="shopping-list__icon">
          <Icon style={{ fontSize: '20px' }} type="shopping-cart" />
        </div>
      </div>
    );
  }
}
