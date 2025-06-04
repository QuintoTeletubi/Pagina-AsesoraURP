"use client"

import { useState } from "react"
import { coursesData } from "../../../data/coursesData"
import CourseForm from "./CourseForm"
import CoursesTable from "./CoursesTable"
import CoursesStats from "./CoursesStats"
import CoursesFilters from "./CoursesFilters"

function CoursesManagement() {
  const [courses, setCourses] = useState(coursesData)
  const [showForm, setShowForm] = useState(false)
  const [editingCourse, setEditingCourse] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("Todos")

  // Filtrar cursos
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "Todos" || course.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleAddCourse = (courseData) => {
    if (editingCourse) {
      // Actualizar curso existente
      setCourses(courses.map((course) => (course.id === editingCourse.id ? { ...courseData, id: course.id } : course)))
      setEditingCourse(null)
    } else {
      // Agregar nuevo curso
      const newId = Math.max(0, ...courses.map((c) => c.id)) + 1
      setCourses([...courses, { ...courseData, id: newId }])
    }
    setShowForm(false)
  }

  const handleEditCourse = (course) => {
    setEditingCourse(course)
    setShowForm(true)
  }

  const handleDeleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course.id !== courseId))
  }

  const handleCancelForm = () => {
    setShowForm(false)
    setEditingCourse(null)
  }

  const handleShowAddForm = () => {
    setEditingCourse(null)
    setShowForm(true)
  }

  return (
    <div className="p-6">
      {/* Encabezado */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-urp-green"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <h1 className="text-2xl font-bold text-gray-800">Gestión de Cursos</h1>
        </div>
        <p className="text-gray-600">Administra los cursos disponibles para asesorías académicas</p>
      </div>

      {/* Estadísticas */}
      <CoursesStats courses={courses} />

      {/* Filtros y controles */}
      <CoursesFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onAddCourse={handleShowAddForm}
      />

      {/* Tabla de cursos */}
      <CoursesTable courses={filteredCourses} onEdit={handleEditCourse} onDelete={handleDeleteCourse} />

      {/* Modal del formulario */}
      {showForm && <CourseForm course={editingCourse} onSubmit={handleAddCourse} onCancel={handleCancelForm} />}
    </div>
  )
}
  
export default CoursesManagement
