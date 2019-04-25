import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Menu, Dropdown,
  Icon,
} from 'antd';

class HeaderUserControls extends React.PureComponent {
  static propTypes = {
    logout: PropTypes.func,
  };

  logOutClick = () => {
    this.props.logout();
  };

  renderMenu = () => (
    <Menu>
      <Menu.Item key="0" onClick={this.logOutClick}>
        <Icon type="logout" />
        Logout
      </Menu.Item>
    </Menu>
  );

  render() {
    return (
      <Dropdown overlay={this.renderMenu()} trigger={['click']} placement="bottomLeft">
        <Avatar size={35} icon="user" style={{ cursor: 'pointer' }} />
      </Dropdown>
    );
  }
}

export default HeaderUserControls;
