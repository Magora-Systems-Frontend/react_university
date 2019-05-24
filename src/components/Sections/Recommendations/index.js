import React from 'react';

import './recommendations.scss';
import { Icon } from 'antd';
import lang from './lang.json';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

@connect(mapStateToProps)
export class Recommendations extends React.PureComponent {
  static propTypes = {
    languageState: PropTypes.object,
  };

  static defaultProps = {
    languageState: {},
  };

  render() {
    const { languageState = {} } = this.props;
    const { language } = languageState;
    const { title, desc, btn } = lang[language];

    return (
      <div className="recomendations">
        <div className="recomendations__top-border" />
        <div className="recomendations__banner">
          <div className="recomendations__banner_icons">
            <Icon type="profile" />
            <Icon type="deployment-unit" />
            <Icon type="environment" />
            <Icon type="contacts" />
            <Icon type="gateway" />
          </div>
          <div className="recomendations__banner_text">
            <Icon type="bar-chart" />
            <div className="recomendations__banner_text-center">
              <div className="title">{title}</div>
              <div className="subtitle">{desc}</div>
              <button className="button">{btn}</button>
            </div>
            <Icon type="form" />
          </div>
          <div className="recomendations__banner_icons">
            <Icon type="paper-clip" />
            <Icon type="wifi" />
            <Icon type="user" />
            <Icon type="shake" />
            <Icon type="search" />
          </div>
        </div>
      </div>
    );
  }
}
