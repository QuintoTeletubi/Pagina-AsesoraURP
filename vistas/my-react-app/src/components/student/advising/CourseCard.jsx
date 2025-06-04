import React from "react";

const CourseCard = ({ courseName, courseCode, professors, onViewAdvisories }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
      <h3 className="text-xl font-bold text-gray-800">{courseName}</h3>
      <p className="text-gray-600 mt-2">
        <span className="font-semibold">Código:</span> {courseCode}
      </p>
      <p className="text-gray-600 mt-2">
        <span className="font-semibold">Profesores:</span> {professors.join(", ")}
      </p>
      <button
        onClick={onViewAdvisories}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors duration-200"
      >
        Ver Asesorías
      </button>
    </div>
  );
};

export default CourseCard;