import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lang from './lang.json';
import { Field, reduxForm } from 'redux-form';
import { Icon } from 'antd';
import { TextField } from 'components';
import './header-search.scss';
import ButtonColored from 'components/ButtonColored';

@reduxForm({
  form: 'HEADER_SEARCH',
})
export default class HeaderSearch extends Component {
  render() {
    const {
      RU: {
        search: { placeholder, name },
      },
    } = lang;
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
          cssmodify={{ marginBottom: 0, flex: 1, border: 0, height: '44px' }}
          placeholder={placeholder}
          component={TextField}
        />
        <ButtonColored colorStyle="search" type="submit">
          <Icon type="search" />
        </ButtonColored>
      </form>
    );
  }
}
