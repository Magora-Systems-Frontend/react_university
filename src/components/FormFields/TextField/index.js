import React from 'react';
import { fieldPropTypes } from 'redux-form';
import './style.scss';

export class TextField extends React.PureComponent {
  static propTypes = {
    ...fieldPropTypes,
  };

  render() {
    const { type, meta, ...tailProps } = this.props;

    let inputElement;
    switch (type) {
      case 'search':
        inputElement = (props) => (
          <input placeholder={props.placeholder} className="header-search-form__control header-search-form__input" />
        );
        break;
      case 'text':
        inputElement = <input />;
        break;
      default:
        inputElement = <input />;
    }

    const validateStatus = meta.error && meta.touched ? 'error' : '';
    const help = meta.error && meta.touched ? meta.error : '';

    return React.createElement(inputElement, { ...this.props, ...tailProps, validateStatus, help });
  }
}
