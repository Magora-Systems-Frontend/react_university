import React from 'react';
import { RegistrationForm } from './form';

export class Registration extends React.PureComponent {
  onSubmit = values => {
    console.log(values);
  };

  dateChange = value => {
    console.log(value._d);
  };

  fileChange = value => {
    console.log(value.file);
  };

  render() {
    return (
      <div className="registration">
        <RegistrationForm onSubmit={this.onSubmit} onDateChange={this.dateChange} onFileChange={this.fileChange} />
      </div>
    );
  }
}
