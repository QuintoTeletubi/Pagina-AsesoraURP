import { useState } from "react";
import StudentLayout from "../components/student/layout/StudentLayout";
import StudentDashboard from "../components/student/dashboard/StudentDashboard";
import AdvisoryDetails from "../components/student/advising/AdvisoryDetails";
import StudentProfile from "../components/student/profile/StudentProfile";
import CourseSelection from "../components/student/CourseSelection";
import ScheduleView from "../components/student/ScheduleView";
import { mockCourses, mockAdvisingSessions } from "../data/mockData";

function StudentView() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setCurrentView("advisoryDetails");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/";
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <StudentLayout
      studentName="Juan Pérez"
      onLogout={handleLogout}
      onNavigate={handleNavigate}
    >
      {currentView === "dashboard" && (
        <StudentDashboard
          studentName="Juan Pérez"
          totalAdvisories={mockAdvisingSessions.length}
          lastAdvisory={mockAdvisingSessions[0]}
          onRegister={() => alert("Registrado en la asesoría")}
        />
      )}
      {currentView === "advisoryDetails" && selectedCourse && (
        <AdvisoryDetails
          courseName={selectedCourse.name}
          professorName={selectedCourse.professor}
          schedule={`${selectedCourse.startTime} - ${selectedCourse.endTime}`}
          location={selectedCourse.classroom}
          onRegister={() => alert("Registrado en la asesoría")}
        />
      )}
      {currentView === "courseSelection" && (
        <CourseSelection
          courses={mockCourses}
          onCourseSelect={handleCourseSelect}
        />
      )}
      {currentView === "schedule" && (
        <ScheduleView
          advisories={mockAdvisingSessions}
        />
      )}
      {currentView === "profile" && (
        <StudentProfile
          studentName="Juan Pérez"
          email="juan.perez@urp.edu.pe"
          career="Ingeniería de Sistemas"
          enrolledCourses={mockCourses}
        />
      )}
    </StudentLayout>
  );
}

export default StudentView;