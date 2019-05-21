import React, { Component } from 'react';
import './style.scss';
import lang from './lang.json';

export class Partners extends Component {
  render() {
    const {
      RU: { partners },
    } = lang;
    const list = partners.map((item) => (
      <div className="partners__logo-item" key={item.id}>
        <img src={item.link} width={item.width} height={item.height} alt="" />
      </div>
    ));
    return (
      <section className="partners_main-page">
        <div className="partners__text">Нам доверяют многие компании</div>
        <div className="partners__logos">{list}</div>
      </section>
    );
  }
}
