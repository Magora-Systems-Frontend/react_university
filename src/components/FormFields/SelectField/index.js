import React from 'react';
import PropTypes from 'prop-types';
import { fieldPropTypes } from 'redux-form';
import { Input, Form, Select } from 'antd';
//

export class SelectField extends React.PureComponent {
  static propTypes = {
    ...fieldPropTypes,
  };

  render() {
    const {
      label,
      meta,
      input,
      options,
    } = this.props;
    console.log(this.props);

    const inputElement = Select;
    const validateStatus = meta.error && meta.touched ? 'error' : '';
    const help = meta.error && meta.touched ? meta.error : '';

    return(
      <Form.Item
        label={label}
        validateStatus={validateStatus}
        help={help}

      >
        {React.createElement(inputElement, { ...this.props, ...input, defaultValue: options[0]},
            options.map(item => React.createElement('Option', {value: item, key: item}, item))
        )}
      </Form.Item>
    );
  }
}
