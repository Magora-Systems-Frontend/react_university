import React, { Component } from 'react';
import { Icon } from 'antd';
import Dropdown from 'components/Dropdown';
import { Wrapper } from 'components/Wrapper';
import './catalog.scss';
import lang from './lang.json';

export default class HeaderCatalog extends Component {
  render() {
    const {
      EN: { catalogTitle },
    } = lang;
    const data = [
      {
        title: 'Develop',
        icon: 'https://img.icons8.com/material/24/000000/phone.png',
        subitems: [
          {
            title: 'All development',
          },
          {
            title: 'Web Development',
            subitems: [
              {
                title: 'Popular topics',
              },
              {
                title: 'JS',
              },
              {
                title: 'React',
              },
              {
                title: 'Angular',
              },
              {
                title: 'CSS',
              },
              {
                title: 'PHP',
              },
            ],
          },
          {
            title: 'Mobile apps',
            subitems: [
              {
                title: 'Popular topics',
              },
              {
                title: 'JS',
              },
              {
                title: 'React',
              },
              {
                title: 'Angular',
              },
              {
                title: 'CSS',
              },
              {
                title: 'PHP',
              },
            ],
          },
        ],
      },
      {
        title: 'Business',
        icon: 'https://img.icons8.com/material/24/000000/phone.png',
      },
      {
        title: 'IT',
        icon: 'https://img.icons8.com/material/24/000000/phone.png',
      },
      {
        title: 'Design',
        icon: 'https://img.icons8.com/material/24/000000/phone.png',
      },
      {
        title: 'Marketing',
        icon: 'https://img.icons8.com/material/24/000000/phone.png',
      },
    ];
    return (
      <Dropdown dropdownType="menu" menu={data}>
        <Wrapper margin="0 2px" padding="9px 0">
          <div className="header-catalog">
            <Icon style={{ fontSize: '20px', marginRight: '4px' }} type="appstore" />
            {catalogTitle}
          </div>
        </Wrapper>
      </Dropdown>
    );
  }
}
