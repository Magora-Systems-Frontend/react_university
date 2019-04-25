import React from 'react';
import { reduxForm, propTypes, Field } from 'redux-form';
import { TextField } from 'components';
import { Icon, Form } from 'antd';
//

const FormItem = Form.Item;

const validate = (values) => {
  const errors = {};

  console.log(values);

  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (!values.password) {
    errors.password = 'Field is required';
  }

  return errors;
};

@reduxForm({
  form: 'login',
  validate,
})
export class LoginForm extends React.PureComponent {
  static propTypes = {
    ...propTypes,
  };

  render() {
    return (
      <form className="login-form">

        <FormItem>
          <Field
            name="email"
            type="email"
            label="Email:"
            placeholder="Email"
            component={TextField}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </FormItem>

        <FormItem>
          <Field
            name="password"
            type="password"
            label="Email:"
            placeholder="Password"
            component={TextField}
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </FormItem>

      </form>
    );
  }
}
