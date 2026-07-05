import { supabase } from "./supabaseClient";

export async function getTrills() {
  const { data, error } = await supabase
    .from("Trills")
    .select("*")
    .order("date", { ascending: false });
  console.log("data:", data, "error:", error);

  if (error) {
    throw error;
  }

  return data;
}

export async function createTrill(content, userName) {
  const { data, error } = await supabase
    .from("Trills")
    .insert([
      {
        content,
        userName,
        date: new Date().toISOString(),
      },
    ])
    .select();

  if (error) {
    throw error;
  }

  return data[0];
}
