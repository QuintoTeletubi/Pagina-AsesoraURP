import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../config";

function StudentHeader({ studentName, onLogout, onMenuClick }) {
  const handleLogout = async () => {
    try {
      await signOut(auth); // Cierra sesión con Firebase
      window.location.href = "/login"; // Redirige al login
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <header className="bg-green-600 text-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo y título */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md hover:bg-green-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold text-lg">A</span>
            </div>
            <h1 className="text-xl font-bold">AsesoraURP</h1>
          </div>
        </div>

        {/* Usuario y logout */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block text-right">
            <p className="font-medium">{studentName}</p>
            <p className="text-sm text-green-100">Estudiante</p>
          </div>

          <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
            <span className="font-medium text-sm">
              {studentName?.split(" ").map((n) => n[0]).join("").substring(0, 2)}
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md transition-colors font-medium"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
}

export default StudentHeader;