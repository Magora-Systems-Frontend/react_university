import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

import './item.scss';

export class ItemCategory extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: {},
  };

  render() {
    const { data = {} } = this.props;

    return (
      <div className="item-category">
        <div className="item-category__wrapper">
          <Icon className="item-category__icon" type={data.icon} />
          <div className="item-category__title">{data.title}</div>
        </div>
      </div>
    );
  }
}
