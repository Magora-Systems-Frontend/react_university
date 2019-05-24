import React, { Component } from 'react';
import './find-course.scss';
import '../sections.scss';
import SectionSearch from './SearchForm';
import lang from './lang.json';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

@connect(mapStateToProps)
export class FindCourse extends Component {
  static propTypes = {
    languageState: PropTypes.object,
  };

  static defaultProps = {
    languageState: {},
  };

  render() {
    const { languageState = {} } = this.props;
    const { language } = languageState;
    const { title, description } = lang[language];

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
