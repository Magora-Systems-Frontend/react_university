import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { Input, Form } from 'antd';
import './style.scss';

export class TextField extends React.PureComponent {
  static propTypes = {
    ...fieldPropTypes,
  };

  render() {
    const { label, meta, input, type, cssmodify } = this.props;

    let inputElement;
    switch (type) {
      case 'search':
        inputElement = (props) => (
          <input placeholder={props.placeholder} className="header-search-form__control header-search-form__input" />
        );
        break;
      case 'text':
        inputElement = Input;
        break;
      default:
        inputElement = Input;
    }

    const validateStatus = meta.error && meta.touched ? 'error' : '';
    const help = meta.error && meta.touched ? meta.error : '';

    return (
      <Form.Item label={label} validateStatus={validateStatus} help={help} style={cssmodify}>
        {React.createElement(inputElement, { ...this.props, ...input })}
      </Form.Item>
    );
  }
}
