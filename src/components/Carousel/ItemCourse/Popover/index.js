import React from 'react';
import './popover.scss';
import PropTypes from 'prop-types';
import { GLYPH, Icon } from 'components/Icon';

export class Popover extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
    objective: PropTypes.array,
    titles: PropTypes.object,
    id: PropTypes.string,
  };

  static defaultProps = {
    data: {},
    objective: [],
    titles: {},
    id: '',
  };

  render() {
    const { data, objective, titles, id } = this.props;

    return (
      <div className="item__popover">
        <div className="item__popover_update">
          {titles.updated} {data.update}
        </div>
        <div className="item__popover_title">{data.title}</div>
        <div className="item__popover_category">
          <span>{data.category}</span> | {id}
        </div>
        <div className="item__popover_info">
          <div className="item-info">
            <Icon glyph={GLYPH.playCircle} width={10} />
            <span>
              {data.lectures} {titles.lectures}
            </span>
          </div>
          <div className="item-info">
            <Icon glyph={GLYPH.clockCircle} width={10} />
            <span>
              {data.hours} {titles.hours}
            </span>
          </div>
          <div className="item-info">
            <Icon glyph={GLYPH.project} width={10} />
            <span>{data.levels}</span>
          </div>
        </div>
        <div className="item__popover_description">{data.description}</div>
        <ul className="item__popover_objective">
          {objective.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="item__popover_buttons">
          <div className="item__popover_add-card">{titles.cart}</div>
          <div className="item__popover_add-wishlist">
            <Icon glyph={GLYPH.heart} width={30} height={30} fill="#ec5252" />
          </div>
        </div>
      </div>
    );
  }
}
