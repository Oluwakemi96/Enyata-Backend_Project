ALTER TABLE IF EXISTS application_entries 
  ADD COLUMN IF NOT EXISTS status VARCHAR(200);