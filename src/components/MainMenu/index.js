import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
//
import { ROUTES } from '../../config/constants';

class MainMenu extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { style = {}, route } = this.props;

    // console.info({route});

    return (
      <Menu style={style} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="table">
          <Link to={ROUTES.HOME_PAGE}>
            <Icon type="table" />
            Notes
          </Link>
        </Menu.Item>
        <Menu.Item key="tool">
          <Link to={ROUTES.ADMIN_PANEL}>
            <Icon type="tool" />
            Administration Panel
          </Link>
        </Menu.Item>
        <Menu.Item key="form">
          <Link to={ROUTES.REGISTRATION_FORM}>
            <Icon type="form" />
            Registration Form
          </Link>
        </Menu.Item>
        <Menu.Item key="password-set">
          <Link to={ROUTES.PASSWORD_SET_FORM}>
            <Icon type="lock" />Password Set
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MainMenu;
