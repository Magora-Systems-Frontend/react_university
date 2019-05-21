import React, { Component } from 'react';
import './advantages.scss';
import { Icon } from 'antd';
import lang from './lang.json';

export class Advantages extends Component {
  render() {
    const {
      RU: { advantages },
    } = lang;
    const advantagesList = advantages.map((item) => (
      <div className="advantages-section__item" key={item.title}>
        <div className="advantages-section__item-icon">
          <Icon type={item.iconType} />
        </div>
        <div className="advantages-section__item-text">
          <div className="advantages-section__item-title">{item.title}</div>
          <div className="advantages-section__item-description">{item.description}</div>
        </div>
      </div>
    ));
    return (
      <section className="advantages-section_wrapper">
        <div className="advantages-section">{advantagesList}</div>
      </section>
    );
  }
}
