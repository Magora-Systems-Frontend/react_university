import { validateInput, validationTypes } from 'lib/validation';

export const validate = (values) => {
  const errors = {};

  const fillInAllError = 'Fill in all required fields';
  const textError = 'must contain only the following characters: A-Z, a-z, ., -';

  if (!values.lastname) {
    errors.lastname = fillInAllError;
  } else if (!validateInput(validationTypes.TEXT, values.lastname)) {
    errors.lastname = `Last name ${textError}`;
  }

  if (!values.firstname) {
    errors.firstname = fillInAllError;
  } else if (!validateInput(validationTypes.TEXT, values.firstname)) {
    errors.firstname = `First name ${textError}`;
  }

  if (!validateInput(validationTypes.TEXT, values.patronymic)) {
    errors.patronymic = `Patronymic ${textError}`;
  }

  if (!validateInput(validationTypes.NICK, values.username)) {
    errors.username = 'Nickname must contain only the following characters: A-Z, a-z, ., _, 0-9';
  }

  return errors;
};
