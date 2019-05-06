export const validationTypes = {
  REQUIRED_TEXT: 'REQUIRED_TEXT',
  EMAIL: 'EMAIL',
  NOT_REQUIRED: 'NOT_REQUIRED',
  TEXT: 'TEXT',
  NICK: 'NICK',
};

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const textRegex = /^([a-zA-Zа-яА-Я.-]){0,45}$/;
const nickNameRegex = /^([0-9a-zA-Zа-яА-Я._]){0,45}$/;

export function validateInput(scheme, value) {
  switch (scheme) {
    case validationTypes.NOT_REQUIRED:
      return true;
    case validationTypes.REQUIRED_TEXT:
      return value !== '';
    case validationTypes.EMAIL:
      return emailRegex.test(value);
    case validationTypes.TEXT:
      return textRegex.test(value);
    case validationTypes.NICK:
      return nickNameRegex.test(value);
    default:
      throw new Error('Provide valid scheme for input validation!');
  }
}

export function validateForm(state, data) {
  return Object.keys(state).every((name) => {
    const { vldScheme } = state[name];
    const value = data[name];
    return validateInput(vldScheme, value);
  });
}

const passwordRegexp = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[\w]{6,40}/g;
export function validatePassword(str) {
  return str.match(passwordRegexp);
}
