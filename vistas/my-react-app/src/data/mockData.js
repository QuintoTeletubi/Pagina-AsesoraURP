// Datos de ejemplo para cursos
export const mockCourses = [
  {
    id: 1,
    name: "Cálculo I",
    code: "MAT101",
    faculty: "Facultad de Ingeniería",
  },
  {
    id: 2,
    name: "Física II",
    code: "FIS202",
    faculty: "Facultad de Ingeniería",
  },
  {
    id: 3,
    name: "Programación Orientada a Objetos",
    code: "INF203",
    faculty: "Facultad de Ingeniería",
  },
  {
    id: 4,
    name: "Estadística y Probabilidades",
    code: "EST101",
    faculty: "Facultad de Ciencias Económicas",
  },
  {
    id: 5,
    name: "Química General",
    code: "QUI101",
    faculty: "Facultad de Ciencias",
  },
  {
    id: 6,
    name: "Anatomía Humana",
    code: "MED101",
    faculty: "Facultad de Medicina",
  },
]

// Datos de ejemplo para sesiones de asesoría
export const mockAdvisingSessions = [
  {
    id: 1,
    courseId: 1,
    courseName: "Cálculo I",
    day: 0, // Lunes
    startTime: "10:00",
    endTime: "11:00",
    classroom: "A-301",
    professor: "Dr. García",
    capacity: 15,
  },
  {
    id: 2,
    courseId: 1,
    courseName: "Cálculo I",
    day: 2, // Miércoles
    startTime: "14:00",
    endTime: "15:00",
    classroom: "A-301",
    professor: "Dr. García",
    capacity: 15,
  },
  {
    id: 3,
    courseId: 2,
    courseName: "Física II",
    day: 1, // Martes
    startTime: "11:00",
    endTime: "12:00",
    classroom: "B-205",
    professor: "Dra. Rodríguez",
    capacity: 10,
  },
  {
    id: 4,
    courseId: 3,
    courseName: "Programación Orientada a Objetos",
    day: 3, // Jueves
    startTime: "16:00",
    endTime: "17:00",
    classroom: "Lab-C",
    professor: "Ing. Martínez",
    capacity: 20,
  },
  {
    id: 5,
    courseId: 5,
    courseName: "Química General",
    day: 4, // Viernes
    startTime: "9:00",
    endTime: "10:00",
    classroom: "Lab-Q",
    professor: "Dr. Sánchez",
    capacity: 12,
  },
]


