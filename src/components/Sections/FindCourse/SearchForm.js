import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'components';

@reduxForm({
  form: 'SECTION_SEARCH',
})
export default class SearchForm extends Component {
  static propTypes = {
    maxWidth: PropTypes.string,
  };

  render() {
    const { maxWidth } = this.props;
    return (
      <form
        style={{ maxWidth: maxWidth, width: '400px' }}
        onSubmit={(e, value) => {
          e.preventDefault();
          console.log(value);
        }}>
        <Field
          name="search"
          type="search"
          cssmodify={{ marginBottom: 0 }}
          placeholder="Enter text"
          component={TextField}
        />
      </form>
    );
  }
}
