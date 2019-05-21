import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon } from 'antd';
import { ROUTES } from 'config/constants';
import { logout } from 'pages/App/actions';
import { Wrapper } from 'components/Wrapper';
import Dropdown from 'components/Dropdown';
import MobileLeftMenu from 'components/MobileLeftMenu';
import HeaderControls from './controls/HeaderControls';
import HeaderUserControls from './user-controls/HeaderUserControls';
import HeaderSearch from './search/HeaderSearch';
import HeaderInvite from './invite/HeaderInvite';
import HeaderCart from './cart/HeaderCart';
import HeaderCatalog from './catalog/HeaderCatalog';
import lang from './lang.json';
import './header.scss';
import logo from './logo.svg';

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Header extends Component {
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

  static propTypes = {
    authState: PropTypes.object,
    logout: PropTypes.func,
  };

  renderControls = () => {
    const { authState = {}, logout } = this.props;
    if (authState.isAuth) {
      return <HeaderUserControls logout={logout} authState={authState} />;
    }

    return <HeaderControls />;
  };

  render() {
    const {
      RU: {
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
              <Dropdown dropdownType="emptyCart" text={text} linkText={linkText} width="270px">
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
              bubbleArrowPosition="right"
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

function mapStateToProps(store = {}) {
  const { global = {} } = store;
  const { authState = {} } = global;
  return { authState };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(logout, dispatch),
  };
}

export { Header };
