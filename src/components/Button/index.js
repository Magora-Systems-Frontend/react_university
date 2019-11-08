import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './style.scss';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    type: PropTypes.string,
    modificationClass: PropTypes.string,
  };

  render() {
    const { children, onClick, colorStyle, cssModify, type, modificationClass } = this.props;
    const customClass = {
      bordered: 'btn_bordered',
      colored: 'btn_colored',
      transparent: 'btn_transparent',
      search: 'btn_search',
      mobileLogin: 'btn_mobile-login',
      category: 'btn_category-toggle',
    };
    return (
      <button
        className={cn('btn-action', customClass[colorStyle], modificationClass)}
        onClick={onClick ? onClick : () => {}}
        style={cssModify}
        type={type}>
        {children}
      </button>
    );
  }
}
