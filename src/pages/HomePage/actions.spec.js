import { ACTIONS_CONSTANTS_COURSES, ACTIONS_CONSTANTS_CATEGORIES, ACTIONS_CONSTANTS_COMMENTS } from 'config/constants';
import { getCoursesState, getCoursesPopularState, getCategoriesState, getCommentsState } from './actions';

const inputData = 'data';

describe('Test action creators', () => {
  it('Test actionCreator getCoursesState', () => {
    const result = getCoursesState(inputData);
    expect(result).toEqual({
      type: ACTIONS_CONSTANTS_COURSES.COURSES_GET_SUCCESS,
      payload: inputData,
    });
  });

  it('Test actionCreator getCoursesState', () => {
    const result = getCoursesPopularState(inputData);
    expect(result).toEqual({
      type: ACTIONS_CONSTANTS_COURSES.COURSES_POPULAR_GET_SUCCESS,
      payload: inputData,
    });
  });

  it('Test actionCreator getCoursesState', () => {
    const result = getCategoriesState(inputData);
    expect(result).toEqual({
      type: ACTIONS_CONSTANTS_CATEGORIES.CATEGORIES_GET_SUCCESS,
      payload: inputData,
    });
  });

  it('Test actionCreator getCoursesState', () => {
    const result = getCommentsState(inputData);
    expect(result).toEqual({
      type: ACTIONS_CONSTANTS_COMMENTS.COMMENTS_GET_SUCCESS,
      payload: inputData,
    });
  });
});
