import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lang from './lang.json';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'components';
import './header-search.scss';

@reduxForm({
  form: 'HEADER_SEARCH',
})
export default class HeaderSearch extends Component {
  static propTypes = {
    maxWidth: PropTypes.string,
  };

  render() {
    const {
      RU: {
        search: { placeholder, name },
      },
    } = lang;
    const { maxWidth } = this.props;
    return (
      <form
        className="header-search-form"
        onSubmit={(e, value) => {
          e.preventDefault();
          console.log(value);
        }}>
        <Field
          name={name}
          type="text"
          cssmodify={{ marginBottom: 0 }}
          placeholder={placeholder}
          component={TextField}
        />
      </form>
    );
  }
}
