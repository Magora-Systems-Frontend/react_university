import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon, GLYPH } from 'components/Icon';
import './style.scss';

export default class Menu extends Component {
  static propTypes = {
    menu: PropTypes.array,
  };

  static defaultProps = {
    menu: [],
  };

  render() {
    const { menu } = this.props;
    const list = menu.map((item) => <FirstLevel item={item} key={item.title} />);
    return <ul className="dropdown__menu">{list}</ul>;
  }
}

class FirstLevel extends Component {
  static propTypes = {
    item: PropTypes.object,
  };

  static defaultProps = {
    item: {},
  };
  constructor() {
    super();
    this.state = {
      displaySecondLevel: false,
    };
  }

  toggleSecondLevel = () => {
    this.setState({
      displaySecondLevel: !this.state.displaySecondLevel,
    });
  };

  render() {
    const { item } = this.props;
    const { displaySecondLevel } = this.state;
    const sublevel =
      item &&
      item.subitems &&
      item.subitems.length > 0 &&
      item.subitems.map((item) => <SecondLevel item={item} key={item.title} />);
    return (
      <li className="dropdown__menu-item" onMouseEnter={this.toggleSecondLevel} onMouseLeave={this.toggleSecondLevel}>
        <a href="javascript:void(0)" className="dropdown__link">
          <img src={item.icon} alt="" />
          <span className="text">{item.title}</span>
          {item && item.subitems && <Icon glyph={GLYPH.arrowRight} width={10} />}
        </a>
        {sublevel && displaySecondLevel && <ul className="dropdown__menu-second-level">{sublevel}</ul>}
      </li>
    );
  }
}

class SecondLevel extends Component {
  static propTypes = {
    item: PropTypes.object,
  };

  static defaultProps = {
    item: {},
  };
  constructor() {
    super();
    this.state = {
      displayThirdLevel: false,
    };
  }

  toggleThirdLevel = () => {
    this.setState({
      displayThirdLevel: !this.state.displayThirdLevel,
    });
  };
  render() {
    const { item } = this.props;
    const { displayThirdLevel } = this.state;
    const sublevel =
      item &&
      item.subitems &&
      item.subitems.length > 0 &&
      item.subitems.map((item) => <ThirdLevel item={item} key={item.title} />);
    return (
      <li
        className="dropdown__menu-second-level-item"
        onMouseEnter={this.toggleThirdLevel}
        onMouseLeave={this.toggleThirdLevel}>
        <a href="javascript:void(0)" className="dropdown__link">
          <span className="text">{item.title}</span>
          {item && item.subitems && <Icon glyph={GLYPH.arrowRight} width={10} />}
        </a>
        {sublevel && displayThirdLevel && <ul className="dropdown__menu-third-level">{sublevel}</ul>}
      </li>
    );
  }
}

class ThirdLevel extends Component {
  static propTypes = {
    item: PropTypes.object,
  };

  static defaultProps = {
    item: {},
  };

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
