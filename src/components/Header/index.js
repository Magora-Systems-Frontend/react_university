import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'config/constants';
import HeaderControls from './controls/HeaderControls'

import './header.sass';

class Header extends React.PureComponent {

  render() {
    return (
      <header className="header">
        <div className="full-width header__container">

          <Link to={ROUTES.HOME_PAGE} className="header__left-side">
            <div className="header__logo">
              <img className="header__logo-img" src="./icons/logo.svg" alt="logo"/>
              <span className="header__logo-text">
                React template app
              </span>
            </div>
          </Link>

          <div className="header__right-side">
            <HeaderControls />
          </div>

        </div>
      </header>
    );
  }
}

export default Header;
