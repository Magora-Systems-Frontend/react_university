import React from 'react';
import { GLYPH, Icon } from 'components/Icon';
import { connect } from 'react-redux';
import Propglyphs from 'prop-types';
import lang from './lang.json';
import './recommendations.scss';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

@connect(mapStateToProps)
export class Recommendations extends React.PureComponent {
  static propglyphs = {
    languageState: Propglyphs.object,
  };

  static defaultProps = {
    languageState: {},
  };

  render() {
    const { languageState = {} } = this.props;
    const { language } = languageState; //variable pointing to current language
    const { title, desc, btn } = lang[language]; //variables responsible for textual data, changeable depending on the selected language

    return (
      <div className="recomendations">
        <div className="recomendations__top-border" />
        <div className="recomendations__banner">
          <div className="recomendations__banner_icons">
            <Icon glyph={GLYPH.profile} fill="#ffffff" width={30} height={30} />
            <Icon glyph={GLYPH.deployment} fill="#ffffff" width={30} height={30} />
            <Icon glyph={GLYPH.environment} fill="#ffffff" width={30} height={30} />
            <Icon glyph={GLYPH.contacts} fill="#ffffff" width={30} height={30} />
            <Icon glyph={GLYPH.gateway} fill="#ffffff" width={30} height={30} />
          </div>
          <div className="recomendations__banner_text">
            <Icon glyph={GLYPH.barChart} fill="#ffffff" width={30} height={30} />
            <div className="recomendations__banner_text-center">
              <div className="title">{title}</div>
              <div className="subtitle">{desc}</div>
              <button className="button">{btn}</button>
            </div>
            <Icon glyph={GLYPH.form} fill="#ffffff" width={30} height={30} />
          </div>
          <div className="recomendations__banner_icons">
            <Icon glyph={GLYPH.paperClip} fill="#ffffff" width={30} height={30} />
            <Icon glyph={GLYPH.wifi} fill="#ffffff" width={30} height={30} />
            <Icon glyph={GLYPH.user} fill="#ffffff" width={30} height={30} />
            <Icon glyph={GLYPH.shake} fill="#ffffff" width={30} height={30} />
            <Icon glyph={GLYPH.search} fill="#ffffff" width={30} height={30} />
          </div>
        </div>
      </div>
    );
  }
}
