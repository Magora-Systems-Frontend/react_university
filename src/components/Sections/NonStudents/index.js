import React, { Component } from 'react';
import ButtonColored from 'components/ButtonColored';
import lang from './lang.json';
import './style.scss';

export class NonStudents extends Component {
  render() {
    const {
      RU: { invites },
    } = lang;
    const blocks = invites.map((item) => (
      <div className="non-student__block" key={item.id}>
        <div className="non-student__block-text">
          <div className="non-student__block-title">{item.title}</div>
          <div className="non-student__block-description">{item.description}</div>
          <div className="non-student__block-button">
            <ButtonColored colorStyle="colored">{item.btnTitle}</ButtonColored>
          </div>
        </div>
      </div>
    ));
    return <section className="non-student">{blocks}</section>;
  }
}
