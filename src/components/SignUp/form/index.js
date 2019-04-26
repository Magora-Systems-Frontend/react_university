import React, { PureComponent } from 'react';
import { reduxForm, propTypes, Field } from 'redux-form';
import { TextField } from 'components';
import { Icon, Button, Form, Tooltip } from 'antd';
import { validateInput, validationTypes, validatePassword } from 'lib/validation';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Fill in all required fields';
  } else {
    if (!validateInput(validationTypes.EMAIL, values.email)) {
      errors.email = 'Invalid email format';
    }
  }

  if (!values.password) {
    errors.password = 'Fill in all required fields';
  } else {
    if (!validatePassword(values.password)){
      errors.password = 'Password must be at 6 - 40 characters, including numbers, lowercase and uppercase letters';
    }
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Fill in all required fields';
  } else {
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Enter equal passwords';
    }
  }

  return errors;
};

@reduxForm({
  form: 'signUp',
  validate,
})

export class SignUpForm extends PureComponent {
  static propTypes = {
    ...propTypes
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="signup-form">
        <Field
          name="email"
          type="email"
          placeholder="Email"
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
          placeholder="Password"
          component={TextField}
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />

        <Field
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          component={TextField}
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />

        <Form.Item style={{ margin: '0' }}>
          <Button
            type="primary"
            htmlType="submit"
            className="signup-form-button"
            style={{ width: '100%' }}
          >
            Sign up
          </Button>
        </Form.Item>
      </form>
    );
  }

}
