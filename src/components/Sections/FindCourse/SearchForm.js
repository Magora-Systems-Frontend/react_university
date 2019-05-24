import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'components';
import { Icon } from 'antd';
import Button from 'components/Button';
import lang from './lang.json';
import './search-form.scss';
import { connect } from 'react-redux';

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
    languageState: {},
  };

  render() {
    const { languageState = {} } = this.props;
    const { language } = languageState;
    const { formPlaceholder } = lang[language];
    const { maxWidth } = this.props;

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
        <Button colorStyle="search" type="submit">
          <Icon type="search" />
        </Button>
      </form>
    );
  }
}
