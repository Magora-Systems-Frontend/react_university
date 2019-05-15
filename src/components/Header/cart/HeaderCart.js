import React, { Component } from 'react';
import lang from './lang.json';
import { Icon, Tooltip } from 'antd';

export default class HeaderCart extends Component {
  render() {
    const {
      EN: { tooltipTitle },
    } = lang;
    return (
      <Tooltip title={tooltipTitle} placement="bottomRight">
        <Icon type="shopping-cart" />
      </Tooltip>
    );
  }
}
