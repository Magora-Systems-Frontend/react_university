import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class EmptyCart extends Component {
  static propTypes = {
    text: PropTypes.string,
    linkText: PropTypes.string,
  };
  render() {
    const { text, linkText } = this.props;
    return (
      <div className="dropdown__empty-cart">
        {text}
        <a href="#" className="dropdown__empty-cart-link">
          {linkText}
        </a>
      </div>
    );
  }
}
