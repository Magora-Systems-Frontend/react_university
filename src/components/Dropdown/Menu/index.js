import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './style.scss';

class SubLevel extends PureComponent {
  render() {
    const { item } = this.props;
    const sublevel =
      item &&
      item.subitems &&
      item.subitems.length > 0 &&
      item.subitems.map((item) => <SubLevel item={item} key={item.title} />);
    return (
      <li className="dropdown__menu-sub-level__item">
        <a href="" className="dropdown__link">
          <span className="text">{item.title}</span>
          {item && item.subitems && <Icon type="right" />}
        </a>
        {sublevel && <ul className="dropdown__menu-sub-level">{sublevel}</ul>}
      </li>
    );
  }
}

class FirstLevel extends PureComponent {
  render() {
    const { item } = this.props;
    const sublevel =
      item &&
      item.subitems &&
      item.subitems.length > 0 &&
      item.subitems.map((item) => <SubLevel item={item} key={item.title} />);
    return (
      <li className="dropdown__menu-item">
        <a href="/" className="dropdown__link">
          <img src={item.icon} alt="" />
          <span className="text">{item.title}</span>
          {item && item.subitems && <Icon type="right" />}
        </a>
        {sublevel && <ul className="dropdown__menu-sub-level">{sublevel}</ul>}
      </li>
    );
  }
}

export default class Menu extends Component {
  static propTypes = {
    menu: PropTypes.array,
  };
  render() {
    const { menu } = this.props;
    const list = menu.map((item) => <FirstLevel item={item} key={item.title} />);
    return <ul className="dropdown__menu">{list}</ul>;
  }
}
