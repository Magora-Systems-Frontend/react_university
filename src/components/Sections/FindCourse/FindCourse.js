import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './find-course.scss';
import SectionSearch from './SearchForm';
import lang from './lang.json';

export class FindCourse extends Component {
  render() {
    const {
      RU: { title, description },
    } = lang;
    return (
      <section className="find-course">
        <div className="find-course__content">
          <h1 className="find-course__title">{title}</h1>
          <div className="find-course__description">{description}</div>
          <SectionSearch />
        </div>
      </section>
    );
  }
}
