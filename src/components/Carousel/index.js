import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Icon, GLYPH } from 'components/Icon';
import { ItemCourse } from './ItemCourse';
import { ItemComment } from './ItemComment';
import './carousel.scss';

const Arrow = (props) => {
  const { onClick, direction } = props;
  return (
    <div
      className={`carousel__arrow carousel__arrow-${direction}`}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}>
      {direction === 'left' && <Icon glyph={GLYPH.arrowLeft} width={20} />}
      {direction === 'right' && <Icon glyph={GLYPH.arrowRight} width={20} />}
    </div>
  );
};

export class Carousel extends React.Component {
  static propTypes = {
    options: PropTypes.object,
    data: PropTypes.array,
    typeItem: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    options: {},
    data: [],
    typeItem: '',
    id: '',
  };

  renderItem = (item, index) => {
    const { typeItem, id } = this.props;
    if (typeItem === 'course') {
      return <ItemCourse id={id} data={item} key={index} />;
    } else if (typeItem === 'comments') {
      return <ItemComment data={item} key={index} />;
    }
  };

  render() {
    const { options = {}, data } = this.props;

    const settings = {
      //settings for slick carousel
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow: <Arrow direction="left" />,
      nextArrow: <Arrow direction="right" />,
      ...options,
    };

    return (
      <div className="carousel">
        <Slider {...settings}>{data.map((item, index) => this.renderItem(item, index))}</Slider>
      </div>
    );
  }
}
