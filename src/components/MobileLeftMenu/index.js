import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames';
import Button from 'components/Button';
import lang from './lang.json';
import './style.scss';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

@connect(mapStateToProps)
export default class MobileLeftMenu extends Component {
  static propTypes = {
    show: PropTypes.bool, //variable showing the status of the menu
    toggleMenu: PropTypes.func, //variable to hide / show the menu on mobile screens
    languageState: PropTypes.object,
  };

  static defaultProps = {
    show: false,
    toggleMenu: Function.prototype,
    languageState: {},
  };

  render() {
    const { languageState = {}, show, toggleMenu } = this.props;
    const { language } = languageState; //variable pointing to current language
    const { menuTitle, loginTitle, menu } = lang[language]; //variables responsible for textual data, changeable depending on the selected language

    const list = menu.map((item) => (
      <li key={item.id}>
        <a className="mobile-nav__menu-item" href={null}>
          {item.title}
        </a>
      </li>
    ));

    return (
      <div className="mobile-menu_wrapper">
        <div className={cn('mobile-menu__overlay', { 'mobile-menu__overlay_show': show })} onClick={toggleMenu} />
        <nav className={cn('mobile-nav', { 'mobile-nav_open': show })}>
          <Button colorStyle="mobileLogin">{loginTitle}</Button>
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
