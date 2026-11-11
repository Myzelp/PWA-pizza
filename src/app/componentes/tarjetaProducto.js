import Image from "next/image";
import BotonEliminarProducto from "./botonEliminarProducto";

export default function TarjetaProducto({ producto }) {
  const publicBucketUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/productos/`;
  const imagenUrl = producto.imagen?.startsWith(publicBucketUrl)
    ? producto.imagen
    : null;
  const precio = Number(producto.precio);
  const precioTexto =
    producto.precio == null || Number.isNaN(precio)
      ? "Precio no disponible"
      : `$${precio.toFixed(2)} MXN`;

  return (
    <article className="h-full rounded-lg border p-4">
      {imagenUrl && (
        <Image
          src={imagenUrl}
          alt={producto.nombre || "Imagen del producto"}
          width={480}
          height={320}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="mb-4 h-52 w-full rounded-md bg-white/5 object-contain"
        />
      )}
      <h2 className="text-xl font-semibold">
        {producto.nombre || "Producto sin nombre"}
      </h2>
      <p className="mt-2 text-sm opacity-80">
        {producto.descripcion || "Sin descripción"}
      </p>
      <h3 className="mt-4 font-medium">Precio</h3>
      <p>{precioTexto}</p>
      <BotonEliminarProducto
        id={producto.id}
        nombre={producto.nombre || "este producto"}
      />
    </article>
  );
}