import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseList from "./components/CourseList";

function App() {
  return (
    <div>
      <h1 className="text-center mt-3">JLC BookStore</h1>
      <CourseList />
    </div>
  );
}

export default App;
