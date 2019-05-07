import React from 'react';
import { RegistrationForm } from './form';

export class Registration extends React.PureComponent {
  onSubmit = (values) => {};

  render() {
    return (
      <div className="registration">
        <RegistrationForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
