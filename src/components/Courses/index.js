import React from 'react';

import './courses.scss';
import { ButtonCoursesType } from '../ButtonCoursesType';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCourses } from '../../pages/HomePage/actions';
import { CarouselCourses } from '../CarouselCourses';

const mapStateToProps = ({ coursesState }) => ({
  coursesState,
});

const mapDispatchToProps = (dispatch) => ({
  getCourses: bindActionCreators(getCourses, dispatch),
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export class Courses extends React.PureComponent {
  static propTypes = {
    coursesState: PropTypes.object,
    getCourses: PropTypes.func,
  };

  static defaultProps = {
    coursesState: {},
    getCourses: Function.prototype,
  };

  clickButton = (values) => {
    // console.log(values);
    this.props.getCourses(values);
  };

  async componentDidMount() {
    // const { match } = this.props;
    // const { params } = match;
    // const { id: userId } = params;
    await this.props.getCourses('Development');
    // console.log('111');
  }

  render() {
    // console.log(this.props);
    const { coursesState } = this.props;
    const { payload = {} } = coursesState;
    // const { posts } = payload;
    // console.log(payload);
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
      </div>
    );
  }
}
