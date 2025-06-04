// src/components/admin/layout/AdminHeader.jsx
import { useState } from "react";
import logoUrp from "../../../assets/logo-urp.png";

function AdminHeader({ toggleSidebar, user }) {
  const [showNotifications, setShowNotifications] = useState(false);

  // Notificaciones de ejemplo
  const notifications = [
    { id: 1, text: "Nueva asesoría creada", time: "Hace 10 minutos" },
    { id: 2, text: "Profesor actualizado", time: "Hace 2 horas" },
    { id: 3, text: "Nuevo estudiante registrado", time: "Hace 1 día" },
  ];

  return (
    <header className="bg-urp-green text-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Botón de menú y logo */}
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-white hover:text-gray-200 transition-colors duration-200 mr-4 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="flex items-center">             
              <div>
                <h1 className="text-xl font-bold">AsesoraURP</h1>
                <p className="text-xs text-gray-200">
                  Sistema de Asesorías Académicas
                </p>
              </div>
            </div>
          </div>

          {/* Acciones del usuario */}
          <div className="flex items-center space-x-6">
            {/* Vista de Administrador */}
            <span className="hidden md:inline-block px-3 py-1 bg-green-800 rounded-full text-sm">
              Vista de Administrador
            </span>

            {/* Notificaciones */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-1 rounded-full hover:bg-green-800 transition-colors duration-200 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              {/* Dropdown de notificaciones */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 overflow-hidden">
                  <div className="py-2 px-3 bg-gray-100 border-b border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-800">
                      Notificaciones
                    </h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50"
                      >
                        <p className="text-sm text-gray-800">
                          {notification.text}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="py-2 px-3 text-center">
                    <button className="text-xs text-urp-green hover:underline">
                      Ver todas
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Perfil de usuario */}
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white text-urp-green flex items-center justify-center font-semibold mr-2">
                {user?.email?.charAt(0).toUpperCase() || "A"}
              </div>
              <span className="hidden md:inline-block text-sm">
                {user?.displayName || user?.email || "Administrador"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;