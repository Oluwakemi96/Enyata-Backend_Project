CREATE TABLE IF NOT EXISTS assessments (
    id SERIAL PRIMARY KEY,
    questions JSON NOT NULL,
    time_allocated TEXT,
    batch_id VARCHAR(50) references batches(batch_id) ON UPDATE CASCADE ON DELETE RESTRICT, 
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
); 