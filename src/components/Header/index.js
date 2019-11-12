import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ROUTES } from 'config/constants';
import { Wrapper } from 'components/Wrapper';
import Dropdown from 'components/Dropdown';
import MobileLeftMenu from 'components/MobileLeftMenu';
import { GLYPH, Icon } from 'components/Icon';
import HeaderControls from './controls/HeaderControls';
import HeaderSearch from './search/HeaderSearch';
import HeaderCart from './cart/HeaderCart';
import HeaderCatalog from './catalog/HeaderCatalog';
import lang from './lang.json';
import './header.scss';

import logo from '/assets/images/react-logo.png';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

export class Header extends Component {
  static propTypes = {
    languageState: PropTypes.object.isRequired,
  };

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
    const { languageState = {} } = this.props;
    const { language } = languageState;
    const {
      cart: { text, linkText },
    } = lang[language];
    const { showMobileSearch, showMobileNav } = this.state;

    return (
      <Fragment>
        <header className="header">
          <div className="full-width header__container">
            <div className="header__logo_container">
              <Link to={ROUTES.HOME_PAGE}>
                <div className="header__logo">
                  <img src={logo} alt="" />
                </div>
              </Link>
            </div>
            <div className="header__left-side">
              <HeaderCatalog />
              <HeaderSearch maxWidth="300px" />
              {/*<HeaderInvite />*/}
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
                  <Icon width={22} glyph={GLYPH.menu} />
                </Wrapper>
              </div>
              <div className="header-mobile__content-search" onClick={this.toggleMobileSearch}>
                <Wrapper padding="12px">
                  <Icon width={22} glyph={GLYPH.search} />
                </Wrapper>
              </div>
            </div>
            <div className="header-mobile__content-logo">
              <Link to={ROUTES.HOME_PAGE}>
                <div className="header__logo">
                  <Icon width={110} glyph={GLYPH.logo} />
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

export default connect(mapStateToProps)(Header);
