"use client"

import { useState } from "react"

function CourseSelection({ courses, selectedCourse, onCourseSelect, onSearchClick }) {
  const [viewMode, setViewMode] = useState("cards") // 'cards' or 'dropdown'

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">¿En qué curso necesitas ayuda?</h2>
        <p className="text-gray-600">Selecciona un curso para ver las asesorías disponibles</p>
      </div>

      <div className="mb-6 flex justify-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setViewMode("cards")}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              viewMode === "cards" ? "bg-urp-green text-white" : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Tarjetas
          </button>
          <button
            type="button"
            onClick={() => setViewMode("dropdown")}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              viewMode === "dropdown" ? "bg-urp-green text-white" : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Lista
          </button>
        </div>
      </div>

      {viewMode === "dropdown" ? (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <label htmlFor="course-select" className="block text-sm font-medium text-gray-700 mb-2">
            Selecciona un curso
          </label>
          <select
            id="course-select"
            value={selectedCourse?.id || ""}
            onChange={(e) => {
              const courseId = Number.parseInt(e.target.value)
              const course = courses.find((c) => c.id === courseId)
              onCourseSelect(course)
            }}
            className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-urp-green focus:border-urp-green"
          >
            <option value="">-- Selecciona un curso --</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name} - {course.code}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => onCourseSelect(course)}
              className={`
                course-card p-4 rounded-lg shadow-md cursor-pointer
                ${selectedCourse?.id === course.id ? "selected" : "bg-white hover:bg-gray-50 border border-gray-200"}
              `}
            >
              <h3 className="font-bold text-lg text-gray-800">{course.name}</h3>
              <p className="text-gray-600 text-sm">{course.code}</p>
              <p className="text-gray-500 text-xs mt-2">{course.faculty}</p>
            </div>
          ))}
        </div>
      )}

      <div className="text-center">
        <button
          onClick={onSearchClick}
          disabled={!selectedCourse}
          className={`
            px-6 py-3 rounded-lg text-white font-medium transition-colors
            ${selectedCourse ? "bg-urp-green hover:bg-green-800" : "bg-gray-400 cursor-not-allowed"}
          `}
        >
          Buscar Asesorías
        </button>
      </div>
    </div>
  )
}

export default CourseSelection
