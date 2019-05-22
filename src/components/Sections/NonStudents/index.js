import React, { Component } from 'react';
import Button from 'components/Button';
import lang from './lang.json';
import './style.scss';

export class NonStudents extends Component {
  render() {
    const {
      EN: { invites },
    } = lang;
    const blocks = invites.map((item) => (
      <div className="non-student__block" key={item.id}>
        <div className="non-student__block-text">
          <div className="non-student__block-title">{item.title}</div>
          <div className="non-student__block-description">{item.description}</div>
          <div className="non-student__block-button">
            <Button colorStyle="colored">{item.btnTitle}</Button>
          </div>
        </div>
      </div>
    ));
    return <section className="non-student">{blocks}</section>;
  }
}
