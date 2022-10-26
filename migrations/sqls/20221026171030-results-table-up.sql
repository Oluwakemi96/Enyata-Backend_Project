CREATE TABLE assessments_results (
    id SERIAL PRIMARY KEY,
    batch_id VARCHAR(50) REFERENCES batches(batch_id) ON UPDATE CASCADE ON DELETE RESTRICT,
    applicant_id INT REFERENCES application_entries(id),
    answer JSON,
    score INT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW() 
);