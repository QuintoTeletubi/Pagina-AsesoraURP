import { useState } from "react";
import StudentHeader from "./StudentHeader";
import StudentSidebar from "./StudentSidebar";

function StudentLayout({ children, studentName, onLogout, onNavigate }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <StudentHeader 
        studentName={studentName}
        onLogout={onLogout}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className="flex">
        {/* Sidebar */}
        <StudentSidebar 
          isOpen={sidebarOpen}
          onNavigate={onNavigate}
          onClose={() => setSidebarOpen(false)}
        />
        
        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'lg:ml-64' : 'ml-0'
        }`}>
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
      
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default StudentLayout;