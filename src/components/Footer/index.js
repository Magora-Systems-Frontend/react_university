import React, { Component, Fragment } from 'react';
import { SimpleSelect } from 'components/Fields';
import './style.scss';
import '../Sections/sections.scss';
import lang from './lang.json';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLanguage } from '../../pages/HomePage/actions';
import PropTypes from 'prop-types';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

const mapDispatchToProps = (dispatch) => ({
  getLanguage: bindActionCreators(getLanguage, dispatch),
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export class Footer extends Component {
  static propTypes = {
    languageState: PropTypes.object,
    getLanguage: PropTypes.func,
  };

  static defaultProps = {
    languageState: {},
    getLanguage: Function.prototype,
  };

  changeLanguage = (event) => {
    this.props.getLanguage(event.value);
  };

  render() {
    const { languageState = {} } = this.props;
    const { language } = languageState;
    const { links, languages, laws } = lang[language];

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
        value: 'EN',
      },
      {
        label: 'Русский',
        value: 'RU',
      },
    ];
    return (
      <Fragment>
        <footer className="footer_main content_container">
          <div className="row">
            <div className="hidden-xs col-sm-9">
              <ul className="links">{list}</ul>
            </div>
            <div className="col-sm-3 language-select_wrapper">
              <SimpleSelect
                onChange={this.changeLanguage}
                options={options}
                placeholder="Choose language"
                defaultValue={{
                  label: 'English',
                  value: 'EN',
                }}
              />
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
        </footer>
        <hr className="language-divider" />
        <footer className="footer_bottom content_container">
          <div className="row footer__copyright content_container">
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
        <hr className="footer-divider" />
      </Fragment>
    );
  }
}
