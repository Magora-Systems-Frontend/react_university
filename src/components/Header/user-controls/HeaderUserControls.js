import React from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import { Link } from 'react-router-dom';
import { Avatar, Menu, Dropdown, Icon } from 'antd';
import { ROUTES } from 'config/constants';

class HeaderUserControls extends React.PureComponent {
  static propTypes = {
    logout: PropTypes.func,
    authState: PropTypes.object,
  };

  logOutClick = () => {
    this.props.logout();
  };

  renderMenu = () => (
    <Menu>
      <Menu.Item key="0">
        <Link to={`${ROUTES.USER_PROFILE}/own-user-profile`}>
          <Icon type="user" />
          &nbsp; View profile
        </Link>
      </Menu.Item>
      <Menu.Item key="1" onClick={this.logOutClick}>
        <Icon type="logout" />
        Logout
      </Menu.Item>
    </Menu>
  );

  render() {
    const { authState = {} } = this.props;
    const avatarUrl = lodash.get(authState, 'userInfo.avatarUrl');

    return (
      <Dropdown overlay={this.renderMenu()} trigger={['click']} placement="bottomLeft">
        <Avatar src={avatarUrl} size={35} icon="user" style={{ cursor: 'pointer' }} />
      </Dropdown>
    );
  }
}

export default HeaderUserControls;
