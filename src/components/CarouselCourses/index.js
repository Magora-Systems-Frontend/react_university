import React from 'react';

import './carousel.scss';
import PropTypes from 'prop-types';
import { ItemCourse } from '../ItemCourse';
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
    const { posts = [] } = dataCourses;
    console.log(posts);

    return (
      <div className="carousel-curses">
        {/*{*/}
        {/*posts.map((data, index) => (*/}
        {/*<ItemCourse data={data} key={index}/>*/}
        {/*))*/}
        {/*}*/}
        <Carousel data={posts} />
      </div>
    );
  }
}
