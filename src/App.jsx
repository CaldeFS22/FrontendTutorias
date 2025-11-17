import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import EstudianteDashboard from "./components/EstudianteDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import PagDenegada from "./components/PagDenegada";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Página de Login */}
        <Route path="/" element={<Login />} />

        {/* -------------------------
            RUTAS PROTEGIDAS
        -------------------------- */}

        {/* ADMIN */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* ESTUDIANTE */}
        <Route
          path="/estudiante/dashboard"
          element={
            <ProtectedRoute role="ESTUDIANTE">
              <EstudianteDashboard />
            </ProtectedRoute>
          }
        />

        {/* Página de acceso denegado */}
        <Route path="/acceso-denegado" element={<PagDenegada />} />

        {/* Redirección para rutas inexistentes */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
