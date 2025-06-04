"use client"

import { useState } from "react"
import { mockAdvisingSessions } from "../../data/mockData"

// Days of the week for the schedule
const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

// Time slots for the schedule (8am to 8pm)
const TIME_SLOTS = Array.from({ length: 13 }, (_, i) => i + 8)

function ScheduleView({ course }) {
  const [view, setView] = useState("calendar") // 'calendar' or 'list'

  // Filter advising sessions for the selected course
  const filteredSessions = mockAdvisingSessions.filter((session) => session.courseId === course.id)

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Asesorías disponibles para {course.name}</h2>
        <p className="text-gray-600">
          Código del curso: {course.code} | Facultad: {course.faculty}
        </p>
      </div>

      <div className="mb-6 flex justify-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setView("calendar")}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              view === "calendar" ? "bg-urp-green text-white" : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Calendario
          </button>
          <button
            type="button"
            onClick={() => setView("list")}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              view === "list" ? "bg-urp-green text-white" : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Lista
          </button>
        </div>
      </div>

      {view === "calendar" ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border border-gray-200 w-20"></th>
                  {DAYS.map((day) => (
                    <th key={day} className="p-3 border border-gray-200 min-w-[150px]">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIME_SLOTS.map((hour) => (
                  <tr key={hour}>
                    <td className="p-2 border border-gray-200 text-center text-sm font-medium text-gray-700">
                      {hour}:00
                    </td>
                    {DAYS.map((day, dayIndex) => {
                      const sessionForSlot = filteredSessions.find(
                        (session) =>
                          session.day === dayIndex && Number.parseInt(session.startTime.split(":")[0]) === hour,
                      )

                      return (
                        <td key={day} className="border border-gray-200 p-1 h-16 align-top calendar-cell">
                          {sessionForSlot && (
                            <div className="bg-green-100 p-2 rounded text-xs h-full advising-block">
                              <p className="font-bold text-green-800">
                                {sessionForSlot.startTime} - {sessionForSlot.endTime}
                              </p>
                              <p className="text-gray-700">Aula: {sessionForSlot.classroom}</p>
                              <p className="text-gray-700">Prof: {sessionForSlot.professor}</p>
                            </div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-4">
          {filteredSessions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredSessions.map((session) => (
                <div key={session.id} className="border rounded-lg p-4 bg-green-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-800">{DAYS[session.day]}</h3>
                      <p className="text-green-700 font-medium">
                        {session.startTime} - {session.endTime}
                      </p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Aula {session.classroom}
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium">Profesor:</span> {session.professor}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium">Cupos:</span> {session.capacity} estudiantes
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No hay asesorías disponibles para este curso.</p>
            </div>
          )}
        </div>
      )}

      {filteredSessions.length === 0 && view === "calendar" && (
        <div className="text-center py-4 bg-yellow-50 rounded-lg mt-4">
          <p className="text-yellow-700">No hay asesorías programadas para este curso actualmente.</p>
        </div>
      )}
    </div>
  )
}

export default ScheduleView
