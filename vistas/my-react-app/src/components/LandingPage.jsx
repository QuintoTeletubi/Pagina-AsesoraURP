import { Link } from "react-router-dom";
import logoAsesoraUrp from "../assets/Logo AsesoraURP.png";
import campusUrp from "../assets/CampusURP.png";
import vistaAdmin from "../assets/VistaAdmin.png";
import vistaStudent from "../assets/VistaStudent.png";
import logoUrp from "../assets/logo-urp.png";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero / Portada con efecto parallax mejorado */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background con overlay mejorado */}
        <div className="absolute inset-0 z-0">
          <img
            src={campusUrp || "/placeholder.svg"}
            alt="Campus URP"
            className="w-full h-full object-cover transform scale-105 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-green-800/80 to-teal-700/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        {/* Elementos decorativos flotantes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-br from-yellow-400/15 to-orange-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Logo y título mejorados */}
          <div className="flex flex-col md:flex-row justify-center items-center mb-12 gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg"></div>
              <img
                src={logoAsesoraUrp || "/placeholder.svg"}
                alt="ASESORAUrp Logo"
                className="relative h-28 md:h-32 drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="relative">
                <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 drop-shadow-lg">
                  ASESORA
                </span>
                <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 drop-shadow-lg">
                  URP
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-green-400 to-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Título principal mejorado */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Accede a tus asesorías académicas{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300">
                ¡en un clic!
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-yellow-400/60 to-orange-400/60 rounded-full blur-sm"></div>
            </span>
          </h1>

          {/* Subtítulo mejorado */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-12 font-light leading-relaxed max-w-4xl mx-auto">
            Centraliza, consulta y reserva tus asesorías de Ingeniería con la plataforma más moderna de la URP
          </p>

          {/* CTA Button mejorado */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-70 group-hover:opacity-100"></div>
            <Link
              to="/login"
              className="relative inline-flex items-center px-12 py-6 bg-white text-emerald-700 font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-xl group-hover:bg-gray-50"
            >
              <span className="mr-3">Empieza ahora</span>
              <svg 
                className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Indicador de scroll */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        
        {/* Transición suave mejorada */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
      </div>

      {/* Cómo Funciona (3 pasos) con diseño mejorado */}
      <div id="como-funciona" className="py-32 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header de sección mejorado */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-6">
              <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wider">Proceso Simple</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Cómo Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Acceder a tus asesorías nunca fue tan sencillo. Sigue estos tres simples pasos y mejora tu rendimiento académico de forma eficiente.
            </p>
          </div>

          {/* Pasos con diseño mejorado */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {/* Paso 1 */}
            <div className="relative group">
              {/* Conector visual */}
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 transform -translate-y-1/2 z-10"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-100/50 group-hover:border-emerald-200">
                {/* Número del paso */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    1
                  </div>
                </div>
                
                {/* Icono mejorado */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-4 group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-300 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Inicia Sesión</h3>
                <p className="text-gray-600 leading-relaxed">
                  Accede con tu correo institucional @urp.edu.pe de forma rápida y segura a nuestra plataforma.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="relative group">
              {/* Conector visual */}
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300 transform -translate-y-1/2 z-10"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-100/50 group-hover:border-emerald-200">
                {/* Número del paso */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    2
                  </div>
                </div>
                
                {/* Icono mejorado */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-4 group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-300 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-emerald-600"
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
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Selecciona tu Curso</h3>
                <p className="text-gray-600 leading-relaxed">
                  Explora los horarios disponibles y elige el curso que necesitas reforzar con nuestros profesores.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="relative group">
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-100/50 group-hover:border-emerald-200">
                {/* Número del paso */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    3
                  </div>
                </div>
                
                {/* Icono mejorado */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-4 group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-300 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Reserva y Confirma</h3>
                <p className="text-gray-600 leading-relaxed">
                  Confirma tu asesoría y recibe recordatorios automáticos para que no te pierdas ninguna sesión.
                </p>
              </div>
            </div>
          </div>

          {/* CTA adicional */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              ¡Proceso en menos de 2 minutos!
            </div>
          </div>
        </div>
      </div>

      {/* Características Destacadas con diseño premium */}
      <div className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header de sección */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 border border-emerald-400/30">
              <span className="text-emerald-300 font-semibold text-sm uppercase tracking-wider">Herramientas Avanzadas</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Características 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300"> Destacadas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Diseñado pensando en ti, con todas las herramientas que necesitas para organizar tus asesorías académicas de manera profesional.
            </p>
          </div>

          {/* Grid de características mejorado */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Característica 1 - Acceso 24/7 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                {/* Icono con efecto glassmorphism */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300">
                  Acceso 24/7
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Desde tu móvil o PC, accede cuando lo necesites sin restricciones de horario. Siempre disponible para ti.
                </p>
              </div>
            </div>

            {/* Característica 2 - Panel Exclusivo */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300">
                  Panel Exclusivo
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Panel administrativo avanzado para gestión centralizada de todas las asesorías con controles intuitivos.
                </p>
              </div>
            </div>

            {/* Característica 3 - Notificaciones */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
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
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300">
                  Notificaciones
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Sistema de alertas inteligente que te mantiene informado en tiempo real sobre tus asesorías programadas.
                </p>
              </div>
            </div>

            {/* Característica 4 - Historial */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300">
                  Historial Completo
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Accede al registro detallado de todas tus sesiones anteriores con estadísticas y seguimiento de progreso.
                </p>
              </div>
            </div>
          </div>

          {/* Stats section adicional */}
          <div className="mt-20 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 mb-2">
                  500+
                </div>
                <div className="text-gray-300 font-medium">Estudiantes Activos</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 mb-2">
                  15+
                </div>
                <div className="text-gray-300 font-medium">Cursos Disponibles</div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 mb-2">
                  98%
                </div>
                <div className="text-gray-300 font-medium">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Nuestras Vistas con diseño premium */}
       <div className="py-32 bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-800 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header de sección */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 border border-emerald-400/30">
              <span className="text-emerald-300 font-semibold text-sm uppercase tracking-wider">Interfaces Avanzadas</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Nuestras 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300"> Vistas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Interfaces intuitivas diseñadas para facilitar tu experiencia académica con tecnología de vanguardia.
            </p>
          </div>

          {/* Grid de vistas con diseño premium */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vista Administrador */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                {/* Header de la tarjeta */}
                <div className="p-8 pb-4">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                        Panel Administrativo
                      </h3>
                      <p className="text-emerald-300 font-medium">Vista Profesores</p>
                    </div>
                  </div>
                </div>

                {/* Imagen con efecto glassmorphism */}
                <div className="px-8 pb-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-emerald-500/25 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
                    <img
                      src={vistaAdmin || "/placeholder.svg"}
                      alt="Vista Administrador"
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg p-3">
                        <p className="text-white text-sm font-medium">Control total de asesorías y horarios</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Descripción */}
                <div className="p-8 pt-4">
                  <p className="text-gray-300 leading-relaxed">
                    Gestión completa de asesorías con herramientas administrativas avanzadas. 
                    Control de horarios, estudiantes y reportes en tiempo real.
                  </p>
                  
                  {/* Features list */}
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-emerald-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Gestión de horarios</span>
                    </div>
                    <div className="flex items-center text-emerald-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Reportes avanzados</span>
                    </div>
                    <div className="flex items-center text-emerald-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Control de asistencia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vista Estudiante */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                {/* Header de la tarjeta */}
                <div className="p-8 pb-4">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-teal-500/25 transition-all duration-300 group-hover:scale-110 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors duration-300">
                        Panel Estudiantil
                      </h3>
                      <p className="text-teal-300 font-medium">Vista Estudiantes</p>
                    </div>
                  </div>
                </div>

                {/* Imagen con efecto glassmorphism */}
                <div className="px-8 pb-4">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-teal-500/25 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
                    <img
                      src={vistaStudent || "/placeholder.svg"}
                      alt="Vista Estudiante"
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg p-3">
                        <p className="text-white text-sm font-medium">Reserva y gestiona tus asesorías fácilmente</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Descripción */}
                <div className="p-8 pt-4">
                  <p className="text-gray-300 leading-relaxed">
                    Interfaz optimizada para estudiantes con acceso rápido a reservas, 
                    historial académico y seguimiento de progreso personalizado.
                  </p>
                  
                  {/* Features list */}
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-teal-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Reservas instantáneas</span>
                    </div>
                    <div className="flex items-center text-teal-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Historial académico</span>
                    </div>
                    <div className="flex items-center text-teal-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Notificaciones personalizadas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA adicional */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Experiencia diseñada para cada usuario
            </div>
          </div>
        </div>
      </div>

      {/* FAQ con diseño premium */}
      <div className="py-32 bg-gradient-to-br from-gray-800 via-gray-900 to-emerald-900 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          {/* Header de sección */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full mb-6 border border-emerald-400/30">
              <span className="text-emerald-300 font-semibold text-sm uppercase tracking-wider">Resuelve tus Dudas</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Preguntas 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300"> Frecuentes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Resolvemos tus dudas para que puedas aprovechar al máximo nuestra plataforma académica.
            </p>
          </div>

          {/* Preguntas con diseño premium */}
          <div className="space-y-6">
            {/* Pregunta 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  ¿Quién puede acceder?
                </h3>
                <p className="text-gray-300 leading-relaxed ml-14">
                  Todos los estudiantes de la URP con correo institucional activo pueden acceder a la plataforma de asesorías académicas de forma gratuita.
                </p>
              </div>
            </div>

            {/* Pregunta 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
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
                  </div>
                  ¿Puedo cambiar mi reserva?
                </h3>
                <p className="text-gray-300 leading-relaxed ml-14">
                  Sí, puedes modificar o cancelar tu reserva hasta 2 horas antes de la hora programada para la asesoría sin ningún inconveniente.
                </p>
              </div>
            </div>

            {/* Pregunta 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300 flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.944l5.657 5.657M12 21.213l-5.657-5.657M12 2.944l-5.657 5.657M12 21.213l5.657-5.657"
                      />
                    </svg>
                  </div>
                  ¿Cómo obtengo ayuda técnica?
                </h3>
                <p className="text-gray-300 leading-relaxed ml-14">
                  Puedes contactar al soporte técnico a través del correo soporte@urp.edu.pe o mediante el chat de ayuda disponible 24/7 en la plataforma.
                </p>
              </div>
            </div>
          </div>

          {/* CTA adicional */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ¿Tienes más preguntas? Contáctanos
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action con gradiente y animación - manteniendo diseño premium */}
      <div className="py-32 bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800 text-white relative overflow-hidden">
        {/* Elementos decorativos mejorados */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/10 to-emerald-300/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-300/20 to-white/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400/15 to-teal-400/15 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full mb-6">
              <span className="text-emerald-200 font-semibold text-sm uppercase tracking-wider">Únete Ahora</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            ¿Listo para 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300"> mejorar tus notas?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Únete a cientos de estudiantes que ya están aprovechando las asesorías académicas 
            para transformar su rendimiento universitario.
          </p>

          {/* Stats mejorados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 mb-2">
                95%
              </div>
              <div className="text-white/90 font-medium">Mejora en Notas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 mb-2">
                2min
              </div>
              <div className="text-white/90 font-medium">Para Registrarte</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 mb-2">
                24/7
              </div>
              <div className="text-white/90 font-medium">Soporte Disponible</div>
            </div>
          </div>         
        </div>
      </div>

      {/* Footer con diseño moderno */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Onda decorativa superior con color que coincide con la sección anterior */}
          <div className="h-16 w-full bg-b8e9b8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full transform translate-y-1">
              <path fill="#111827" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 py-12">
            {/* Logo y descripción */}
            <div>
              <div className="flex items-center mb-6">
                <img
                  src={logoUrp || "/placeholder.svg"}
                  alt="URP Logo"
                  className="h-12 mr-3"
                />
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                  ASESORAUrp
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Sistema de asesorías académicas para estudiantes de la
                Universidad Ricardo Palma.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/asesoraUrp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            {/* Enlaces útiles */}
            <div>
              <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
                Enlaces Útiles
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.urp.edu.pe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Intranet URP
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Políticas de Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:soporte@urp.edu.pe"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Soporte Técnico
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
                Contacto
              </h3>
              <p className="text-gray-400 mb-4">
                ¿Tienes alguna pregunta o sugerencia? No dudes en contactarnos.
              </p>
              <a
                href="mailto:soporte@urp.edu.pe"
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Enviar mensaje
              </a>
            </div>
            
          </div>

          <div className="border-t border-gray-800 mt-8 py-8 text-center text-gray-400 px-4">
            <p>Desarrollado por Ing. Informática URP</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} ASESORAUrp. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
