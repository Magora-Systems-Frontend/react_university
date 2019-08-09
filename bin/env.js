'use strict';
const defaultEnvVariables = {
  NODE_ENV: 'development',
  HOST: '0.0.0.0',
  PORT: 8021,
  WEB_APP_PREFIX: 'AP'
};
const envVariables = Object.keys(process.env).reduce((accumulator, envName) => {
  if (Object.keys(defaultEnvVariables).includes(envName)) {
    accumulator[envName] = process.env[envName];
  }

  return accumulator;
}, {});

module.exports = {
  ...defaultEnvVariables,
  ...envVariables
};
