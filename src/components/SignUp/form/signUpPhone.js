import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, propTypes, Field } from 'redux-form';
import { TextField, MaskedNumberField } from 'components';
import { Icon, Button, Form, Tooltip } from 'antd';

const validate = (values) => {
  const errors = {};

  return errors;
};

@reduxForm({
  form: 'signUpPhone',
  validate,
})
class SignUpPhoneForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    ...propTypes,
  };

  constructor(props) {
    super(props);
    this.state = {
      disableCodeButton: false,
    };
  }

  sendCode = () => {
    this.setState({
      disableCodeButton: !this.state.disableCodeButton,
    });
    alert('Your code: 1234');
    const that = this;
    setTimeout(function() {
      that.setState({
        disableCodeButton: !that.state.disableCodeButton,
      });
    }, 30000);
  };

  render() {
    const { handleSubmit, submitting } = this.props;
    const { disableCodeButton } = this.state;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="phone"
          type="mask"
          mask={'+7-999-999-99-99'}
          placeholder="Phone"
          error="error"
          component={TextField}
          prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title="+7-913-444-88-55">
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Field
            name="code"
            type="mask"
            mask={'9999'}
            placeholder="Code"
            component={TextField}
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />

          <Form.Item>
            <Button
              onClick={() => this.sendCode()}
              type="default"
              htmlType="button"
              className="send-code-button"
              disabled={disableCodeButton}>
              Send code
            </Button>
          </Form.Item>
        </div>

        <Form.Item style={{ margin: '0' }}>
          <Button
            type="primary"
            htmlType="submit"
            className="signup-phone-form-button"
            loading={submitting}
            style={{ width: '100%' }}>
            Sign up
          </Button>
        </Form.Item>
      </form>
    );
  }
}

export { SignUpPhoneForm };
