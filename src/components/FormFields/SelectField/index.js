import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { Form, Select } from 'antd';

export class SelectField extends React.PureComponent {
  static propTypes = {
    ...fieldPropTypes,
  };

  render() {
    const { label, meta, input, options } = this.props;

    const inputElement = Select;
    const validateStatus = meta.error && meta.touched ? 'error' : '';
    const help = meta.error && meta.touched ? meta.error : '';

    return (
      <Form.Item label={label} validateStatus={validateStatus} help={help}>
        {React.createElement(
          inputElement,
          { ...this.props, ...input },
          options.map((option, index) => (
            <Select.Option key={index} value={option}>
              {option}
            </Select.Option>
          ))
        )}
      </Form.Item>
    );
  }
}
