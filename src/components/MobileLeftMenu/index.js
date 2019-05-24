import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from 'components/Button';
import lang from './lang.json';
import './style.scss';
import { connect } from 'react-redux';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

@connect(mapStateToProps)
export default class MobileLeftMenu extends Component {
  static propTypes = {
    show: PropTypes.bool,
    toggleMenu: PropTypes.func,
    languageState: PropTypes.object,
  };

  static defaultProps = {
    languageState: {},
  };

  render() {
    const { languageState = {}, show, toggleMenu } = this.props;
    const { language } = languageState;
    const { menuTitle, loginTitle, menu } = lang[language];
    const list = menu.map((item) => (
      <li key={item.id}>
        <a className="mobile-nav__menu-item" href="javascript:void(0)">
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
