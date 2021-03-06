import React, { Component } from 'react';
import Button from 'components/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import lang from './lang.json';
import './style.scss';
import '../sections.scss';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

@connect(mapStateToProps)
export class NonStudents extends Component {
  static propTypes = {
    languageState: PropTypes.object,
  };

  static defaultProps = {
    languageState: {},
  };

  render() {
    const { languageState = {} } = this.props;
    const { language } = languageState; //variable pointing to current language
    const { invites } = lang[language]; //variables responsible for textual data, changeable depending on the selected language

    const blocks = invites.map((item) => (
      <div className="non-student__block" key={item.id}>
        <div className="non-student__block-text">
          <a href={null} className="non-student__block-title">
            {item.title}
          </a>
          <div className="non-student__block-description">{item.description}</div>
          <div className="non-student__block-button">
            <Button colorStyle="colored">{item.btnTitle}</Button>
          </div>
        </div>
      </div>
    ));
    return <section className="non-student">{blocks}</section>;
  }
}
