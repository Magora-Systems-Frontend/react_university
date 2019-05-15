import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lang from './lang.json';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'components';

@reduxForm({
  form: 'HEADER_SEARCH',
})
export default class HeaderSearch extends Component {
  static propTypes = {
    maxWidth: PropTypes.string,
  };

  render() {
    const {
      EN: {
        search: { placeholder, name },
      },
    } = lang;
    const { maxWidth } = this.props;
    return (
      <form
        style={{ maxWidth: maxWidth, width: '400px' }}
        onSubmit={(e, value) => {
          e.preventDefault();
          console.log(value);
        }}>
        <Field
          name={name}
          type="search"
          cssmodify={{ marginBottom: 0 }}
          placeholder={placeholder}
          component={TextField}
        />
      </form>
    );
  }
}
