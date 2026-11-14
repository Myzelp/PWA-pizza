'use client';

import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
);

export default function BotonLogout() {
  const router = useRouter();

  const manejarLogout = async () => {
    const { error } = await supabase.auth.signOut();
    
    if (!error) {

      router.push('/login');
      router.refresh();
    }
  };

  return (
    <button
      onClick={manejarLogout}
      className="rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
    >
      Cerrar Sesión
    </button>
  );
}