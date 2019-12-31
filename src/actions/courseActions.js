import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

export const saveCourse = course => {
  return courseApi.saveCourse(course).then(savedCourse => {
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
};

export const loadCourses = () => {
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses
    });
  });
};

export const deleteCourse = courseId => {
  return courseApi.deleteCourse(courseId).then(_ => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      courseId
    });
  });
};
