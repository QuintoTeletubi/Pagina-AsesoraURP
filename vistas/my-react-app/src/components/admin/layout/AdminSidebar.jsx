// src/components/admin/layout/AdminSidebar.jsx
import { useState } from "react";
import logoUrp from "../../../assets/logo-urp.png";

function AdminSidebar({ isOpen, toggleSidebar, activeSection, onSectionChange, onLogout, user }) {
  // Array de elementos del menú
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
    },
    {
      id: "advising",
      label: "Asesorías",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: "courses",
      label: "Cursos",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
    },
    {
      id: "reports",
      label: "Reportes",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: "settings",
      label: "Configuración",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Overlay para móviles */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <div
  className={`fixed top-0 left-0 h-full bg-gray-900 shadow-lg z-30 transition-all duration-300 ease-in-out ${
    isOpen ? "w-64" : "w-16"
  } overflow-hidden`}
>
  {/* Logo y encabezado */}
  <div className="flex items-center justify-between p-4 border-b border-gray-700">
    <div className="flex items-center">
      <img
        src={logoUrp || "/placeholder.svg"}
        alt="URP Logo"
        className="h-10 w-10 rounded-full transition-transform duration-200 hover:scale-110"
      />
      {isOpen && (
        <span className="ml-3 font-bold text-white text-lg transition-opacity duration-300">
          ASESORAUrp
        </span>
      )}
    </div>
    <button
      onClick={toggleSidebar}
      className="md:hidden text-gray-400 hover:text-white transition-colors duration-200"
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>

  {/* Navegación */}
  <nav className="mt-6">
    <ul className="space-y-2 px-2">
      {menuItems.map((item) => (
        <li key={item.id} className="group relative">
          <button
            onClick={() => onSectionChange(item.id)}
            className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 ${
              activeSection === item.id
                ? "bg-urp-green text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <span className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
              {item.icon}
            </span>
            {isOpen && (
              <span className="ml-3 text-sm font-medium">{item.label}</span>
            )}
          </button>

          {/* Tooltip para modo colapsado */}
          {!isOpen && (
            <div className="absolute left-full top-0 ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
              {item.label}
            </div>
          )}
        </li>
      ))}
    </ul>
  </nav>

  {/* Pie del sidebar */}
  <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-urp-green text-white flex items-center justify-center transition-transform duration-200 hover:scale-110">
        {user?.email?.charAt(0).toUpperCase() || "A"}
      </div>
      {isOpen && (
        <div className="ml-3">
          <p className="text-sm font-medium text-white">
            {user?.displayName || user?.email?.split("@")[0] || "Admin"}
          </p>
          <p className="text-xs text-gray-400">{user?.email || "admin@urp.edu.pe"}</p>
        </div>
      )}
    </div>
    <button
      onClick={onLogout}
      className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 rounded-lg transition-colors duration-200"
    >
      Cerrar sesión
    </button>
  </div>
</div>
    </>
  );
}

export default AdminSidebar;