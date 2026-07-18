import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase admin client.
 * Uses the SERVICE_ROLE key which bypasses RLS — NEVER import this in client components.
 * Only use in API routes (src/app/api/...) or server actions.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (!supabaseServiceRoleKey) {
  console.error(
    "SUPABASE_SERVICE_ROLE_KEY is not defined. Admin write operations will fail. " +
    "Add it to .env.local (never use NEXT_PUBLIC_ prefix for this key)."
  );
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    // Disable auto-refresh and session persistence for server-side usage
    autoRefreshToken: false,
    persistSession: false,
  },
});
