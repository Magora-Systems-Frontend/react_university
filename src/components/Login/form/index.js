import React from 'react';
import { reduxForm, propTypes, Field } from 'redux-form';
import { TextField } from 'components';
import { Icon } from 'antd';
//

const validate = (values) => {
  const errors = {};

  console.log(values);

  if (!values.email) {
    errors.email = 'Email is required';
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
        <Field
          name="email"
          type="email"
          label="Email:"
          placeholder="Email"
          component={TextField}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
      </form>
    );
  }
}
