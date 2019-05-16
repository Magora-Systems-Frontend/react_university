import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import './carousel.scss';
import { ItemCourse } from '../ItemCourse';
import { Icon } from 'antd';
// import '~slick-carousel/slick/slick.css';

const Arrow = (props) => {
  const { onClick, direction } = props;
  return (
    <div
      className={`carousel__arrow carousel__arrow-${direction}`}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}>
      <Icon type={direction} />
    </div>
  );
};

export class Carousel extends React.Component {
  static propTypes = {
    options: PropTypes.object,
    data: PropTypes.array,
  };

  static defaultProps = {
    options: {},
    data: [],
  };

  renderItem = (item, index) => {
    return <ItemCourse data={item} key={index} />;
  };

  render() {
    const { options = {}, data } = this.props;

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow: <Arrow direction="left" />,
      nextArrow: <Arrow direction="right" />,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    };

    return (
      <div className="carousel">
        <Slider {...settings}>{data.map((item, index) => this.renderItem(item, index))}</Slider>
      </div>
    );
  }
}
