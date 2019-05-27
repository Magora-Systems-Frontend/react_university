import React from 'react';
import './courses.scss';
import '../sections.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ButtonCoursesType } from 'components/ButtonCoursesType';
import { CarouselCourses } from 'components/CarouselCourses';
import { getCourses, getCoursesPopular } from '../../../pages/HomePage/actions';
import lang from './lang.json';

const mapStateToProps = (state) => ({
  coursesState: state.coursesState,
  languageState: state.languageState,
});

const mapDispatchToProps = (dispatch) => ({
  getCourses: bindActionCreators(getCourses, dispatch),
  getCoursesPopular: bindActionCreators(getCoursesPopular, dispatch),
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export class Courses extends React.PureComponent {
  static propTypes = {
    coursesState: PropTypes.object,
    languageState: PropTypes.object,
    getCourses: PropTypes.func,
    getCoursesPopular: PropTypes.func,
  };

  static defaultProps = {
    coursesState: {},
    languageState: {},
    getCourses: Function.prototype,
    getCoursesPopular: Function.prototype,
  };

  clickButton = (values) => {
    this.props.getCourses(values);
  };

  async componentDidMount() {
    await this.props.getCourses('Development');
    await this.props.getCoursesPopular('Popular');
  }

  render() {
    const { coursesState, languageState = {} } = this.props;
    const { payload = {}, payloadPopular = {} } = coursesState;
    const { language } = languageState;
    const { title, description, viewing } = lang[language];

    return (
      <div className="courses">
        <div className="content_container">
          <div className="courses__block-selection">
            <div className="courses__block-selection_description">
              <div className="courses__block-selection_lead-test">{title}</div>
              <div className="courses__block-selection_sub-test">{description}</div>
            </div>
            <div className="courses__block-selection_unit-container">
              <div className="courses__block-selection_unit-container-content">
                <ButtonCoursesType clickButton={this.clickButton} />
                <CarouselCourses dataCourses={payload} />
              </div>
            </div>
          </div>
          <div className="courses__block-popular">
            <div className="courses__block-popular_title">{viewing}</div>
            <CarouselCourses dataCourses={payloadPopular} />
          </div>
        </div>
      </div>
    );
  }
}
