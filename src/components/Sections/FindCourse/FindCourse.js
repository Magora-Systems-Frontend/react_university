import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './find-course.scss';
import SectionSearch from './SearchForm';

export class FindCourse extends Component {
  render() {
    return (
      <section className="find-course">
        <div className="find-course__content">
          <h1 className="find-course__title">Lorem ipsum dolor</h1>
          <div className="find-course__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, esse.
          </div>
          <SectionSearch />
        </div>
      </section>
    );
  }
}
