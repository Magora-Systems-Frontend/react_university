import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, propTypes, Field } from 'redux-form';
import { TextField } from 'components';
import { Icon, Button, Form, Tooltip } from 'antd';
import { validateInput, validationTypes, validatePassword } from 'lib/validation';

import lang from '../lang.json';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = lang.errors.required_field;
  } else {
    if (!validateInput(validationTypes.EMAIL, values.email)) {
      errors.email = lang.errors.invalid_email;
    }
  }

  if (!values.password) {
    errors.password = lang.errors.required_field;
  } else {
    if (!validatePassword(values.password)) {
      errors.password = lang.errors.invalid_pass;
    }
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = lang.errors.required_field;
  } else {
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = lang.errors.invalid_confirm_pass;
    }
  }

  return errors;
};

@reduxForm({
  form: 'signUp',
  validate,
})
class SignUpForm extends PureComponent {
  static propTypes = {
    submitting: PropTypes.bool,
    ...propTypes,
  };

  static defaultProps = {
    submitting: false,
  };

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit} className="signup-form">
        <Field
          name="email"
          type="email"
          placeholder={lang.EN.email}
          error="error"
          component={TextField}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title="test@email.com aS123456">
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />

        <Field
          name="password"
          type="password"
          placeholder={lang.EN.password}
          component={TextField}
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />

        <Field
          name="confirmPassword"
          type="password"
          placeholder={lang.EN.confirm}
          component={TextField}
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />

        <Form.Item style={{ margin: '0' }}>
          <Button
            type="primary"
            htmlType="submit"
            className="signup-form-button"
            loading={submitting}
            style={{ width: '100%' }}>
            {lang.EN.signUp}
          </Button>
        </Form.Item>
      </form>
    );
  }
}

export { SignUpForm };
