CREATE TABLE batches (
    id SERIAL NOT NULL,
    application_closure_date DATE NOT NULL,
    batch_id VARCHAR(50) UNIQUE PRIMARY KEY NOT NULL,
    instruction TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);