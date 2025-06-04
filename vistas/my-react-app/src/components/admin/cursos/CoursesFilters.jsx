"use client";

function CoursesFilters({ searchTerm, setSearchTerm, statusFilter, setStatusFilter, onAddCourse }) {
  return (
    <div className="bg-black/10 rounded-lg shadow-md p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Búsqueda */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Buscar por nombre o código..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-urp-green focus:border-urp-green text-gray-800"
            />
          </div>

          {/* Filtro por estado */}
          <div className="min-w-[150px]">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-urp-green focus:border-urp-green bg-white text-gray-800"
            >
              <option value="Todos" className="text-gray-800">Todos los estados</option>
              <option value="Activo" className="text-green-600">Activo</option>
              <option value="Inactivo" className="text-red-600">Inactivo</option>
            </select>
          </div>
        </div>

        {/* Botón agregar */}
        <button
          onClick={onAddCourse}
          className="bg-urp-green hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center transition-colors duration-200 shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Nuevo Curso
        </button>
      </div>
    </div>
  );
}

export default CoursesFilters;