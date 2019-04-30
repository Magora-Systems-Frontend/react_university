import React, { PureComponent } from 'react';
import {reduxForm, propTypes, Field} from 'redux-form';
import {TextField} from 'components';
import PropTypes from 'prop-types';
import { Icon, Button, Form } from 'antd';
import {validatePassword} from 'lib/validation';
import './index.sass';

const validate = (values) => {
  const errors = {};

  if (!values.newPassword) {
    errors.newPassword = 'Create new password';
  } else if(!validatePassword(values.newPassword)){
    errors.newPassword = 'Password must be at 6 - 40 characters, including numbers, lowercase and uppercase letters';
  }

  return errors;
};

class PasswordSetFormComponent extends PureComponent {
  static propTypes = {
    ...propTypes,
    submitting: PropTypes.bool,
  };

  render() {
    const { handleSubmit, submitting } = this.props;

    return(
      <form onSubmit={handleSubmit} className="password-set-form">
        <Field
          label="New Password"
          name="newPassword"
          type="text"
          component={TextField}
          prefix={<Icon type="lock"/>}
        />

        <Form.Item style={{ margin: '0' }}>
          <Button
            type="primary"
            htmlType="submit"
            className="password-set-form-button"
            loading={submitting}
            style={{ width: '100%' }}
          >
            Change password
          </Button>
        </Form.Item>
      </form>
    )
  }
}

export const PasswordSetForm = reduxForm({
  form: 'passwordSet',
  validate,
})(PasswordSetFormComponent);
