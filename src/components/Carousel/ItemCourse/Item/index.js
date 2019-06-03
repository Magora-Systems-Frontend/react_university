import React from 'react';
import './item.scss';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

export class Item extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: {},
  };

  render() {
    const { data } = this.props;

    return (
      <div className="item">
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
  }
}
