"use client";

import { useState, useEffect } from "react";

function CourseForm({ course, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    faculty: "Facultad de Ingeniería",
    professors: "",
    status: "Activo",
    description: "",
    credits: 3,
    semester: "I",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (course) {
      setFormData({
        name: course.name || "",
        code: course.code || "",
        faculty: course.faculty || "Facultad de Ingeniería",
        professors: Array.isArray(course.professors) ? course.professors.join(", ") : "",
        status: course.status || "Activo",
        description: course.description || "",
        credits: course.credits || 3,
        semester: course.semester || "I",
      });
    }
  }, [course]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre del curso es requerido";
    }

    if (!formData.code.trim()) {
      newErrors.code = "El código del curso es requerido";
    }

    if (!formData.professors.trim()) {
      newErrors.professors = "Al menos un profesor es requerido";
    }

    if (formData.credits < 1 || formData.credits > 6) {
      newErrors.credits = "Los créditos deben estar entre 1 y 6";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const courseData = {
      ...formData,
      professors: formData.professors
        .split(",")
        .map((prof) => prof.trim())
        .filter((prof) => prof),
      credits: Number.parseInt(formData.credits),
      activeAdvisories: course ? course.activeAdvisories : 0,
    };

    onSubmit(courseData);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn">
  <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
    {/* Encabezado */}
    <div className="flex justify-between items-center mb-6 border-b pb-4">
      <h3 className="text-2xl font-bold text-gray-800">
        {course ? "Editar Curso" : "Nuevo Curso"}
      </h3>
      <button
        onClick={onCancel}
        className="text-gray-400 hover:text-gray-600 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    {/* Formulario */}
    <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Columna izquierda */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nombre del Curso <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-urp-green focus:border-urp-green text-gray-800"
                  placeholder="Ej: Matemática I"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="code"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Código del Curso <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="code"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-urp-green focus:border-urp-green text-gray-800"
                  placeholder="Ej: MAT101"
                />
                {errors.code && (
                  <p className="mt-1 text-sm text-red-500">{errors.code}</p>
                )}
              </div>

              <div>
  <label
    htmlFor="faculty"
    className="block text-sm font-medium text-gray-700 mb-1"
  >
    ¿Qué tipo de ingeniería?
  </label>
  <select
    id="faculty"
    name="faculty"
    value={formData.faculty}
    onChange={handleChange}
    className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-urp-green focus:border-urp-green text-gray-800"
  >
    <option value="Ingeniería Informática" className="text-gray-800">
      Ingeniería Informática
    </option>
    <option value="Ingeniería Industrial" className="text-gray-800">
      Ingeniería Industrial
    </option>
    <option value="Ingeniería Mecatrónica" className="text-gray-800">
      Ingeniería Mecatrónica
    </option>
    <option value="Ingeniería Civil" className="text-gray-800">
      Ingeniería Civil
    </option>
    <option value="Ingeniería Electrónica" className="text-gray-800">
      Ingeniería Electrónica
    </option>
  </select>
</div>

              <div>
                <label
                  htmlFor="professors"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Profesores <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="professors"
                  name="professors"
                  value={formData.professors}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-urp-green focus:border-urp-green text-gray-800"
                  placeholder="Ej: Dr. García, Dra. López"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Separa múltiples profesores con comas
                </p>
                {errors.professors && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.professors}
                  </p>
                )}
              </div>
            </div>

            {/* Columna derecha */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="credits"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Créditos <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="credits"
                  name="credits"
                  value={formData.credits}
                  onChange={handleChange}
                  min="1"
                  max="6"
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-urp-green focus:border-urp-green text-gray-800"
                />
                {errors.credits && (
                  <p className="mt-1 text-sm text-red-500">{errors.credits}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="semester"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Semestre
                </label>
                <select
                  id="semester"
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-urp-green focus:border-urp-green text-gray-800"
                >
                  <option value="I">1er Ciclo</option>
                  <option value="II">2do Ciclo</option>
                  <option value="III">3er Ciclo</option>
                  <option value="IV">4to Ciclo</option>
                  <option value="V">5to Ciclo</option>
                  <option value="VI">6to Ciclo</option>
                  <option value="VII">7mo Ciclo</option>
                  <option value="VIII">8vo Ciclo</option>
                  <option value="IX">9no Ciclo</option>
                  <option value="X">10mo Ciclo</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Estado
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-urp-green focus:border-urp-green text-gray-800"
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-urp-green focus:border-urp-green"
              placeholder="Descripción del curso..."
            />
          </div>

          {/* Botones */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-urp-green border border-transparent rounded-lg shadow-sm hover:bg-green-800 transition-colors"
            >
              {course ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourseForm;