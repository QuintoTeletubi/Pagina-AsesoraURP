// src/components/admin/advising/AdvisingList.jsx
function AdvisingList({ advisingSessions, onEdit, onDelete }) {
  // Days of the week
  const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  // Sort sessions by day and time
  const sortedSessions = [...advisingSessions].sort((a, b) => {
    if (a.day !== b.day) return a.day - b.day;
    return a.startTime.localeCompare(b.startTime);
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {sortedSessions.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* Encabezado de la tabla */}
            <thead className="bg-green-100">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-urp-green uppercase tracking-wider"
                >
                  Curso
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-urp-green uppercase tracking-wider"
                >
                  Profesor
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-urp-green uppercase tracking-wider"
                >
                  Día y Hora
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-urp-green uppercase tracking-wider"
                >
                  Aula
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-urp-green uppercase tracking-wider"
                >
                  Capacidad
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-bold text-urp-green uppercase tracking-wider"
                >
                  Acciones
                </th>
              </tr>
            </thead>

            {/* Cuerpo de la tabla */}
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedSessions.map((session, index) => (
                <tr
                  key={session.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-colors duration-150`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {session.courseName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {session.professor}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {DAYS[session.day]}
                    </div>
                    <div className="text-sm text-gray-500">
                      {session.startTime} - {session.endTime}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {session.classroom}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {session.capacity} estudiantes
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => onEdit(session)}
                      className="text-urp-green hover:text-green-800 mr-4 transition-colors duration-200"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            "¿Estás seguro de que deseas eliminar esta asesoría?"
                          )
                        ) {
                          onDelete(session.id);
                        }
                      }}
                      className="text-red-600 hover:text-red-900 transition-colors duration-200"
                    >
                      Eliminar
                    </button>
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-gray-500">No hay asesorías programadas.</p>
        </div>
      )}
    </div>
  );
}

export default AdvisingList;