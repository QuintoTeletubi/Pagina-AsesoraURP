function StudentDashboard({ studentName, totalAdvisories, lastAdvisory, onRegister }) {
    const stats = [
      {
        title: "Asesorías Inscritas",
        value: "5",
        icon: "📚",
        color: "bg-green-500",
        change: "+2 esta semana"
      },
      {
        title: "Cursos Activos", 
        value: "6",
        icon: "📖",
        color: "bg-blue-500",
        change: "Semestre 2025-I"
      },
      {
        title: "Asesorías esta semana",
        value: "3",
        icon: "📅",
        color: "bg-yellow-500",
        change: "Próximas"
      }
    ];
  
    const recentAdvisories = [
      {
        id: 1,
        course: "Cálculo I",
        professor: "Dr. García",
        date: "Hoy",
        time: "10:00 AM",
        status: "próxima"
      },
      {
        id: 2,
        course: "Programación II",
        professor: "Ing. López", 
        date: "Mañana",
        time: "2:00 PM",
        status: "próxima"
      },
      {
        id: 3,
        course: "Física I",
        professor: "Dr. Martínez",
        date: "Ayer",
        time: "11:00 AM", 
        status: "completada"
      }
    ];
  
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                ¡Bienvenido, {studentName}! 👋
              </h1>
              <p className="text-gray-600 mt-1">
                Aquí tienes un resumen de tus actividades académicas
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <p className="text-sm text-gray-500">Fecha actual</p>
                <p className="text-lg font-semibold text-gray-900">
                  {new Date().toLocaleDateString('es-PE', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Próximas Asesorías */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Próximas Asesorías</h2>
              <p className="text-sm text-gray-600">Tus próximas sesiones programadas</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentAdvisories.slice(0, 3).map((advisory) => (
                  <div key={advisory.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{advisory.course}</h3>
                      <p className="text-sm text-gray-600">{advisory.professor}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm text-gray-500">📅 {advisory.date}</span>
                        <span className="text-sm text-gray-500">🕐 {advisory.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        advisory.status === 'próxima' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {advisory.status === 'próxima' ? 'Próxima' : 'Completada'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
                Ver todas las asesorías
              </button>
            </div>
          </div>
  
          {/* Acciones Rápidas */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Acciones Rápidas</h2>
              <p className="text-sm text-gray-600">Funciones principales del sistema</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-4">
                <button className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-left">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🔍</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Buscar Asesorías</h3>
                    <p className="text-sm text-gray-600">Encuentra asesorías disponibles</p>
                  </div>
                </button>
                
                <button className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-left">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📅</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Ver Horarios</h3>
                    <p className="text-sm text-gray-600">Consulta tu calendario</p>
                  </div>
                </button>
                
                <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-left">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">👤</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Mi Perfil</h3>
                    <p className="text-sm text-gray-600">Actualizar información</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Notificaciones */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-sm text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">🔔 Recordatorio</h2>
              <p className="mt-1 opacity-90">
                Tienes una asesoría de Cálculo I programada para hoy a las 10:00 AM
              </p>
            </div>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors font-medium">
              Ver detalles
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default StudentDashboard;