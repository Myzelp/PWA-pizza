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
    <div className="flex flex-1 items-center justify-center px-4 py-14">
      <div className="w-full max-w-md p-8 shadow-md border bg-black/75 backdrop-blur-md border-white/20 rounded-2xl">
        <h2 className="mb-6 text-center font-bold text-white text-3xl">
          Iniciar Sesión
        </h2>

        {error && (
          <p className="mb-4 rounded bg-red-100 p-2 text-center text-sm text-red-600">
            {error}
          </p>
        )}

        <form onSubmit={manejarLogin} className="flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-white text-lg font-bold">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded border px-3 py-2 text-white bg-black/40 border-white/30 placeholder:text-white/50 focus:border-red-500"
              placeholder="tu@correo.com"
            />
          </div>

          <div>
            <label className="mb-1 block text-white text-lg font-bold">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded border px-3 py-2 text-white bg-black/40 border-white/30 placeholder:text-white/50 focus:border-red-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="w-1/2 rounded-lg bg-red-800 py-2 hover:scale-95 transition-transform block mb-2 text-lg font-bold tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mx-auto mt-2 text-white"
          >
            {cargando ? 'Iniciando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}