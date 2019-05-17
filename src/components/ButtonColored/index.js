import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './style.scss';

export default class ButtonColored extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func,
  };

  render() {
    const { children, onClick, colorStyle, cssModify } = this.props;
    const addClass = {
      bordered: 'btn_transparent',
      colored: 'btn_colored',
      transparent: 'btn_transparent',
    };
    return (
      <button className={cn('btn-action', addClass[colorStyle])} onClick={() => onClick()} style={cssModify}>
        {children}
      </button>
    );
  }
}
