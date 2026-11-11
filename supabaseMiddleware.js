import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
 
export async function updateSession(request) {
  let supabaseResponse = NextResponse.next({
    request,
  })
 
  // Se crea un cliente nuevo en cada petición para evitar compartir estado entre usuarios
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet, headers) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
         
          supabaseResponse = NextResponse.next({
            request,
          })
 
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
 
          if (headers) {
            Object.entries(headers).forEach(([key, value]) =>
              supabaseResponse.headers.set(key, value)
            )
          }
        },
      },
    }
  )
 
  // IMPORTANTE: No colocar código pesado entre createServerClient y la lectura del usuario/claims
  const { data: { user } } = await supabase.auth.getUser()
 
  // Protección de rutas: Redirige a /login si no hay usuario autenticado
  if (
    !user &&
    !request.nextUrl.pathname.startsWith('/') &&
    !request.nextUrl.pathname.startsWith('/auth')
  ) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }
 
  // IMPORTANTE: Retornar siempre supabaseResponse para mantener las cookies sincronizadas
  return supabaseResponse
}