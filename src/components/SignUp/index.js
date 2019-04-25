import React, { PureComponent } from 'react';
import { SignUpForm } from './form';
import { getAxios } from 'utils/api/axiosClient';

export class SignUp extends PureComponent{

  onSubmit = (values) => {
    console.log(values);
    const axios = getAxios();
    axios.post('/user/register', values).then(resolve => {
      console.log(resolve)
    });
  };

  render() {
    return (
      <div className="sign-up">
        <SignUpForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
