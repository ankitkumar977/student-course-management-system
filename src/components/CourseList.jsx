import React, { useEffect, useState } from "react";
import axios from "axios";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const URL = "http://localhost:5300/myapi/mycourses";
        const response = await axios.get(URL);
        setCourses(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Data load karne mein problem aa rahi hai.");
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Agar data load ho raha ho
  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <h3>Loading Courses...</h3>
      </div>
    );
  }

  // Agar koi error aaye
  if (error) {
    return (
      <div className="container mt-5 text-center text-danger">
        <h3>{error}</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5 shadow-lg p-4 bg-light rounded">
      <h2 className="text-center mb-4 text-primary fw-bold">
        JLC BookStore - Course List
      </h2>

      <div className="table-responsive">
        <table className="table table-hover table-bordered border-primary">
          <thead className="table-dark text-center">
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Trainer</th>
              <th>Enrollments</th>
            </tr>
          </thead>

          <tbody className="text-center align-middle">
            {courses.length > 0 ? (
              courses.map((course) => (
                <tr key={course._id || course.courseId}>
                  <td className="fw-bold">{course.courseId}</td>
                  <td className="text-start">{course.courseName}</td>
                  <td>{course.duration}</td>
                  <td>{course.trainer}</td>
                  <td>
                    <span className="badge bg-success rounded-pill px-3">
                      {course.enrollments}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  Koi course nahi mila.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CourseList;
