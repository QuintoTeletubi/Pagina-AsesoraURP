import React from "react";

const AdvisoryDetails = ({
  courseName,
  professorName,
  day,
  time,
  classroom,
  onRegister,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800">{courseName}</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Profesor */}
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A7.963 7.963 0 0112 15c1.657 0 3.182.507 4.438 1.372M15 10a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-gray-600">
            <span className="font-semibold">Profesor:</span> {professorName}
          </p>
        </div>

        {/* Día y hora */}
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 4h10m-4 0v10m-2 0h4m-4 0H7m4 0v-4"
            />
          </svg>
          <p className="text-gray-600">
            <span className="font-semibold">Día y Hora:</span> {day}, {time}
          </p>
        </div>

        {/* Aula */}
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h11M9 21V3m12 10h-3m-6 0h6"
            />
          </svg>
          <p className="text-gray-600">
            <span className="font-semibold">Aula:</span> {classroom}
          </p>
        </div>
      </div>

      {/* Botón de inscripción */}
      <div className="mt-6">
        <button
          onClick={onRegister}
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition-colors duration-200"
        >
          Inscribirse
        </button>
      </div>
    </div>
  );
};

export default AdvisoryDetails;