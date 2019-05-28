import React, { Component } from 'react';
import { GLYPH, Icon } from 'components/Icon';
import './style.scss';

export default class HeaderCart extends Component {
  render() {
    return (
      <div className="shopping-list">
        <div className="shopping-list__icon">
          <Icon width={20} height={20} glyph={GLYPH.shoppingCart} />
        </div>
      </div>
    );
  }
}
