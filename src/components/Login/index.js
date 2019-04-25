import React from 'react';
import { LoginForm } from './form';
import { getAxios } from 'utils/api/axiosClient';
const axios = getAxios();

export class Login extends React.PureComponent {

  onSubmit = (values) => {
    console.log(values);
    return axios.post('/users/login', {});
  };

  render() {
    return (
      <div className="login">
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
