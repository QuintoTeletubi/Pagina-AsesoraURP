"use client";

function CoursesTable({ courses, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {courses.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Encabezado de la tabla */}
            <thead className="bg-green-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-urp-green uppercase tracking-wider">
                  Curso
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-urp-green uppercase tracking-wider">
                  Profesores
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-urp-green uppercase tracking-wider">
                  Créditos
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-urp-green uppercase tracking-wider">
                  Asesorías
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-urp-green uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-right text-xs font-bold text-urp-green uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>

            {/* Cuerpo de la tabla */}
            <tbody className="bg-white divide-y divide-gray-300">
              {courses.map((course, index) => (
                <tr
                  key={course.id}
                  className={`${
                    index % 2 === 0 ? "bg-white hover:bg-gray-50" : "bg-gray-50 hover:bg-gray-100"
                  } transition-colors duration-200`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{course.name}</div>
                      <div className="text-sm text-gray-500">
                        {course.code} • Semestre {course.semester}
                      </div>
                      {course.description && <div className="text-xs text-gray-400 mt-1">{course.description}</div>}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {Array.isArray(course.professors) ? course.professors.join(", ") : course.professors}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        {course.credits} créditos
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          course.activeAdvisories > 0 ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {course.activeAdvisories} activas
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        course.status === "Activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      {/* Botón Editar */}
                      <button
                        onClick={() => onEdit(course)}
                        className="flex items-center text-urp-green hover:text-white bg-green-50 hover:bg-urp-green px-3 py-1 rounded transition-colors duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                        Editar
                      </button>

                      {/* Botón Eliminar */}
                      <button
                        onClick={() => {
                          if (window.confirm("¿Estás seguro de que deseas eliminar este curso?")) {
                            onDelete(course.id);
                          }
                        }}
                        className="flex items-center text-red-600 hover:text-white bg-red-50 hover:bg-red-600 px-3 py-1 rounded transition-colors duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Estado vacío
        <div className="text-center py-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-gray-300 mb-4"
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
          <p className="text-gray-500">No se encontraron cursos que coincidan con los filtros</p>
        </div>
      )}
    </div>
  );
}

export default CoursesTable;