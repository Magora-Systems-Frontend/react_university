import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ROUTES } from 'config/constants';
import { logout } from 'pages/App/actions';
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
class Header extends React.PureComponent {
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
    return (
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
            <HeaderCart />
            <div className="header__right-side-divider" />
            {this.renderControls()}
          </div>
        </div>
      </header>
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
