import React, { Component } from 'react';
import './style.scss';
import '../sections.scss';
import booking from '/assets/images/partners/booking-logo.png';
import volkswagen from '/assets/images/partners/volkswagen-logo.png';
import mercedes from '/assets/images/partners/mercedes-logo.png';
import pinterest from '/assets/images/partners/pinterest-logo.png';
import adidas from '/assets/images/partners/adidas-logo.png';
import eventbrite from '/assets/images/partners/eventbrite-logo.png';

export class Partners extends Component {
  render() {
    const partners = [
      {
        id: 1,
        link: booking,
        width: 151,
        height: 26,
      },
      {
        id: 2,
        link: volkswagen,
        width: 32,
        height: 32,
      },
      {
        id: 3,
        link: mercedes,
        width: 118,
        height: 28,
      },
      {
        id: 4,
        link: pinterest,
        width: 115,
        height: 28,
      },
      {
        id: 5,
        link: adidas,
        width: 47,
        height: 32,
      },
      {
        id: 6,
        link: eventbrite,
        width: 115,
        height: 19,
      },
    ];
    const list = partners.map((item) => (
      <div className="partners__logo-item" key={item.id}>
        <img src={item.link} width={item.width} height={item.height} alt="" />
      </div>
    ));
    return (
      <section className="partners_main-page-wrapper">
        <div className="partners_main-page">
          <div className="partners__text">Trusted by companies of all sizes</div>
          <a href={null}>
            <div className="partners__logos">{list}</div>
          </a>
        </div>
      </section>
    );
  }
}
