import React, { Component } from 'react';
import lang from './lang.json';
import { Button, Tooltip } from 'antd';

export default class HeaderInvite extends Component {
  render() {
    const {
      EN: { tooltipTitle, buttonText },
    } = lang;
    return (
      <Tooltip title={tooltipTitle} placement="bottomRight">
        <Button>{buttonText}</Button>
      </Tooltip>
    );
  }
}
