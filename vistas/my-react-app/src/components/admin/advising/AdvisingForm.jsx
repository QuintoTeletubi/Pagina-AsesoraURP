"use client";

import { useState, useEffect } from "react";

// Days of the week
const DAYS = [
  { value: 0, label: "Lunes" },
  { value: 1, label: "Martes" },
  { value: 2, label: "Miércoles" },
  { value: 3, label: "Jueves" },
  { value: 4, label: "Viernes" },
  { value: 5, label: "Sábado" },
];

// Time options (8am to 8pm)
const TIME_OPTIONS = Array.from({ length: 13 }, (_, i) => {
  const hour = i + 8;
  return {
    value: `${hour}:00`,
    label: `${hour}:00`,
  };
});

function AdvisingForm({ courses, initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    courseId: "",
    day: 0,
    startTime: "8:00",
    endTime: "9:00",
    classroom: "",
    capacity: 10,
    professor: "",
    notes: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        courseId: initialData.courseId.toString(),
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Automatically set the end time one hour after the start time
    if (name === "startTime") {
      const startHour = Number.parseInt(value.split(":")[0]);
      const endHour = startHour + 1;
      if (endHour <= 20) {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
          endTime: `${endHour}:00`,
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedCourse = courses.find((c) => c.id === Number.parseInt(formData.courseId));

    onSubmit({
      ...formData,
      courseId: Number.parseInt(formData.courseId),
      capacity: Number.parseInt(formData.capacity),
      courseName: selectedCourse ? selectedCourse.name : "Curso sin nombre",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Curso */}
      <div>
        <label htmlFor="courseId" className="block text-sm font-semibold text-gray-700 mb-1">
          Curso
        </label>
        <select
          id="courseId"
          name="courseId"
          value={formData.courseId}
          onChange={handleChange}
          required
          className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-urp-green focus:border-urp-green text-gray-800"
        >
          <option value="">-- Selecciona un curso --</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name} - {course.code}
            </option>
          ))}
        </select>
      </div>

      {/* Profesor */}
      <div>
        <label htmlFor="professor" className="block text-sm font-semibold text-gray-700 mb-1">
          Profesor
        </label>
        <input
          type="text"
          id="professor"
          name="professor"
          value={formData.professor}
          onChange={handleChange}
          required
          placeholder="Nombre del profesor"
          className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-urp-green focus:border-urp-green text-gray-800"
        />
      </div>

      {/* Día y Aula */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="day" className="block text-sm font-semibold text-gray-700 mb-1">
            Día
          </label>
          <select
            id="day"
            name="day"
            value={formData.day}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-urp-green focus:border-urp-green text-gray-800"
          >
            {DAYS.map((day) => (
              <option key={day.value} value={day.value}>
                {day.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="classroom" className="block text-sm font-semibold text-gray-700 mb-1">
            Aula
          </label>
          <input
            type="text"
            id="classroom"
            name="classroom"
            value={formData.classroom}
            onChange={handleChange}
            required
            placeholder="Ej: A-301"
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-urp-green focus:border-urp-green text-gray-800"
          />
        </div>
      </div>

      {/* Hora de inicio y fin */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="startTime" className="block text-sm font-semibold text-gray-700 mb-1">
            Hora de inicio
          </label>
          <select
            id="startTime"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-urp-green focus:border-urp-green text-gray-800"
          >
            {TIME_OPTIONS.map((time) => (
              <option key={time.value} value={time.value}>
                {time.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="endTime" className="block text-sm font-semibold text-gray-700 mb-1">
            Hora de fin
          </label>
          <select
            id="endTime"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
            className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-urp-green focus:border-urp-green text-gray-800"
          >
            {TIME_OPTIONS.filter(
              (time) => Number.parseInt(time.value.split(":")[0]) > Number.parseInt(formData.startTime.split(":")[0]),
            ).map((time) => (
              <option key={time.value} value={time.value}>
                {time.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Capacidad */}
      <div>
        <label htmlFor="capacity" className="block text-sm font-semibold text-gray-700 mb-1">
          Capacidad (número de estudiantes)
        </label>
        <input
          type="number"
          id="capacity"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
          min="1"
          max="50"
          required
          className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-urp-green focus:border-urp-green text-gray-800"
        />
      </div>

      {/* Notas adicionales */}
      <div>
        <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-1">
          Notas adicionales (opcional)
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="3"
          className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-urp-green focus:border-urp-green text-gray-800"
          placeholder="Información adicional sobre la asesoría..."
        ></textarea>
      </div>

      {/* Botones */}
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-urp-green border border-transparent rounded-lg shadow-sm hover:bg-green-800"
        >
          {initialData ? "Actualizar" : "Guardar"}
        </button>
      </div>
    </form>
  );
}

export default AdvisingForm;