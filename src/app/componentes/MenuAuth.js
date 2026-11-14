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

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSesion(session);
    });


    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSesion(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="flex items-center gap-4">
      {sesion ? (
       
        <BotonLogout />
      ) : (
    
        <Link href='/login'>LOGIN</Link>
      )}
    </div>
  );
}