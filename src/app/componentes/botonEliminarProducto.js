"use client";

import { useState, useTransition } from "react";
import { eliminarProducto } from "@/app/actions/productosActions";

export default function BotonEliminarProducto({ id, nombre }) {
  const [pendiente, iniciarTransicion] = useTransition();
  const [error, setError] = useState("");

  function confirmarEliminacion() {
    if (!window.confirm(`¿Eliminar ${nombre} de forma permanente?`)) {
      return;
    }

    setError("");
    iniciarTransicion(async () => {
      try {
        const resultado = await eliminarProducto(id);
        if (resultado.error) {
          setError(resultado.error);
        }
      } catch {
        setError("No se pudo eliminar el producto.");
      }
    });
  }

  return (
    <div className="mt-5">
      <button
        type="button"
        onClick={confirmarEliminacion}
        disabled={pendiente}
        className="rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-950"
      >
        {pendiente ? "Eliminando..." : "Eliminar"}
      </button>
      {error && (
        <p role="alert" className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}