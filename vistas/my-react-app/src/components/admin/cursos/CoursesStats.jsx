"use client";

function CoursesStats({ courses }) {
  const activeCourses = courses.filter((course) => course.status === "Activo").length;
  const totalAdvisories = courses.reduce((sum, course) => sum + course.activeAdvisories, 0);
  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      {/* Total de Cursos */}
      <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg shadow-md p-6 border-l-4 border-urp-green hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700">Total de Cursos</p>
            <p className="text-3xl font-bold text-gray-900">{courses.length}</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-green-200 to-green-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-urp-green"
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
          </div>
        </div>
      </div>

      {/* Cursos Activos */}
      <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700">Cursos Activos</p>
            <p className="text-3xl font-bold text-gray-900">{activeCourses}</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-green-200 to-green-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Asesorías Activas */}
      <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700">Asesorías Activas</p>
            <p className="text-3xl font-bold text-gray-900">{totalAdvisories}</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Total Créditos */}
      <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg shadow-md p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700">Total Créditos</p>
            <p className="text-3xl font-bold text-gray-900">{totalCredits}</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesStats;