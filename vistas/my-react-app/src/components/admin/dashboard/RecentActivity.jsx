// src/components/admin/dashboard/RecentActivity.jsx
function RecentActivity() {
  const activities = [
    {
      id: 1,
      action: "Nueva asesoría creada",
      course: "Cálculo I",
      user: "Dr. García",
      time: "Hace 2 horas",
      icon: "✅",
    },
    {
      id: 2,
      action: "Asesoría modificada",
      course: "Física II",
      user: "Dra. Rodríguez",
      time: "Hace 5 horas",
      icon: "🖊️",
    },
    {
      id: 3,
      action: "Asesoría cancelada",
      course: "Química General",
      user: "Dr. Sánchez",
      time: "Hace 1 día",
      icon: "❌",
    },
    {
      id: 4,
      action: "Nuevo profesor registrado",
      course: "",
      user: "Ing. Martínez",
      time: "Hace 2 días",
      icon: "👨‍🏫",
    },
    {
      id: 5,
      action: "Nuevo curso añadido",
      course: "Programación Avanzada",
      user: "Admin",
      time: "Hace 3 días",
      icon: "📚",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-urp-green" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          Actividad Reciente
        </h3>
        
        <div className="relative pl-8 space-y-6 before:content-[''] before:absolute before:top-0 before:left-3 before:h-full before:w-0.5 before:bg-gray-200">
          {activities.map((activity) => (
            <div key={activity.id} className="relative">
              <div className="absolute left-[-30px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-white border-2 border-urp-green text-sm">
                {activity.icon}
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-200">
                <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                <div className="flex flex-wrap items-center text-xs text-gray-500 mt-1">
                  {activity.course && (
                    <>
                      <span className="bg-gray-100 px-2 py-1 rounded">{activity.course}</span>
                      <span className="mx-2">•</span>
                    </>
                  )}
                  <span>{activity.user}</span>
                  <span className="mx-2">•</span>
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;