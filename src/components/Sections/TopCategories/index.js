import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategories } from '../../../pages/HomePage/actions';
import { ItemCategory } from './ItemCategory';
import '../sections.scss';
import './index.scss';
import lang from './lang.json';

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
    const {
      EN: { title },
    } = lang;

    return (
      <div className="categories">
        <div className="content_container">
          <div className="categories__title">{title}</div>
          <div className="categories__items">
            {payload.map((item, index) => (
              <ItemCategory data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
