import React from "react";

const StudentProfile = ({ studentInfo, advisorySummary }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Perfil del Estudiante</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Información básica */}
        <div>
          <p className="text-gray-600">
            <span className="font-semibold">Nombre:</span> {studentInfo.name}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Correo:</span> {studentInfo.email}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">ID:</span> {studentInfo.id}
          </p>
        </div>

        {/* Resumen de asesorías */}
        <div>
          <p className="text-gray-600">
            <span className="font-semibold">Total de Asesorías:</span>{" "}
            {advisorySummary.totalAdvisories}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Cursos Frecuentes:</span>{" "}
            {advisorySummary.frequentCourses.join(", ")}
          </p>
        </div>
      </div>

      {/* Botón para editar información */}
      <div className="mt-6">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors duration-200"
        >
          Editar Información
        </button>
      </div>
    </div>
  );
};

export default StudentProfile;