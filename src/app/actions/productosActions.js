"use server";

import { createClient } from "../lib/supServer";
import { revalidatePath } from "next/cache";

export async function eliminarProducto(id) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("productos")
    .delete()
    .eq("id", id)
    .select("id");

  if (error) {
    return { error: error.message };
  }

  if (!data || data.length === 0) {
    return { error: "No se eliminó nada. Revisa la política DELETE en Supabase." };
  }

  revalidatePath("/producto");
  return { error: null };
}