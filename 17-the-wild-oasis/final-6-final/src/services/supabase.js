import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wbdhfzzsmaqroxyyemdb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiZGhmenpzbWFxcm94eXllbWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyNTYxNTUsImV4cCI6MjAyNTgzMjE1NX0.LMAqFovzlU3QasWWg_SwfQrqF66FjOSoyQtEYjMe9aw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
