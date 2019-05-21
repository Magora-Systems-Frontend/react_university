import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'components';
import { Icon } from 'antd';
import ButtonColored from 'components/ButtonColored';
import lang from './lang.json';
import './search-form.scss';

@reduxForm({
  form: 'SECTION_SEARCH',
})
export default class SearchForm extends Component {
  static propTypes = {
    maxWidth: PropTypes.string,
  };

  render() {
    const {
      RU: { formPlaceholder },
    } = lang;
    const { maxWidth } = this.props;
    return (
      <form
        className="search-course-form"
        style={{ maxWidth: maxWidth, width: '100%' }}
        onSubmit={(e, value) => {
          e.preventDefault();
          console.log(value);
        }}>
        <Field
          name="text"
          type="text"
          cssmodify={{ marginBottom: 0, flex: 1, border: 0, height: '44px' }}
          placeholder={formPlaceholder}
          component={TextField}
        />
        <ButtonColored colorStyle="search" type="submit">
          <Icon type="search" />
        </ButtonColored>
      </form>
    );
  }
}
