import React, { PureComponent } from 'react';
import { reduxForm, propTypes, Field } from 'redux-form';
import { TextField } from 'components';
import PropTypes from 'prop-types';
import { Icon, Button, Form } from 'antd';
import { validatePassword } from 'lib/validation';
import './index.sass';

import lang from '../lang.json';

const validate = (values) => {
  const errors = {};

  if (!values.newPassword) {
    errors.newPassword = lang.errors.required_field;
  } else if (!validatePassword(values.newPassword)) {
    errors.newPassword = lang.errors.invalid_new_pass;
  }

  return errors;
};

class PasswordSetFormComponent extends PureComponent {
  static propTypes = {
    ...propTypes,
    submitting: PropTypes.bool,
  };

  static defaultProps = {
    submitting: false,
  };

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit} className="password-set-form">
        <Field
          label={lang.EN.password}
          name="newPassword"
          type="text"
          component={TextField}
          prefix={<Icon type="lock" />}
        />

        <Form.Item style={{ margin: '0' }}>
          <Button
            type="primary"
            htmlType="submit"
            className="password-set-form-button"
            loading={submitting}
            style={{ width: '100%' }}>
            {lang.EN.changePass}
          </Button>
        </Form.Item>
      </form>
    );
  }
}

export const PasswordSetForm = reduxForm({
  form: 'passwordSet',
  validate,
})(PasswordSetFormComponent);
