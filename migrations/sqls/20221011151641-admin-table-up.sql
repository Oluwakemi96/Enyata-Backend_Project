CREATE TABLE admins(
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR ,
    last_name VARCHAR,
    email_address VARCHAR NOT NULL,
    phone_number INT,
    password TEXT NOT NULL
);