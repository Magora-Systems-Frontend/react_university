import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './style.scss';

export default class ButtonColored extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func,
    type: PropTypes.string,
  };

  render() {
    const { children, onClick, colorStyle, cssModify, type } = this.props;
    const addClass = {
      bordered: 'btn_bordered',
      colored: 'btn_colored',
      transparent: 'btn_transparent',
      search: 'btn_search',
    };
    return (
      <button
        className={cn('btn-action', addClass[colorStyle])}
        onClick={onClick ? onClick : () => {}}
        style={cssModify}
        type={type}>
        {children}
      </button>
    );
  }
}
