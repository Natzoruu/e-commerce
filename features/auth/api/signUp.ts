import { supabaseBrowser } from "@/lib/supabase/client";

export async function signUp(email: string, password: string) {
  const supabase = supabaseBrowser();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) throw error;
  return data;
}
