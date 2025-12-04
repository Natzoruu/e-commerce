import { supabaseBrowser } from "@/lib/supabase/client";

export async function signIn(email: string, password: string) {
  const supabase = supabaseBrowser();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}
