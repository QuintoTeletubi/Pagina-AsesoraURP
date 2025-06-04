"use client";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ref, get } from "firebase/database";
import { auth, db } from "./components/config";

import StudentView from "./views/StudentView";
import AdminView from "./views/AdminView";

import Login from "./components/Login";
import LandingPage from "./components/LandingPage"; // Importamos el nuevo componente
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const uid = user.uid;
          const snapshot = await get(ref(db, `usuarios/${uid}`));
          const data = snapshot.val();

          if (data?.rol) {
            setIsLoggedIn(true);
            setUserRole(data.rol);
          } else {
            setIsLoggedIn(false);
            setUserRole(null);
          }
        } catch (error) {
          console.error("Error al obtener datos del usuario:", error);
          setIsLoggedIn(false);
          setUserRole(null);
        }
      } else {
        setIsLoggedIn(false);
        setUserRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      setUserRole(null);
      window.location.href = "/"; // Redireccionar manualmente al landing page
    } catch (error) {
      console.error("Error cerrando sesión:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-gray-700 text-xl font-semibold animate-pulse">Cargando...</div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Landing page como ruta principal para usuarios no autenticados */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                userRole === "student" ? (
                  <Navigate to="/student" replace />
                ) : userRole === "admin" ? (
                  <Navigate to="/admin" replace />
                ) : (
                  <div className="flex justify-center items-center h-screen">
                    <p className="text-center text-gray-600">
  Tu cuenta no tiene un rol asignado correctamente. Por favor contacta al administrador.
</p>

                  </div>
                )
              ) : (
                <LandingPage />
              )
            }
          />
          
          {/* Ruta de login */}
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                userRole === "student" ? (
                  <Navigate to="/student" replace />
                ) : (
                  <Navigate to="/admin" replace />
                )
              ) : (
                <Login />
              )
            }
          />
          
          <Route
            path="/student"
            element={
              isLoggedIn && userRole === "student" ? (
                <StudentView />
              ) : (
                <Navigate to="/Login" replace />
              )
            }
          />
          <Route
            path="/admin"
            element={
              isLoggedIn && userRole === "admin" ? (
                <AdminView />
              ) : (
                <Navigate to="/Login" replace />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;