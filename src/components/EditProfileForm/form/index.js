import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, propTypes, Field } from 'redux-form';
import { TextField, SelectField, FileField, DatePickerField } from 'components';
import { validate } from './validate';

import './edit-profile-form.scss';

const gender = ['Not choosen', 'Male', 'Female'];

@reduxForm({
  form: 'editProfile',
  validate,
})
export class EditProfileForm extends React.PureComponent {
  static propTypes = {
    ...propTypes,
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <h2>Edit Profile</h2>

        <Field label="Last Name" name="lastname" placeholder="Last Name" component={TextField} />

        <Field label="First Name" name="firstname" placeholder="First Name" component={TextField} />

        <Field label="Patronymic" name="patronymic" placeholder="Patronymic" component={TextField} />

        <Field label="Username" name="username" placeholder="Username" component={TextField} />

        <Field label="Photo" name="date" action="test" component={FileField} />

        <Field label="Date of Birth" name="date" placeholder="Select date..." component={DatePickerField} />

        <Field label="Gender" name="gender" placeholder="Gender" error="aaa" options={gender} component={SelectField} />

        <button className="ant-btn ant-btn-primary">Send</button>
      </form>
    );
  }
}
