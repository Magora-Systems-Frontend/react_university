import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { TextField } from 'components';
import { GLYPH, Icon } from 'components/Icon';
import Button from 'components/Button';
import lang from './lang.json';
import './search-form.scss';

const mapStateToProps = ({ languageState }) => ({
  languageState,
});

@connect(mapStateToProps)
@reduxForm({
  form: 'SECTION_SEARCH',
})
export default class SearchForm extends Component {
  static propTypes = {
    maxWidth: PropTypes.string,
    languageState: PropTypes.object,
  };

  static defaultProps = {
    maxWidth: '',
    languageState: {},
  };

  render() {
    const { languageState = {}, maxWidth } = this.props;
    const { language } = languageState; //variable pointing to current language
    const { formPlaceholder } = lang[language]; //variables responsible for textual data, changeable depending on the selected language

    return (
      <form
        className="search-course-form"
        style={{ maxWidth: maxWidth, width: '100%' }}
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <Field
          name="text"
          type="search"
          cssmodify={{ marginBottom: 0, flex: 1, border: 0, height: '44px' }}
          placeholder={formPlaceholder}
          component={TextField}
        />
        <Button colorStyle="search" type="submit" modificationClass="search-course-form__submit">
          <Icon glyph={GLYPH.search} fill="#ec5252" />
        </Button>
      </form>
    );
  }
}
