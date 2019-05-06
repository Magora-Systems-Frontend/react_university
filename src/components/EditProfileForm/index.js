import React from 'react';
import { EditProfileForm } from './form';

export class EditProfile extends React.PureComponent {
  onSubmit = (values) => {
    // eslint-disable-next-line
    console.log(values);
  };

  render() {
    return <EditProfileForm onSubmit={this.onSubmit} />;
  }
}
