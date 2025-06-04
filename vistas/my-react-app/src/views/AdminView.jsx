// src/views/AdminView.jsx
"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../components/config"; // Asegúrate de que este archivo esté configurado correctamente
import Calendar from "../components/admin/advising/Calendar";
import AdvisingForm from "../components/admin/advising/AdvisingForm";
import AdvisingList from "../components/admin/advising/AdvisingList";
import DashboardStats from "../components/admin/dashboard/DashboardStats";
import RecentActivity from "../components/admin/dashboard/RecentActivity";
import AdminSettings from "../components/admin/settings/AdminSettings";
import AdminSidebar from "../components/admin/layout/AdminSidebar";
import AdminHeader from "../components/admin/layout/AdminHeader";
import CoursesManagement from "../components/admin/cursos";
import { mockCourses, mockAdvisingSessions } from "../data/mockData";


function AdminView() {
  const [advisingSessions, setAdvisingSessions] = useState(mockAdvisingSessions);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingSession, setEditingSession] = useState(null);
  const [activeTab, setActiveTab] = useState("calendar"); // Para la sección de asesorías: "calendar", "list", "create"
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const handleAddSession = (newSession) => {
    if (editingSession) {
      // Update existing session
      setAdvisingSessions(
        advisingSessions.map((session) =>
          session.id === editingSession.id ? { ...newSession, id: session.id } : session,
        ),
      );
      setEditingSession(null);
    } else {
      // Add new session
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

  // Renderizado de la sección Dashboard
  const renderDashboard = () => (
    <div className="animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Bienvenido al panel de administración de ASESORAUrp</p>
      </div>
      
      {/* Estadísticas */}
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Actividad reciente */}
        <div>
          <RecentActivity />
        </div>
        
        {/* Próximas asesorías */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:shadow-lg">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-urp-green" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Próximas Asesorías
            </h3>
            
            {advisingSessions.length > 0 ? (
              <div className="space-y-4">
                {advisingSessions.slice(0, 5).map((session) => (
                  <div 
                    key={session.id} 
                    className="flex items-start pb-4 border-b border-gray-100 last:border-0 transition-all duration-200 hover:bg-green-50 p-2 rounded-md"
                  >
                    <div className="bg-green-100 p-2 rounded-full mr-4 text-urp-green">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">{session.courseName}</p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][session.day]}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{session.startTime} - {session.endTime}</span>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500">No hay asesorías programadas próximamente.</p>
              </div>
            )}
            
            <div className="mt-4 text-center">
              <button 
                onClick={() => setActiveSection("advising")} 
                className="text-urp-green hover:text-green-800 text-sm font-medium transition-colors duration-200 inline-flex items-center"
              >
                Ver todas las asesorías
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Renderizado de la sección de Asesorías
  const renderAdvising = () => (
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

  // Función principal para renderizar la sección activa
  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return renderDashboard();
      case "advising":
        return renderAdvising();
      case "settings":
        return <AdminSettings />;
      case "courses": // Nueva sección para cursos
        return (
          <div className="animate-fadeIn">
            <CoursesManagement />
          </div>
        );
      default:
        return <div className="text-center text-gray-500">Sección no encontrada</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onLogout={handleLogout}
        user={user}
      />
      
      {/* Contenido principal */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "md:ml-16"}`}>
        {/* Header */}
        <AdminHeader 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          onLogout={handleLogout}
          user={user}
        />
        
        {/* Contenido principal */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}

export default AdminView;