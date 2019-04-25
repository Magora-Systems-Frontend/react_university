import React from 'react';
import { LoginForm } from './form';
import { getAxios } from 'utils/api/axiosClient';

export class Login extends React.PureComponent {

  onSubmit = (values) => {
    console.log(values);
    const axios = getAxios();
    axios.post('/users/login', values).then(resolve => {
      console.log(resolve)
    });
  };

  render() {
    return (
      <div className="login">
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
