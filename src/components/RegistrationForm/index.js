import React from 'react';
import { RegistrationForm } from './form';

export class Registration extends React.PureComponent {
  onSubmit = (values) => {};

  dateChange = (value) => {};

  fileChange = (value) => {};

  render() {
    return (
      <div className="registration">
        <RegistrationForm onSubmit={this.onSubmit} onDateChange={this.dateChange} onFileChange={this.fileChange} />
      </div>
    );
  }
}
