import React, { Component } from 'react';
import './find-course.scss';
import '../sections.scss';
import SectionSearch from './SearchForm';
import lang from './lang.json';

export class FindCourse extends Component {
  render() {
    const {
      EN: { title, description },
    } = lang;
    return (
      <section className="find-course">
        <div className="content_container">
          <div className="find-course__content">
            <h1 className="find-course__title">{title}</h1>
            <div className="find-course__description">{description}</div>
            <SectionSearch />
          </div>
        </div>
      </section>
    );
  }
}
