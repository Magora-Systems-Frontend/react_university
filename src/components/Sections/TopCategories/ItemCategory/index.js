import React from 'react';
import PropTypes from 'prop-types';
import { GLYPH, Icon } from 'components/Icon';

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
          <Icon glyph={GLYPH[data.icon]} width={32} height={32} />
          <div className="item-category__title">{data.title}</div>
        </div>
      </div>
    );
  }
}
