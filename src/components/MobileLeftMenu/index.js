import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ButtonColored from 'components/ButtonColored';
import lang from './lang.json';
import './style.scss';

export default class MobileLeftMenu extends Component {
  static propTypes = {
    show: PropTypes.bool,
    toggleMenu: PropTypes.func,
  };
  render() {
    const { show, toggleMenu } = this.props;
    const {
      RU: { menuTitle, loginTitle, menu },
    } = lang;
    const list = menu.map((item) => (
      <li>
        <a className="mobile-nav__menu-item" href={item.link}>
          {item.title}
        </a>
      </li>
    ));
    return (
      <div className="mobile-menu_wrapper">
        <div className={cn('mobile-menu__overlay', { 'mobile-menu__overlay_show': show })} onClick={toggleMenu} />
        <nav className={cn('mobile-nav', { 'mobile-nav_open': show })}>
          <ButtonColored colorStyle="mobileLogin">{loginTitle}</ButtonColored>
          <hr className="mobile-nav__divider" />
          <div className="mobile-nav__menu">
            <div className="mobile-nav__menu-title">{menuTitle}</div>
            <ul className="mobile-nav__menu-list">{list}</ul>
          </div>
        </nav>
      </div>
    );
  }
}
