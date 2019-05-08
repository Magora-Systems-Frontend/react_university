import React from 'react';
import { reduxForm, propTypes, Field } from 'redux-form';
import { TextField, SelectField, DatePickerField, CityField, FileField } from 'components';
import PropTypes from 'prop-types';
import { validateInput, validationTypes } from 'lib/validation';
import './registration-form.sass';

import lang from '../lang.json';

const validate = (values) => {
  const errors = {};

  if (!values.lastname) {
    errors.lastname = lang.errors.required_field;
  } else if (!validateInput(validationTypes.TEXT, values.lastname)) {
    errors.lastname = lang.errors.invalid_lastname;
  }

  if (!values.firstname) {
    errors.firstname = lang.errors.required_field;
  } else if (!validateInput(validationTypes.TEXT, values.firstname)) {
    errors.firstname = lang.errors.invalid_firstname;
  }

  if (!values.username) {
    errors.username = lang.errors.required_field;
  } else if (!validateInput(validationTypes.NICK, values.username)) {
    errors.username = lang.errors.invalid_nickname;
  }

  if (!values.city) {
    errors.city = lang.errors.required_field;
  }

  return errors;
};

@reduxForm({
  form: 'registration',
  validate,
})
export class RegistrationForm extends React.PureComponent {
  static propTypes = {
    ...propTypes,
    submitting: PropTypes.bool,
  };

  static defaultProps = {
    submitting: false,
  };

  render() {
    const { handleSubmit, submitting, onDateChange, onFileChange } = this.props;
    const gender = lang.gender;
    return (
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <Field
          label={lang.EN.lastName}
          name="lastname"
          type="text"
          placeholder={lang.EN.lastName}
          error="aaa"
          component={TextField}
        />
        <Field
          label={lang.EN.firstName}
          name="firstname"
          type="text"
          placeholder={lang.EN.firstName}
          error="aaa"
          component={TextField}
        />
        <Field
          label={lang.EN.userName}
          name="username"
          type="text"
          placeholder={lang.EN.userName}
          error="aaa"
          component={TextField}
        />
        <Field label={lang.EN.city} name="city" type="text" placeholder={lang.EN.city} component={CityField} />
        <Field
          label={lang.EN.gender}
          name="gender"
          placeholder={lang.EN.gender}
          error="aaa"
          options={gender}
          component={SelectField}
        />
        <Field
          label={lang.EN.dob}
          name="date"
          error="aaa"
          change={onDateChange}
          placeholder={lang.EN.selectDate}
          component={DatePickerField}
        />

        <Field
          label={lang.EN.photo}
          name="photo"
          error="aaa"
          action="test"
          change={onFileChange}
          component={FileField}
        />

        <div className="registration-form__submit">
          <button className="registration-form__submit-btn ant-btn ant-btn-primary" disabled={submitting}>
            {lang.EN.send}
          </button>
        </div>
      </form>
    );
  }
}
