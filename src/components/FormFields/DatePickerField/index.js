import React from 'react';
// import PropTypes from 'prop-types';
import { fieldPropTypes } from 'redux-form';
// import { InputMask } from 'react-text-mask';
// import { DateTime } from 'react-datetime';
import { DatePicker, Form } from 'antd';

export class DatePickerField extends React.Component {
  static propTypes = {
    ...fieldPropTypes,
  };

  render() {
    const { label, meta, /*input,*/ change } = this.props;

    const inputElement = DatePicker;
    const validateStatus = meta.error && meta.touched ? 'error' : '';
    const help = meta.error && meta.touched ? meta.error : '';

    return (
      <Form.Item label={label} validateStatus={validateStatus} help={help}>
        {React.createElement(inputElement, { ...this.props, onChange: change })}
      </Form.Item>
    );
  }
}
