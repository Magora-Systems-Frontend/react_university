import React from 'react';
import {reduxForm, propTypes, Field} from 'redux-form';
import {TextField, SelectField, FileField, DatePickerField} from 'components';
import PropTypes from 'prop-types';
import {validateInput, validationTypes} from 'lib/validation';
import './registration-form.sass';

const validate = (values) => {
    const errors = {};

    if (!values.lastname) {
        errors.lastname = 'Fill in all required fields';
    } else if (!validateInput(validationTypes.TEXT, values.lastname)) {
        errors.lastname = 'Last name must contain only the following characters: A-Z, a-z, ., -';
    }

    if (!values.firstname) {
        errors.firstname = 'Fill in all required fields';
    } else if (!validateInput(validationTypes.TEXT, values.firstname)) {
        errors.firstname = 'First name must contain only the following characters: A-Z, a-z, ., -';
    }

    if (!values.username) {
        errors.username = 'Fill in all required fields';
    } else if (!validateInput(validationTypes.NICK, values.username)) {
        errors.username = 'Nickname must contain only the following characters: A-Z, a-z, ., _';
    }

    if (!values.city) {
        errors.city = 'Fill in all required fields';
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

    render() {
        const {handleSubmit, submitting, onDateChange, onFileChange} = this.props;
        const gender = ['Not choosen', 'Male', 'Female'];
        return (
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Registration Form</h2>
                <Field
                    label="Last Name"
                    name="lastname"
                    type="text"
                    placeholder="Last Name"
                    error="aaa"
                    component={TextField}
                />
                <Field
                    label="First Name"
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                    error="aaa"
                    component={TextField}
                />
                <Field
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    error="aaa"
                    component={TextField}
                />
                <Field
                    label="City"
                    name="city"
                    type="text"
                    placeholder="City"
                    error="aaa"
                    component={TextField}
                />
                <Field
                    label="Gender"
                    name="gender"
                    placeholder="Gender"
                    error="aaa"
                    options={gender}
                    component={SelectField}
                />
                <Field
                    label="Date of Birth"
                    name="date"
                    error="aaa"
                    change={onDateChange}
                    placeholder="Select date..."
                    component={DatePickerField}
                />

                <Field
                    label="Photo"
                    name="date"
                    error="aaa"
                    action="test"
                    change={onFileChange}
                    component={FileField}
                />

                <div className="registration-form__submit">
                    <button className="registration-form__submit-btn ant-btn ant-btn-primary" disabled={submitting}>
                        Send
                    </button>
                </div>
            </form>
        );
    }
}
