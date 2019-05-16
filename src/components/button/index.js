import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

export class Button extends React.PureComponent {
  static propTypes = {
    title: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    onClick: Function.prototype,
    type: 'submit',
    className: '',
  };

  render() {
    const { title, onClick, type, className } = this.props;

    return (
      <button onClick={onClick} className={`custom-btn ${className}`} type={type}>
        {title}
      </button>
    );
  }
}
