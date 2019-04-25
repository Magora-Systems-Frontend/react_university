import React from 'react';
import { LoginForm } from './form';
//

export class Login extends React.PureComponent {

  onSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <div className="login">
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
