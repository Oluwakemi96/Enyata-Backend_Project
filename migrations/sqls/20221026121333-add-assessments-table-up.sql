CREATE TABLE IF NOT EXISTS assessments (
    id SERIAL PRIMARY KEY,
    questions JSON NOT NULL,
    time_allocated TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
); 