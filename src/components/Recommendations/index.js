import React from 'react';

import './recommendations.scss';
import { Icon } from 'antd';

export class Recommendations extends React.PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
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
          <div className="recomendations__banner_icons">
            <Icon type="bar-chart" />
            <div className="recomendations__banner_text-center">
              <div className="title">Get personalized recommendations</div>
              <div className="subtitle">Answer a few questions for your top picks</div>
              <button className="button">Get started</button>
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
