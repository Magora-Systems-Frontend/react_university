import React from 'react';
import { fieldPropTypes } from 'redux-form';
import { Form } from 'antd';
import { CityFieldSimple } from '../../FormFieldsSimple/CityFieldSimple';

export class CityField extends React.PureComponent {
  static propTypes = {
    ...fieldPropTypes,
  };

  countryChange = (value) => {
    const { input } = this.props;
    input.onChange({ country: value });
  };

  cityChange = (value) => {
    const { input } = this.props;
    input.onChange({ ...input.value, city: value });
  };

  render() {
    const { label, meta, input } = this.props;
    const { value: inputValue = {} } = input;

    const validateStatus = meta.error && meta.touched ? 'error' : '';
    const help = meta.error && meta.touched ? meta.error : '';

    return (
      <Form.Item label={label} validateStatus={validateStatus} help={help}>
        <CityFieldSimple
          countriesFieldProps={{
            value: inputValue.country,
            onChange: this.countryChange,
          }}
          citiesFieldProps={{
            value: inputValue.city,
            onSelect: this.cityChange,
            onChange: this.cityChange,
            onBlur: () => input.onBlur(input.value),
          }}
        />
      </Form.Item>
    );
  }
}
