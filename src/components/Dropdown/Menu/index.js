import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon, GLYPH } from 'components/Icon';
import './style.scss';

class FirstLevel extends PureComponent {
  render() {
    const { item } = this.props;
    const sublevel =
      item &&
      item.subitems &&
      item.subitems.length > 0 &&
      item.subitems.map((item) => <SecondLevel item={item} key={item.title} />);
    return (
      <li className="dropdown__menu-item">
        <a href="javascript:void(0)" className="dropdown__link">
          <img src={item.icon} alt="" />
          <span className="text">{item.title}</span>
          {item && item.subitems && <Icon glyph={GLYPH.arrowRight} width={10} />}
        </a>
        {sublevel && <ul className="dropdown__menu-second-level">{sublevel}</ul>}
      </li>
    );
  }
}

class SecondLevel extends PureComponent {
  render() {
    const { item } = this.props;
    const sublevel =
      item &&
      item.subitems &&
      item.subitems.length > 0 &&
      item.subitems.map((item) => <ThirdLevel item={item} key={item.title} />);
    return (
      <li className="dropdown__menu-second-level-item">
        <a href="javascript:void(0)" className="dropdown__link">
          <span className="text">{item.title}</span>
          {item && item.subitems && <Icon glyph={GLYPH.arrowRight} width={10} />}
        </a>
        {sublevel && <ul className="dropdown__menu-third-level">{sublevel}</ul>}
      </li>
    );
  }
}

class ThirdLevel extends Component {
  render() {
    const { item } = this.props;
    return (
      <li className="dropdown__menu-third-level-item">
        <a href="javascript:void(0)" className="dropdown__link">
          <span className="text">{item.title}</span>
        </a>
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
