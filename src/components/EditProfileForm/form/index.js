import React from 'react';
import { reduxForm, propTypes, Field } from 'redux-form';
import { TextField, SelectField, FileField, DatePickerField } from 'components';
import { validate } from './validate';

const gender = ['Not choosen', 'Male', 'Female'];

@reduxForm({
  form: 'editProfile',
  validate,
  enableReinitialize: true,
})
export class EditProfileForm extends React.PureComponent {
  static propTypes = {
    ...propTypes,
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h2>Edit Profile</h2>

        <Field label="Last Name" name="lastName" placeholder="Last Name" component={TextField} />

        <Field label="First Name" name="firstName" placeholder="First Name" component={TextField} />

        <Field label="Patronymic" name="patronymic" placeholder="Patronymic" component={TextField} />

        <Field label="Username" name="userName" placeholder="Username" component={TextField} />

        <Field
          label="Photo"
          name="photo"
          action="test"
          component={FileField}
          inputProps={{
            multiple: false,
          }}
        />

        <Field label="Date of Birth" name="date" placeholder="Select date..." component={DatePickerField} />

        <Field label="Gender" name="gender" placeholder="Gender" error="aaa" options={gender} component={SelectField} />

        <button className="ant-btn ant-btn-primary">Send</button>
      </form>
    );
  }
}
