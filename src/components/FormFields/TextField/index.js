import React from 'react';
import { fieldPropTypes } from 'redux-form';
import PropTypes from 'prop-types';
import './style.scss';

export class TextField extends React.PureComponent {
  static propTypes = {
    ...fieldPropTypes,
    type: PropTypes.string,
    meta: PropTypes.object,
  };

  static defaultProps = {
    type: '',
    meta: {},
  };

  render() {
    const { type, meta, ...tailProps } = this.props;

    let inputElement;
    switch (type) {
      case 'search':
        inputElement = (props) => (
          <input
            type="text"
            placeholder={props.placeholder}
            className="header-search-form__control header-search-form__input"
          />
        );
        break;
      case 'text':
        inputElement = <input type="text" />;
        break;
      default:
        inputElement = <input type="text" />;
    }

    const validateStatus = meta.error && meta.touched ? 'error' : '';
    const help = meta.error && meta.touched ? meta.error : '';

    return React.createElement(inputElement, { ...this.props, ...tailProps, validateStatus, help });
  }
}
