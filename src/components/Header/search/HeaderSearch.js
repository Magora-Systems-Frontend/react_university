import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'components';
import Button from 'components/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GLYPH, Icon } from 'components/Icon';
import lang from './lang.json';
import './header-search.scss';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

@reduxForm({
  form: 'HEADER_SEARCH',
})
@connect(mapStateToProps)
export default class HeaderSearch extends Component {
  static propTypes = {
    languageState: PropTypes.object,
  };

  static defaultProps = {
    languageState: {},
  };
  render() {
    const { languageState = {} } = this.props;
    const { language } = languageState; //variable pointing to current language
    const {
      search: { placeholder, name },
    } = lang[language]; //variables responsible for textual data, changeable depending on the selected language

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
        <Button colorStyle="search" type="submit" modificationClass="header-search-form__submit">
          <Icon glyph={GLYPH.search} fill="#ec5252" />
        </Button>
      </form>
    );
  }
}
