import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Menu from './Menu';
import EmptyCart from './EmptyCart';

export default class Dropdown extends Component {
  static propTypes = {
    dropdownType: PropTypes.string,
    menu: PropTypes.array,
    text: PropTypes.string,
    linkText: PropTypes.string,
  };
  render() {
    const { children, dropdownType, menu, text, linkText, width } = this.props;
    const dropdownsList = {
      menu: <Menu menu={menu} />,
      emptyCart: <EmptyCart text={text} linkText={linkText} />,
    };
    return (
      <div className="dropdown">
        {children}
        <div className="dropdown__bubble" style={{ width: width }}>
          {dropdownsList[dropdownType]}
        </div>
      </div>
    );
  }
}
