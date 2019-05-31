import React from 'react';
import PropTypes from 'prop-types';

import './item.scss';

export class ItemComment extends React.PureComponent {
  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProps = {
    data: {},
  };

  render() {
    const { data = {} } = this.props;
    let logo; // user avatar
    if (data.icon !== '') {
      logo = <img className="item-comment__info_icon" src={data.icon} alt="" />;
    } else {
      const letter = data.title.substr(0, 1);
      logo = <div className="item-comment__info_noIcon">{letter}</div>;
    }

    return (
      <div className="item-comment">
        <div className="item-comment__info">
          {logo}
          <div className="item-comment__info_name">{data.title}</div>
        </div>
        <div className="item-comment__description">{data.description}</div>
      </div>
    );
  }
}
