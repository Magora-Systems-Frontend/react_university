import React, { Component } from 'react';
import lang from './lang.json';
import { Icon, List } from 'antd';
import './catalog.scss';

export default class HeaderCatalog extends Component {
  render() {
    const {
      EN: { catalogTitle },
    } = lang;
    const data = ['Develop', 'Business', 'IT', 'Design', 'Marketing'];
    return (
      <div className="header-catalog-title_wrapper">
        <Icon type="table" />
        <div className="header-catalog-title__text">{catalogTitle}</div>
        <div className="header-catalog__list">
          <List bordered dataSource={data} renderItem={(item) => <List.Item>{item}</List.Item>} />
        </div>
      </div>
    );
  }
}
