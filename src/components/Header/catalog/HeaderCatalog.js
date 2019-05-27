import React, { Component } from 'react';
// import { Icon } from 'antd';
import { Icon, GLYPH } from 'components';
import Dropdown from 'components/Dropdown';
import { Wrapper } from 'components/Wrapper';
import './catalog.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import lang from './lang.json';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

@connect(mapStateToProps)
export default class HeaderCatalog extends Component {
  static propTypes = {
    languageState: PropTypes.object,
  };

  static defaultProps = {
    languageState: {},
  };

  render() {
    const { languageState = {} } = this.props;
    const { language } = languageState;
    const { catalogTitle } = lang[language];

    const data = [
      {
        title: 'Develop',
        icon: 'https://img.icons8.com/ios/50/000000/source-code-filled.png',
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
        icon: 'https://img.icons8.com/ios/50/000000/statistics.png',
      },
      {
        title: 'IT',
        icon: 'https://img.icons8.com/pastel-glyph/50/000000/monitor.png',
      },
      {
        title: 'Design',
        icon: 'https://img.icons8.com/ios/50/000000/web-design.png',
      },
      {
        title: 'Marketing',
        icon: 'https://img.icons8.com/wired/50/000000/marketing.png',
      },
    ];
    return (
      <Dropdown dropdownType="menu" menu={data}>
        <Wrapper margin="0 2px" padding="9px 0">
          <div className="header-catalog">
            {/*<Icon*/}
            {/*glyph="logo"*/}
            {/*className="test"*/}
            {/*/>*/}
            {/*<Icon style={{ fontSize: '20px', marginRight: '4px' }} type="appstore" />*/}
            {catalogTitle}
          </div>
        </Wrapper>
      </Dropdown>
    );
  }
}
