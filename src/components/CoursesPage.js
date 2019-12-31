import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CoursesList from "./CoursesList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange);
  }, [courses]);

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };

  return (
    <>
      <h2>Courses</h2>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <CoursesList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}

export default CoursesPage;
