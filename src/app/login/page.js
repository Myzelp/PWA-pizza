'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

// Inicializa el cliente de Supabase con tus variables de entorno
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);
  const router = useRouter();

  const manejarLogin = async (e) => {
    e.preventDefault();
    setCargando(true);
    setError('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Correo o contraseña incorrectos.');
      setCargando(false);
    } else {
      // Redirige al inicio (o al dashboard) si el login es exitoso
      router.push('/');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md border">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Iniciar Sesión
        </h2>

        {error && (
          <p className="mb-4 rounded bg-red-100 p-2 text-center text-sm text-red-600">
            {error}
          </p>
        )}

        <form onSubmit={manejarLogin} className="flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded border px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none"
              placeholder="tu@correo.com"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded border px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="mt-4 w-full rounded bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:bg-blue-400"
          >
            {cargando ? 'Iniciando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}