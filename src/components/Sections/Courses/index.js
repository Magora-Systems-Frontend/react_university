import React from 'react';
import './courses.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ButtonCoursesType } from 'components/ButtonCoursesType';
import { CarouselCourses } from 'components/CarouselCourses';
import { getCourses, getCoursesPopular } from '../../../pages/HomePage/actions';

const mapStateToProps = ({ coursesState }) => ({
  coursesState,
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
    getCourses: PropTypes.func,
    getCoursesPopular: PropTypes.func,
  };

  static defaultProps = {
    coursesState: {},
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
    const { coursesState } = this.props;
    const { payload = {}, payloadPopular = {} } = coursesState;

    return (
      <div className="courses">
        <div className="courses__block-selection">
          <div className="courses__block-selection_description">
            <div className="courses__block-selection_lead-test">The world’s largest selection of courses</div>
            <div className="courses__block-selection_sub-test">
              Choose from over 100,000 online video courses with new additions published every month
            </div>
          </div>
          <div className="courses__block-selection_unit-container">
            <div className="courses__block-selection_unit-container-content">
              <ButtonCoursesType clickButton={this.clickButton} />
              <CarouselCourses dataCourses={payload} />
            </div>
          </div>
        </div>
        <div className="courses__block-popular">
          <div className="courses__block-popular_title">Students are viewing</div>
          <CarouselCourses dataCourses={payloadPopular} />
        </div>
      </div>
    );
  }
}
