require('dotenv').config(); // Load env vars at the top
const { createClient } = require('@supabase/supabase-js');

// Read from .env file
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = { supabase };
