import React, { Component } from 'react';
import Dropdown from 'components/Dropdown';
import { Wrapper } from 'components/Wrapper';
import './catalog.scss';
import { Icon, GLYPH } from 'components';
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
    const { language } = languageState; //variable pointing to current language
    const { catalogTitle } = lang[language]; //variables responsible for textual data, changeable depending on the selected language

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
                title: 'Kotlin',
              },
              {
                title: 'Xamarin',
              },
              {
                title: 'XCode',
              },
            ],
          },
        ],
      },
      {
        title: 'Business',
        icon: 'https://img.icons8.com/ios/50/000000/statistics.png',
        subitems: [
          {
            title: 'All Business',
          },
          {
            title: 'Finance',
            subitems: [
              {
                title: 'Popular topics',
              },
              {
                title: 'Finance analise',
              },
              {
                title: 'Statistics',
              },
            ],
          },
          {
            title: 'Networking',
            subitems: [
              {
                title: 'Popular topics',
              },
              {
                title: 'Prepare text',
              },
              {
                title: 'Public speak',
              },
            ],
          },
        ],
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
            <Icon width={15} height={13} glyph={GLYPH.catalog} />
            {catalogTitle}
          </div>
        </Wrapper>
      </Dropdown>
    );
  }
}
