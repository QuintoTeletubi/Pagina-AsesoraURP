import { useState } from "react";

function StudentSidebar({ isOpen, onNavigate, onClose }) {
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "🏠",
      description: "Vista principal"
    },
    {
      id: "advisories",
      label: "Mis Asesorías",
      icon: "📚",
      description: "Ver asesorías inscritas"
    },
    {
      id: "courseSelection", 
      label: "Selección de Cursos",
      icon: "📋",
      description: "Buscar asesorías disponibles"
    },
    {
      id: "schedule",
      label: "Horarios",
      icon: "📅", 
      description: "Ver calendario de asesorías"
    },
    {
      id: "profile",
      label: "Perfil",
      icon: "👤",
      description: "Información personal"
    }
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    onNavigate(itemId);
    // Cerrar sidebar en móvil después de seleccionar
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0 lg:static lg:inset-0
    `}>
      <div className="flex flex-col h-full">
        {/* Header del sidebar */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Navegación</h2>
          <p className="text-sm text-gray-500 mt-1">Accede a todas las funciones</p>
        </div>

        {/* Menu items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`
                w-full text-left p-3 rounded-lg transition-all duration-200 group
                ${activeItem === item.id 
                  ? 'bg-green-50 border-l-4 border-green-600 text-green-700' 
                  : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                }
              `}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${
                    activeItem === item.id ? 'text-green-600' : 'text-gray-400'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </nav>

        {/* Footer del sidebar */}
        <div className="p-4 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <span className="text-blue-600">💡</span>
              <div className="text-sm">
                <p className="font-medium text-blue-800">¿Necesitas ayuda?</p>
                <p className="text-blue-600">Contacta a soporte técnico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default StudentSidebar;