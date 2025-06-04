// src/components/admin/dashboard/AdminDashboard.jsx
import DashboardStats from "./DashboardStats";
import RecentActivity from "./RecentActivity";
import { mockAdvisingSessions } from "../../../data/mockData";

function AdminDashboard({ onNavigateToAdvising }) {
  // Obtener las próximas asesorías (las 5 primeras)
  const upcomingAdvisings = [...mockAdvisingSessions]
    .sort((a, b) => {
      if (a.day !== b.day) return a.day - b.day;
      return a.startTime.localeCompare(b.startTime);
    })
    .slice(0, 5);

  // Días de la semana para mostrar
  const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  return (
    <div className="animate-fadeIn">
      {/* Encabezado */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Bienvenido al panel de administración de ASESORAUrp</p>
      </div>

      {/* Estadísticas */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6 mb-6">
        <DashboardStats />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Actividad reciente */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-lg font-semibold text-urp-green mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            Actividad Reciente
          </h3>
          <RecentActivity />
        </div>

        {/* Próximas asesorías */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-lg font-semibold text-urp-green mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            Próximas Asesorías
          </h3>

          {upcomingAdvisings.length > 0 ? (
            <div className="space-y-4">
              {upcomingAdvisings.map((session) => (
                <div
                  key={session.id}
                  className="flex items-start pb-4 border-b border-gray-100 last:border-0 hover:bg-gray-100 p-2 rounded-md transition-all duration-200"
                >
                  <div className="bg-green-100 p-2 rounded-full mr-4 text-urp-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{session.courseName}</p>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span className="bg-gray-100 px-2 py-1 rounded">{DAYS[session.day]}</span>
                      <span className="mx-2">•</span>
                      <span>
                        {session.startTime} - {session.endTime}
                      </span>
                      <span className="mx-2">•</span>
                      <span>Aula {session.classroom}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Profesor: {session.professor}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto text-gray-300 mb-4"
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
              <p className="text-gray-500">No hay asesorías programadas próximamente.</p>
            </div>
          )}

          <div className="mt-4 text-center">
            <button
              onClick={onNavigateToAdvising}
              className="text-urp-green hover:text-green-800 text-sm font-medium transition-colors duration-200 inline-flex items-center"
            >
              Ver todas las asesorías
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;