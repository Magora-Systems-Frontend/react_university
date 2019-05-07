import React from 'react';
import PropTypes from 'prop-types';
import { Input, Select, AutoComplete, Icon } from 'antd';
import { API_METHODS } from 'config/constants';
import { getAxios } from 'utils/api/axiosClient';

const InputGroup = Input.Group;
const Option = Select.Option;

export class CityFieldSimple extends React.PureComponent {
  static propTypes = {
    countriesFieldProps: PropTypes.object, // ant-design Select props
    citiesFieldProps: PropTypes.object, // ant-design Autocomplete props
  };

  static defaultProps = {
    countriesFieldProps: {},
    citiesFieldProps: {},
  };

  // memoize cities here after fetch
  countryCities = {};

  state = {
    countries: [],
    countriesLoading: false,
    cities: [],
    citiesLoading: false,
  };

  async componentDidMount() {
    this._isMounted = true;
    this.axios = getAxios();
    this.toggleLoading('countriesLoading', true);
    try {
      const response = await this.axios.get(API_METHODS.COUNTRIES);
      const { data = {} } = response;
      const { countries = [] } = data;
      this.setState({ countries });
    } catch (e) {}
    this.toggleLoading('countriesLoading', false);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  toggleLoading = (loadingFieldName, value) => {
    if (!this._isMounted) return;
    const updateState = {};
    updateState[loadingFieldName] = value;
    this.setState(updateState);
  };

  countryChange = (value) => {
    this.setState({ cities: [] });
    this.getCities(value);
  };

  getCities = async (country) => {
    if (this.countryCities[country]) {
      // get memoized cities
      this.setState({ cities: this.countryCities[country] });
      return;
    }

    this.toggleLoading('citiesLoading', true);
    try {
      const response = await this.axios.get(`${API_METHODS.CITIES}?country=${country}`);
      const { data = {} } = response;
      const { cities = [] } = data;
      this.setState({ cities });
      this.countryCities[country] = cities;
    } catch (e) {}
    this.toggleLoading('citiesLoading', false);
  };

  render() {
    const { countriesLoading, countries, citiesLoading, cities } = this.state;
    const { countriesFieldProps, citiesFieldProps } = this.props;

    return (
      <InputGroup compact>
        <Select
          style={{ width: '50%' }}
          loading={countriesLoading}
          placeholder="Select country"
          showSearch
          {...countriesFieldProps}
          onChange={(value) => {
            this.countryChange(value);
            countriesFieldProps && countriesFieldProps.onChange && countriesFieldProps.onChange(value);
          }}>
          {countries.map((country, index) => (
            <Option key={index} value={country}>
              {country}
            </Option>
          ))}
        </Select>

        <AutoComplete
          dataSource={cities}
          style={{ width: '50%' }}
          placeholder="Select city"
          disabled={!cities.length}
          filterOption={(inputValue, option) =>
            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
          {...citiesFieldProps}>
          {citiesLoading ? <Input suffix={<Icon type="loading" />} /> : null}
        </AutoComplete>
      </InputGroup>
    );
  }
}
