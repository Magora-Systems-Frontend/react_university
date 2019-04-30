import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, propTypes, Field } from 'redux-form';
import { TextField } from 'components';

import { Icon, Button, Form, Tooltip } from 'antd';

import { validateInput, validationTypes } from 'lib/validation';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Fill in all required fields';
  } else {
    if (!validateInput(validationTypes.EMAIL, values.email)) {
      errors.email = 'Invalid email format';
    }
  }

  return errors;
};

class PasswordRecoveryFormComponent extends PureComponent {
  static propTypes = {
    ...propTypes,
    isLoading: PropTypes.bool,
    handleSubmit: PropTypes.func,
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          type="email"
          placeholder="Email"
          component={TextField}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title="test@email.com">
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />

        <Form.Item style={{ margin: '0' }}>
          <Button
            type="primary"
            htmlType="submit"
            className="recovery-password-form-button"
            style={{ width: '100%' }}
            loading={this.props.isLoading}
            icon="login">
            Recover password
          </Button>
        </Form.Item>
      </form>
    );
  }
}

export const PasswordRecoveryForm = reduxForm({
  form: 'passwordRecovery',
  validate,
})(PasswordRecoveryFormComponent);
