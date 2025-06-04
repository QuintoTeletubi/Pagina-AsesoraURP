// src/components/admin/settings/AdminSettings.jsx
import { useState } from "react";

function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general");
  const [settings, setSettings] = useState({
    // General
    siteTitle: "ASESORAUrp",
    siteDescription: "Sistema de Asesorías Académicas",
    
    // Notificaciones
    notifications: true,
    emailAlerts: true,
    
    // Parámetros
    autoAssign: false,
    maxCapacity: 15,
    defaultDuration: 60,
    allowCancellations: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar la configuración
    alert("Configuración guardada");
  };

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Configuración</h1>
        <p className="text-gray-600">Personaliza el sistema según tus necesidades</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("general")}
            className={`px-4 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === "general"
                ? "text-urp-green border-b-2 border-urp-green"
                : "text-gray-600 hover:text-urp-green hover:bg-green-50"
            }`}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`px-4 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === "notifications"
                ? "text-urp-green border-b-2 border-urp-green"
                : "text-gray-600 hover:text-urp-green hover:bg-green-50"
            }`}
          >
            Notificaciones
          </button>
          <button
            onClick={() => setActiveTab("parameters")}
            className={`px-4 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === "parameters"
                ? "text-urp-green border-b-2 border-urp-green"
                : "text-gray-600 hover:text-urp-green hover:bg-green-50"
            }`}
          >
            Parámetros
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          {/* Configuración General */}
          {activeTab === "general" && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-800">Configuración General</h3>
              
              <div>
                <label htmlFor="siteTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Título del sitio
                </label>
                <input
                  type="text"
                  id="siteTitle"
                  name="siteTitle"
                  value={settings.siteTitle}
                  onChange={handleChange}
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-urp-green focus:border-urp-green transition-colors duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Descripción del sitio
                </label>
                <textarea
                  id="siteDescription"
                  name="siteDescription"
                  value={settings.siteDescription}
                  onChange={handleChange}
                  rows="3"
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-urp-green focus:border-urp-green transition-colors duration-200"
                ></textarea>
              </div>
            </div>
          )}
          
          {/* Configuración de Notificaciones */}
          {activeTab === "notifications" && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-800">Notificaciones</h3>
              
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="notifications" className="font-medium text-gray-700">
                    Notificaciones en plataforma
                  </label>
                  <p className="text-sm text-gray-500">Recibir notificaciones dentro de la plataforma</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={settings.notifications}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-11 h-6 rounded-full transition ${settings.notifications ? 'bg-urp-green' : 'bg-gray-300'}`}>
                    <div className={`w-5 h-5 rounded-full bg-white shadow transform transition ${settings.notifications ? 'translate-x-5' : 'translate-x-1'}`}></div>
                  </div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="emailAlerts" className="font-medium text-gray-700">
                    Alertas por correo
                  </label>
                  <p className="text-sm text-gray-500">Recibir notificaciones por correo electrónico</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    name="emailAlerts"
                    checked={settings.emailAlerts}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-11 h-6 rounded-full transition ${settings.emailAlerts ? 'bg-urp-green' : 'bg-gray-300'}`}>
                    <div className={`w-5 h-5 rounded-full bg-white shadow transform transition ${settings.emailAlerts ? 'translate-x-5' : 'translate-x-1'}`}></div>
                  </div>
                </label>
              </div>
            </div>
          )}
          
          {/* Configuración de Parámetros */}
          {activeTab === "parameters" && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-800">Parámetros del Sistema</h3>
              
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="autoAssign" className="font-medium text-gray-700">
                    Asignación automática
                  </label>
                  <p className="text-sm text-gray-500">Asignar automáticamente profesores a asesorías</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    name="autoAssign"
                    checked={settings.autoAssign}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-11 h-6 rounded-full transition ${settings.autoAssign ? 'bg-urp-green' : 'bg-gray-300'}`}>
                    <div className={`w-5 h-5 rounded-full bg-white shadow transform transition ${settings.autoAssign ? 'translate-x-5' : 'translate-x-1'}`}></div>
                  </div>
                </label>
              </div>
              
              <div>
                <label htmlFor="maxCapacity" className="block text-sm font-medium text-gray-700 mb-1">
                  Capacidad máxima por defecto
                </label>
                <input
                  type="number"
                  id="maxCapacity"
                  name="maxCapacity"
                  value={settings.maxCapacity}
                  onChange={handleChange}
                  min="1"
                  max="50"
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-urp-green focus:border-urp-green transition-colors duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="defaultDuration" className="block text-sm font-medium text-gray-700 mb-1">
                  Duración por defecto (minutos)
                </label>
                <select
                  name="defaultDuration"
                  id="defaultDuration"
                  value={settings.defaultDuration}
                  onChange={handleChange}
                  className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-urp-green focus:border-urp-green transition-colors duration-200"
                >
                  <option value="30">30 minutos</option>
                  <option value="45">45 minutos</option>
                  <option value="60">60 minutos</option>
                  <option value="90">90 minutos</option>
                  <option value="120">120 minutos</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="allowCancellations" className="font-medium text-gray-700">
                    Permitir cancelaciones
                  </label>
                  <p className="text-sm text-gray-500">Permitir que los estudiantes cancelen asesorías</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    name="allowCancellations"
                    checked={settings.allowCancellations}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-11 h-6 rounded-full transition ${settings.allowCancellations ? 'bg-urp-green' : 'bg-gray-300'}`}>
                    <div className={`w-5 h-5 rounded-full bg-white shadow transform transition ${settings.allowCancellations ? 'translate-x-5' : 'translate-x-1'}`}></div>
                  </div>
                </label>
              </div>
            </div>
          )}
          
          <div className="mt-8 pt-4 border-t">
            <button
              type="submit"
              className="px-4 py-2 bg-urp-green text-white rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-urp-green transition-all duration-200 hover:scale-105"
            >
              Guardar Configuración
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminSettings;