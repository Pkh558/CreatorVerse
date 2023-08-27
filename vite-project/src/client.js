import { createClient } from '@supabase/supabase-js';

const URL = 'https://bqlpikebrbvnxyokwwgl.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxbHBpa2VicmJ2bnh5b2t3d2dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwMzY2NDIsImV4cCI6MjAwNzYxMjY0Mn0.2O4KjnR27TTbARkM8OirL21wmqtpCsZ6_H9UiWL1mqE';

export const supabase = createClient(URL, API_KEY);
