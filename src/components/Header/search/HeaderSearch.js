import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Icon } from 'antd';
import { TextField } from 'components';
import './header-search.scss';
import Button from 'components/Button';
import lang from './lang.json';

@reduxForm({
  form: 'HEADER_SEARCH',
})
export default class HeaderSearch extends Component {
  render() {
    const {
      EN: {
        search: { placeholder, name },
      },
    } = lang;
    return (
      <form
        className="header-search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <Field
          name={name}
          type="search"
          cssmodify={{ marginBottom: 0, flex: 1, border: 0, height: '44px' }}
          placeholder={placeholder}
          component={TextField}
        />
        <Button colorStyle="search" type="submit">
          <Icon type="search" />
        </Button>
      </form>
    );
  }
}
