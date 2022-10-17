CREATE TABLE assessments (
    id SERIAL PRIMARY KEY,
    batch_id VARCHAR(50) REFERENCES batches(batch_id),
    questions JSONB NOT NULL,
    time_allocated INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);