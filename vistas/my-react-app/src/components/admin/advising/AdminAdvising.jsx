// src/components/admin/advising/AdminAdvising.jsx
import { useState } from "react";
import Calendar from "./Calendar";
import AdvisingList from "./AdvisingList";
import AdvisingForm from "./AdvisingForm";
import { mockCourses, mockAdvisingSessions } from "../../../data/mockData";

function AdminAdvising() {
  const [advisingSessions, setAdvisingSessions] = useState(mockAdvisingSessions);
  const [showForm, setShowForm] = useState(false);
  const [editingSession, setEditingSession] = useState(null);
  const [activeTab, setActiveTab] = useState("calendar"); // "calendar", "list", "create"

  const handleAddSession = (newSession) => {
    if (editingSession) {
      setAdvisingSessions(
        advisingSessions.map((session) =>
          session.id === editingSession.id ? { ...newSession, id: session.id } : session,
        ),
      );
      setEditingSession(null);
    } else {
      const newId = Math.max(0, ...advisingSessions.map((s) => s.id)) + 1;
      setAdvisingSessions([...advisingSessions, { ...newSession, id: newId }]);
    }
    setShowForm(false);
    setActiveTab("calendar");
  };

  const handleEditSession = (session) => {
    setEditingSession(session);
    setShowForm(true);
    setActiveTab("create");
  };

  const handleDeleteSession = (sessionId) => {
    setAdvisingSessions(advisingSessions.filter((session) => session.id !== sessionId));
  };

  return (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Gestión de Asesorías</h1>
        <p className="text-gray-600">Administra las asesorías académicas</p>
      </div>
      
      {/* Tabs de navegación */}
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("calendar")}
            className={`flex items-center px-4 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === "calendar"
                ? "text-urp-green border-b-2 border-urp-green"
                : "text-gray-600 hover:text-urp-green hover:bg-green-50"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Calendario
          </button>
          <button
            onClick={() => setActiveTab("list")}
            className={`flex items-center px-4 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === "list"
                ? "text-urp-green border-b-2 border-urp-green"
                : "text-gray-600 hover:text-urp-green hover:bg-green-50"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Lista
          </button>
          <button
            onClick={() => {
              setEditingSession(null);
              setShowForm(true);
              setActiveTab("create");
            }}
            className={`flex items-center px-4 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === "create"
                ? "text-urp-green border-b-2 border-urp-green"
                : "text-gray-600 hover:text-urp-green hover:bg-green-50"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Nueva Asesoría
          </button>
        </div>
      </div>
      
      {/* Contenido según la pestaña activa */}
      {activeTab === "calendar" && (
        <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Calendario de Asesorías</h2>
            <button
              onClick={() => {
                setEditingSession(null);
                setShowForm(true);
                setActiveTab("create");
              }}
              className="bg-urp-green hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-200 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Nueva Asesoría
            </button>
          </div>
          
          <Calendar advisingSessions={advisingSessions} />
        </div>
      )}
      
      {activeTab === "list" && (
        <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Asesorías Programadas</h2>
            <button
              onClick={() => {
                setEditingSession(null);
                setShowForm(true);
                setActiveTab("create");
              }}
              className="bg-urp-green hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-200 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Nueva Asesoría
            </button>
          </div>
          
          <AdvisingList
            advisingSessions={advisingSessions}
            onEdit={handleEditSession}
            onDelete={handleDeleteSession}
          />
        </div>
      )}
      
      {activeTab === "create" && (
        <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {editingSession ? "Editar Asesoría" : "Crear Nueva Asesoría"}
          </h2>
          <AdvisingForm
            courses={mockCourses}
            initialData={editingSession}
            onSubmit={handleAddSession}
            onCancel={() => {
              setShowForm(false);
              setEditingSession(null);
              setActiveTab("calendar");
            }}
          />
        </div>
      )}
    </div>
  );
}

export default AdminAdvising;