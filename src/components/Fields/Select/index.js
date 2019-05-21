import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styles from './styles.js';

export class SimpleSelect extends Component {
  static propTypes = {
    options: PropTypes.array,
    defaultInputValue: PropTypes.string,
  };
  render() {
    const { options, ...tailProps } = this.props;
    return <Select options={options} styles={styles} {...tailProps} />;
  }
}
