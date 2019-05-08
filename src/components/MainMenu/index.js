import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
//
import { ROUTES } from '../../config/constants';
import lang from './lang.json';

class MainMenu extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { style = {} } = this.props;
    const {
      EN: {
        menuItems: { notes, adminPanel, registration, passwordSet },
      },
    } = lang;
    return (
      <Menu style={style} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="table">
          <Link to={ROUTES.HOME_PAGE}>
            <Icon type="table" />
            {notes}
          </Link>
        </Menu.Item>
        <Menu.Item key="tool">
          <Link to={ROUTES.ADMIN_PANEL}>
            <Icon type="tool" />
            {adminPanel}
          </Link>
        </Menu.Item>
        <Menu.Item key="form">
          <Link to={ROUTES.REGISTRATION_FORM}>
            <Icon type="form" />
            {registration}
          </Link>
        </Menu.Item>
        <Menu.Item key="password-set">
          <Link to={ROUTES.PASSWORD_SET_FORM}>
            <Icon type="lock" />
            {passwordSet}
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MainMenu;
