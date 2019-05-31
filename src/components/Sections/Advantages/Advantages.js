import React, { Component } from 'react';
import lang from './lang.json';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GLYPH, Icon } from 'components/Icon';

import './advantages.scss';
import '../sections.scss';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

@connect(mapStateToProps)
export class Advantages extends Component {
  static propTypes = {
    languageState: PropTypes.object,
  };

  static defaultProps = {
    languageState: {},
  };
  render() {
    const { languageState = {} } = this.props;
    const { language } = languageState; //language variable
    const { advantages } = lang[language];

    const advantagesList = advantages.map((item) => (
      <div className="advantages-section__item" key={item.title}>
        <div className="advantages-section__item-icon">
          <Icon glyph={GLYPH[item.iconType]} fill="#ffffff" width={42} height={42} />
        </div>
        <div className="advantages-section__item-text">
          <div className="advantages-section__item-title">{item.title}</div>
          <div className="advantages-section__item-description">{item.description}</div>
        </div>
      </div>
    ));

    return (
      <section className="advantages-section_wrapper">
        <div className="advantages-section content_container">{advantagesList}</div>
      </section>
    );
  }
}
