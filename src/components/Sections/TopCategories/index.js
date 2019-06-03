import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCategories } from '../../../pages/HomePage/actions';
import { ItemCategory } from './ItemCategory';
import '../sections.scss';
import './index.scss';
import lang from './lang.json';

const mapStateToProps = (state) => ({
  languageState: state.languageState,
  categoriesState: state.categoriesState,
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
    languageState: PropTypes.object,
    getCategories: PropTypes.func,
  };

  static defaultProps = {
    categoriesState: {},
    languageState: {},
    getCategories: Function.prototype,
  };

  async componentDidMount() {
    await this.props.getCategories();
  }

  render() {
    const { categoriesState, languageState = {} } = this.props;
    const { payload = [] } = categoriesState;
    const { language } = languageState; //variable pointing to current language
    const { title } = lang[language]; //variables responsible for textual data, changeable depending on the selected language

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
