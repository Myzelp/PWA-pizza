'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import BotonLogout from './BotonLogout';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
);
export default function MenuAuth() {
  const [sesion, setSesion] = useState(null);

  useEffect(() => {
    // 1. Revisa si hay una sesión activa al cargar la página
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSesion(session);
    });

    // 2. Escucha los cambios (cuando el usuario inicia o cierra sesión)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSesion(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="flex items-center gap-4">
      {sesion ? (
        /* Si el usuario está logueado, mostramos el botón de salir */
        <BotonLogout />
      ) : (
        /* Si no hay sesión, mostramos el link para entrar */
        <Link href='/login'>LOGIN</Link>
      )}
    </div>
  );
}