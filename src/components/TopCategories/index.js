import React from 'react';
import { bindActionCreators } from 'redux';
import { getCategories } from '../../pages/HomePage/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ItemCategory } from '../ItemCategory';

import './index.scss';

const mapStateToProps = ({ categoriesState }) => ({
  categoriesState,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: bindActionCreators(getCategories, dispatch),
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export class TopCategories extends React.PureComponent {
  static propTypes = {
    categoriesState: PropTypes.object,
    getCategories: PropTypes.func,
  };

  static defaultProps = {
    categoriesState: {},
    getCategories: Function.prototype,
  };

  async componentDidMount() {
    await this.props.getCategories();
  }

  render() {
    const { categoriesState } = this.props;
    const { payload = [] } = categoriesState;

    return (
      <div className="categories">
        <div className="categories__title">Top categories</div>
        <div className="categories__items">
          {payload.map((item, index) => (
            <ItemCategory data={item} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
