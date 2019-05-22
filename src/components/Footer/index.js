import React, { Component } from 'react';
import { SimpleSelect } from 'components/Fields';
import './style.scss';
import lang from './lang.json';
import logo from './logo.svg';

export class Footer extends Component {
  render() {
    const {
      EN: { links, languages, laws },
    } = lang;
    const list = links.map((item) => (
      <li key={item.id} className="links__item">
        <a href="javascript:void(0)">{item.title}</a>
      </li>
    ));
    const languagesList = languages.map((item) => (
      <li key={item}>
        <a href="javascript:void(0)">{item}</a>
      </li>
    ));
    const listLaws = laws.map((item) => (
      <li key={item.id}>
        <a href="javascript:void(0)">{item.title}</a>
      </li>
    ));
    const options = [
      {
        label: 'English',
        value: 'en',
      },
      {
        label: 'Русский',
        value: 'ru',
      },
    ];
    return (
      <footer className="container-fluid footer_main">
        <div className="row">
          <div className="hidden-xs col-sm-9">
            <ul className="links">{list}</ul>
          </div>
          <div className="col-sm-3">
            <SimpleSelect options={options} placeholder="Choose language" />
          </div>
        </div>
        <div className="row footer__languages">
          <div className="col-12">
            <ul className="footer__language-list">
              <li>
                <b>Local Home Pages</b>
              </li>
              {languagesList}
            </ul>
          </div>
        </div>
        <div className="row footer__copyright">
          <div className="col-sm-6 footer__copyright-left">
            <div className="footer__copyright-logo">
              <img src={logo} alt="" />
            </div>
            <div className="footer__copyright-text">Copyright © 2019 Udemy, Inc.</div>
          </div>
          <div className="col-sm-6 footer__copyright-right">
            <ul className="footer__copyright-laws">{listLaws}</ul>
          </div>
        </div>
      </footer>
    );
  }
}
