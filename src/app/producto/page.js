import { createClient } from "@/app/lib/supServer";
import TarjetaProducto from '../componentes/tarjetaProducto';
async function getProductos() {
  const supabase = await createClient();

  const { data: productos, error } = await supabase
    .from("productos")
    .select("id, nombre, descripcion, precio, imagen");

  if (error) {
    console.error("Error al obtener los productos:", error.message);
    return [];
  }

  return productos;
}

export default async function ProductoPage() {
  const productos = await getProductos();

  return (
    <section className="grid gap-4 p-4 grid-cols-3">
      {productos.map((pr) => (
        <TarjetaProducto key={pr.id} producto={pr} />
      ))}
    </section>
  );
}