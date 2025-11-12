import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// ...
{/* Logos */}
<div className="flex justify-center items-center gap-4 mb-6">
  
  {/* Llama a la imagen desde la carpeta public */}
  <img src="/logo_UNSAAC.png" alt="Logo UNSAAC" className="w-20 h-20 object-contain" />

  {/* Llama a la otra imagen */}
  <img src="/logo_INFORMATICA.png" alt="Logo EPIIS" className="w-20 h-20 object-contain" />

</div>
// ...

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      // Simulación de login - redirige según el email
      if (email.includes('admin')) {
        navigate('/admin');
      } else if (email.includes('tutor')) {
        navigate('/tutor');
      } else {
        navigate('/estudiante');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Logos */}
<div className="flex justify-center items-center gap-4 mb-6">
  
  {/* Llama a la imagen desde la carpeta public */}
  <img src="/logo_UNSAAC.png" alt="Logo UNSAAC" className="w-20 h-20 object-contain" />

  {/* Llama a la otra imagen */}
  <img src="/logo_INFORMATICA.png" alt="Logo EPIIS" className="w-20 h-20 object-contain" />

</div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Sistema de Gestión de Tutorías
            </h1>
            <p className="text-sm text-gray-600 font-medium mb-1">
              Escuela Profesional de Ingeniería Informática y de Sistemas
            </p>
            <p className="text-xs text-gray-500">
              Universidad Nacional de San Antonio Abad del Cusco
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Correo Electrónico Institucional
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all outline-none"
                placeholder="ejemplo@unsaac.edu.pe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all outline-none pr-12"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <button type="button" className="text-sm text-blue-900 hover:text-orange-500 transition-colors font-medium">
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isLoading ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              © 2025 UNSAAC - EPIIS - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}