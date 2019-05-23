import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import { ROUTES } from 'config/constants';
import { Wrapper } from 'components/Wrapper';
import Dropdown from 'components/Dropdown';
import MobileLeftMenu from 'components/MobileLeftMenu';
import HeaderControls from './controls/HeaderControls';
import HeaderSearch from './search/HeaderSearch';
import HeaderInvite from './invite/HeaderInvite';
import HeaderCart from './cart/HeaderCart';
import HeaderCatalog from './catalog/HeaderCatalog';
import lang from './lang.json';
import './header.scss';
import logo from '/assets/images/logo.svg';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileSearch: false,
      showMobileNav: false,
    };
  }

  toggleMobileSearch = () => {
    this.setState({
      showMobileSearch: !this.state.showMobileSearch,
    });
  };

  toggleMobileNav = () => {
    const { showMobileNav } = this.state;
    this.setState({
      showMobileNav: !showMobileNav,
    });
  };

  renderControls = () => {
    return <HeaderControls />;
  };

  render() {
    const {
      EN: {
        cart: { text, linkText },
      },
    } = lang;
    const { showMobileSearch, showMobileNav } = this.state;
    return (
      <Fragment>
        <header className="header">
          <div className="full-width header__container">
            <div className="header__logo_container">
              <Link to={ROUTES.HOME_PAGE}>
                <div className="header__logo">
                  <img width="110px" src={logo} alt="logo" />
                </div>
              </Link>
            </div>
            <div className="header__left-side">
              <HeaderCatalog />
              <HeaderSearch maxWidth="800px" />
              <HeaderInvite />
            </div>
            <div className="header__right-side">
              <Dropdown dropdownType="emptyCart" bubblePosition="left" text={text} linkText={linkText} width="270px">
                <Wrapper margin="0 2px" padding="10px 0">
                  <HeaderCart />
                </Wrapper>
              </Dropdown>
              <div className="header__right-side-divider" />
              {this.renderControls()}
            </div>
          </div>
        </header>
        <header className="header-mobile">
          <div className="header-mobile__content">
            <div className="header-mobile__content-left">
              <div className="header-mobile__content-search" onClick={this.toggleMobileNav}>
                <Wrapper padding="12px">
                  <Icon type="menu" style={{ fontSize: '22px' }} />
                </Wrapper>
              </div>
              <div className="header-mobile__content-search" onClick={this.toggleMobileSearch}>
                <Wrapper padding="12px">
                  <Icon type="search" style={{ fontSize: '22px' }} />
                </Wrapper>
              </div>
            </div>
            <div className="header-mobile__content-logo">
              <Link to={ROUTES.HOME_PAGE}>
                <div className="header__logo">
                  <img width="110px" src={logo} alt="logo" />
                </div>
              </Link>
            </div>
            <Dropdown
              dropdownType="emptyCart"
              text={text}
              linkText={linkText}
              bubblePosition="left"
              isMobile
              width="270px">
              <HeaderCart />
            </Dropdown>
          </div>
          {showMobileSearch && (
            <div className="header-mobile__search">
              <HeaderSearch maxWidth="100%" />
            </div>
          )}
        </header>
        <MobileLeftMenu show={showMobileNav} toggleMenu={this.toggleMobileNav} />
      </Fragment>
    );
  }
}
