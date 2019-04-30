import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, propTypes, Field } from 'redux-form';
import { TextField } from 'components';
import { Icon, Button, Form, Tooltip } from 'antd';
import { validateInput, validationTypes } from 'lib/validation';
//

const validate = values => {
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
  }

  return errors;
};

@reduxForm({
  form: 'login',
  validate,
})
class LoginForm extends React.PureComponent {
  static propTypes = {
    ...propTypes,
    isLoading: PropTypes.bool,
    onGoogleLoginClick: PropTypes.func,
    onFacebookLoginClick: PropTypes.func,
  };

  render() {
    const { handleSubmit, onGoogleLoginClick, onFacebookLoginClick, onVKLoginClick } = this.props;

    return (
      <form onSubmit={handleSubmit} className="login-form">
        <Field
          name="email"
          type="email"
          placeholder="Email"
          error="aaa"
          component={TextField}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title="test@email.com 123456">
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

        <Form.Item style={{ margin: '0' }}>
          <Button
            type="primary"
            htmlType="button"
            className="login-form-button"
            style={{ width: '100%' }}
            icon="google"
            onClick={onGoogleLoginClick}
          >
            Log in with Google
          </Button>
        </Form.Item>

        <Form.Item style={{ margin: '0' }}>
          <Button
            type="primary"
            htmlType="button"
            className="login-form-button"
            style={{ width: '100%' }}
            icon="facebook"
            onClick={onFacebookLoginClick}
          >
            Log in with Facebook
          </Button>
        </Form.Item>

        <Form.Item style={{ margin: '0' }}>
          <Button
            type="primary"
            htmlType="button"
            className="login-form-button"
            style={{ width: '100%' }}
            onClick={onVKLoginClick}
          >
            Log in with VK
          </Button>
        </Form.Item>

        <Form.Item style={{ margin: '0' }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: '100%' }}
            loading={this.props.isLoading}
            icon="login"
          >
            Log in
          </Button>
        </Form.Item>
      </form>
    );
  }
}

export { LoginForm };
