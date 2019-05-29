import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import { connect } from 'react-redux';
import { GLYPH, Icon } from 'components/Icon';
import lang from './lang.json';
import './item.scss';
import TooltipTrigger from 'react-popper-tooltip';
// import 'react-popper-tooltip/dist/styles.css';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

@connect(mapStateToProps)
export class ItemCourse extends React.PureComponent {
  static propTypes = {
    languageState: PropTypes.object,
    data: PropTypes.object,
    id: PropTypes.string,
  };

  static defaultProps = {
    languageState: {},
    data: {},
    id: '',
  };

  render() {
    const { data = {}, id = '', languageState = {} } = this.props;
    const { objective = [] } = data;
    const { language } = languageState;
    const { updated, lectures, hours, cart } = lang[language];

    const tooltip = ({ arrowRef, tooltipRef, getArrowProps, getTooltipProps, placement }) => (
      <div className="item__popover " {...getTooltipProps({ ref: tooltipRef })}>
        <div className="item__popover_update">
          {updated} {data.update}
        </div>
        <div className="item__popover_title">{data.title}</div>
        <div className="item__popover_category">
          <span>{data.category}</span> | {id}
        </div>
        <div className="item__popover_info">
          <div className="item-info">
            <Icon glyph={GLYPH.playCircle} width={10} />
            <span>
              {data.lectures} {lectures}
            </span>
          </div>
          <div className="item-info">
            <Icon glyph={GLYPH.clockCircle} width={10} />
            <span>
              {data.hours} {hours}
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
          <div className="item__popover_add-card">{cart}</div>
          <div className="item__popover_add-wishlist">
            <Icon glyph={GLYPH.heart} width={30} height={30} fill="#ec5252" />
          </div>
        </div>
      </div>
    );

    const item = ({ getTriggerProps, triggerRef }) => (
      <div className="item" {...getTriggerProps({ ref: triggerRef })}>
        <div className="item__wrapper">
          <div className="item__wrapper_header">
            <img src={data.img} alt="" />
          </div>
          <div className="item__wrapper_body">
            <div>
              <div className="title">{data.title}</div>
              <div className="author">{data.author}</div>
              <div className="stars">
                <StarRatings
                  rating={data.stars}
                  starRatedColor="#f4c150"
                  starDimension="15px"
                  starSpacing="0px"
                  name="rating"
                />
                <span className="stars__rating">
                  <span className="stars__rating_reviews">{data.stars}</span>
                  <span className="stars__rating_count">({data.rating})</span>
                </span>
              </div>
              <div className="price">
                <div className="price__container">
                  <div className="price__container_discount">{data.currentPrice}</div>
                  <div className="price__container_regular">{data.price}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div className="course-item">
        <TooltipTrigger placement="auto" trigger="hover" tooltip={tooltip}>
          {item}
        </TooltipTrigger>
      </div>
    );
  }
}
