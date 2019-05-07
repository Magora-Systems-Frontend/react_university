import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { fieldPropTypes } from 'redux-form';
import { FileFieldSimple } from 'components';

export class FileField extends React.PureComponent {
  static propTypes = {
    ...fieldPropTypes,
    formItemProps: PropTypes.object,
    inputProps: PropTypes.object,
  };

  onChange = (values) => {
    const { input } = this.props;
    input.onChange(values);
  };

  render() {
    const { label, meta, formItemProps, inputProps } = this.props;

    const validateStatus = meta.error && meta.touched ? 'error' : '';
    const help = meta.error && meta.touched ? meta.error : '';

    return (
      <Form.Item label={label} {...formItemProps} validateStatus={validateStatus} help={help}>
        <FileFieldSimple {...inputProps} onChange={this.onChange} />
      </Form.Item>
    );
  }
}
