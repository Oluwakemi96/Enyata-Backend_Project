CREATE TABLE IF NOT EXISTS application_entries(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT NOT NULL references users(id),
  upload_CV TEXT,
  upload_photo TEXT,
  first_name VARCHAR(200) NOT NULL,
  last_name VARCHAR(200) NOT NULL,
  email VARCHAR(100) NOT NULL,
  date_of_birth VARCHAR NOT NULL,
  address VARCHAR(200) NOT NULL,
  university VARCHAR(200) NOT NULL,
  course_of_study VARCHAR(200) NOT NULL,
  cgpa NUMERIC(3,2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  batch_id VARCHAR(50) references batches(batch_id) ON UPDATE CASCADE ON DELETE RESTRICT,
  status VARCHAR(200) 
);