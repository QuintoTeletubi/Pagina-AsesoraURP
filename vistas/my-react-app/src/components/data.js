// src/components/data/data.js

// Datos de los cursos
export const mockCourses = [
    {
      id: 1,
      name: "Cálculo I",
      professor: "Dr. García",
      credits: 3,
      schedule: ["Lunes 10:00 AM", "Miércoles 2:00 PM"],
      location: "Aula 203",
    },
    {
      id: 2,
      name: "Física II",
      professor: "Dra. Rodríguez",
      credits: 4,
      schedule: ["Martes 8:00 AM", "Jueves 3:00 PM"],
      location: "Laboratorio 101",
    },
  ];
  
  // Datos de las sesiones de asesoría
  export const mockAdvisingSessions = [
    {
      id: 1,
      courseId: 1,
      courseName: "Cálculo I",
      day: "Miércoles",
      startTime: "14:00",
      endTime: "15:00",
      classroom: "A-301",
      professor: "Dr. García",
      capacity: 15,
    },
    {
      id: 2,
      courseId: 2,
      courseName: "Física II",
      day: "Martes",
      startTime: "11:00",
      endTime: "12:00",
      classroom: "B-205",
      professor: "Dra. Rodríguez",
      capacity: 10,
    },
  ];
  
  // Datos del estudiante
  export const mockStudentInfo = {
    name: "Juan Pérez",
    email: "juan.perez@urp.edu.pe",
    id: "20231001",
    totalAdvisories: 5,
    lastAdvisory: {
      course: "Cálculo I",
      professor: "Dr. García",
      date: "2023-10-01",
    },
    frequentCourses: ["Cálculo I", "Física II"],
  };