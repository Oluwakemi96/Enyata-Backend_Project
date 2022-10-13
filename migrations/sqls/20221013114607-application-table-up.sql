CREATE TABLE applications(
  id SERIAL PRIMARY KEY NOT NULL,
  upload_CV TEXT NOT NULL,
  upload_photo TEXT NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  date_of_birth VARCHAR NOT NULL,
  address VARCHAR NOT NULL,
  university VARCHAR NOT NULL,
  course_of_study VARCHAR NOT NULL,
  cgpa NUMERIC(3,2) NOT NULL
);