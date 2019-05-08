import React from 'react';
import { reduxForm, propTypes, Field } from 'redux-form';
import { TextField, SelectField, FileField, DatePickerField } from 'components';
import { validate } from './validate';
import lang from './lang.json';

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
    const {
      EN: {
        formTitle,
        fields: { lastName, firstName, patronymic, userName, photo, date, gender },
        submitTitle,
      },
    } = lang;

    return (
      <form onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>

        <Field label={lastName.label} name={lastName.name} placeholder={lastName.placeholder} component={TextField} />

        <Field
          label={firstName.label}
          name={firstName.name}
          placeholder={firstName.placeholder}
          component={TextField}
        />

        <Field
          label={patronymic.label}
          name={patronymic.name}
          placeholder={patronymic.placeholder}
          component={TextField}
        />

        <Field label={userName.label} name={userName.name} placeholder={userName.placeholder} component={TextField} />

        <Field
          label={photo.label}
          name={photo.name}
          action={photo.action}
          component={FileField}
          inputProps={{
            multiple: false,
          }}
        />

        <Field label={date.label} name={date.name} placeholder={date.placeholder} component={DatePickerField} />

        <Field
          label={gender.label}
          name={gender.name}
          placeholder={gender.placeholder}
          error={gender.error}
          options={gender.options}
          component={SelectField}
        />

        <button className="ant-btn ant-btn-primary">{submitTitle}</button>
      </form>
    );
  }
}
