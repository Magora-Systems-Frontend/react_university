import React from 'react';
import PropTypes from 'prop-types';
import { fieldPropTypes } from 'redux-form';
import { Input, Form } from 'antd';
//

export class TextField extends React.PureComponent {
  static propTypes = {
    ...fieldPropTypes,
  };

  render() {
    const {
      label,
      meta,
      input,
      type,
    } = this.props;

    const inputElement = type === 'password' ? Input.Password : Input;
    const validateStatus = meta.error && meta.touched ? 'error' : '';
    const help = meta.error && meta.touched ? meta.error : '';

    return(
      <Form.Item
        label={label}
        validateStatus={validateStatus}
        help={help}
      >
        {React.createElement(inputElement, { ...this.props, ...input })}
      </Form.Item>
    );
  }
}
