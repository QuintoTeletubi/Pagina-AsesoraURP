"use client";

import { useState } from "react";

// Days of the week for the schedule
const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

// Time slots for the schedule (8am to 8pm)
const TIME_SLOTS = Array.from({ length: 13 }, (_, i) => i + 8);

function Calendar({ advisingSessions }) {
  const [currentWeek, setCurrentWeek] = useState(0);

  // Get the current date
  const today = new Date();
  const dayOfWeek = today.getDay();

  // Calculate the start of the week (Monday)
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1) + currentWeek * 7);

  // Generate dates for the week
  const weekDates = DAYS.map((_, index) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + index);
    return date;
  });

  // Format date as DD/MM
  const formatDate = (date) => {
    return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fadeIn">
      {/* Encabezado del calendario */}
      <div className="p-4 bg-urp-green text-white flex justify-between items-center">
        <button
          onClick={() => setCurrentWeek(currentWeek - 1)}
          className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-urp-green" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <h3 className="text-lg font-semibold">
          {formatDate(weekDates[0])} - {formatDate(weekDates[5])}
        </h3>

        <button
          onClick={() => setCurrentWeek(currentWeek + 1)}
          className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-urp-green" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Tabla del calendario */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border border-gray-200 w-20"></th>
              {DAYS.map((day, index) => (
                <th key={day} className="p-3 border border-gray-200 min-w-[150px] text-center">
                  <div className="font-medium text-gray-800">{day}</div>
                  <div className="text-xs text-gray-500">{formatDate(weekDates[index])}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TIME_SLOTS.map((hour) => (
              <tr key={hour}>
                <td className="p-2 border border-gray-200 text-center text-sm font-medium text-gray-700">{hour}:00</td>
                {DAYS.map((day, dayIndex) => {
                  const sessionsForSlot = advisingSessions.filter(
                    (session) => session.day === dayIndex && Number.parseInt(session.startTime.split(":")[0]) === hour
                  );

                  return (
                    <td
                      key={day}
                      className="border border-gray-200 p-1 h-16 align-top calendar-cell hover:bg-gray-100 transition-colors duration-200"
                    >
                      {sessionsForSlot.map((session) => (
                        <div
                          key={session.id}
                          className="bg-green-50 border border-urp-green p-2 rounded-lg text-xs h-full advising-block hover:shadow-md transition-shadow duration-200"
                        >
                          <p className="font-bold text-green-800">
                            {session.startTime} - {session.endTime}
                          </p>
                          <p className="text-gray-700">{session.courseName}</p>
                          <p className="text-gray-700">Aula: {session.classroom}</p>
                        </div>
                      ))}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calendar;