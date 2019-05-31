import React from 'react';

import './carousel.scss';
import PropTypes from 'prop-types';
import { Carousel } from '../Carousel';

export class CarouselCourses extends React.PureComponent {
  static propTypes = {
    dataCourses: PropTypes.object,
  };

  static defaultProps = {
    dataCourses: {},
  };

  render() {
    const { dataCourses } = this.props;
    const { posts = [], id = '' } = dataCourses;
    let options; // settings for slick slider

    if (id !== 'Popular') {
      options = {
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1240,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    } else {
      options = {
        slidesToShow: 6,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1240,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    }

    return (
      <div className="carousel-curses">
        <Carousel id={id} data={posts} options={options} typeItem="course" />
      </div>
    );
  }
}
