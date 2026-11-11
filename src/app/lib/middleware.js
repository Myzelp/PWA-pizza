import { updateSession } from './lib/supabaseMiddleware'
 
export async function middleware(request) {
  return await updateSession(request)
}
 
export const config = {
  matcher: [
    // Excluye _next/static, _next/image, favicon.ico, imágenes públicas y el sw.js
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)|sw\\.js).*)',
  ],
}