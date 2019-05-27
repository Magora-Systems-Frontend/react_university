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
    bubblePosition: PropTypes.string,
    isMobile: PropTypes.bool,
  };
  render() {
    const { children, dropdownType, menu, text, linkText, width, bubblePosition, isMobile } = this.props;
    const dropdownsList = {
      menu: <Menu menu={menu} />,
      emptyCart: <EmptyCart text={text} linkText={linkText} />,
    };
    return (
      <div className="dropdown">
        {children}
        <div
          className={`dropdown__bubble ${bubblePosition === 'left' && 'dropdown__bubble_right'} ${isMobile &&
            'dropdown__bubble_mobile'}`}
          style={{ width: width }}>
          {dropdownsList[dropdownType]}
        </div>
      </div>
    );
  }
}
