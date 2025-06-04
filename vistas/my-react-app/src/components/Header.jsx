"use client"

import { useState } from "react"
import logoUrp from "../assets/logo-urp.png"

function Header({ userRole, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-urp-green text-white shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2">
          {/* Logo alineado a la izquierda y pegado a la esquina */}
          <div className="flex items-center">
            <img src={logoUrp || "/placeholder.svg"} alt="URP Logo" className="h-10" />
            <div className="ml-2">
              <h1 className="text-xl font-bold">ASESORAUrp</h1>
              <p className="text-xs text-gray-200">Sistema de Asesorías Académicas</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {userRole === "student" ? (
              <span className="px-3 py-1 bg-green-800 rounded-full text-sm">Vista de Estudiante</span>
            ) : (
              <span className="px-3 py-1 bg-green-800 rounded-full text-sm">Vista de Administrador</span>
            )}

            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 mr-2">
                {userRole === "student" ? "E" : "A"}
              </div>
              <span className="text-sm">{userRole === "student" ? "Estudiante" : "Administrador"}</span>
            </div>

            <button
              onClick={onLogout}
              className="ml-4 px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
            >
              Cerrar Sesión
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-green-600">
            <div className="flex flex-col space-y-3">
              {userRole === "student" ? (
                <span className="px-3 py-1 bg-green-800 rounded-full text-sm self-start">Vista de Estudiante</span>
              ) : (
                <span className="px-3 py-1 bg-green-800 rounded-full text-sm self-start">Vista de Administrador</span>
              )}

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 mr-2">
                  {userRole === "student" ? "E" : "A"}
                </div>
                <span className="text-sm">{userRole === "student" ? "Estudiante" : "Administrador"}</span>
              </div>

              <button
                onClick={onLogout}
                className="self-start px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
