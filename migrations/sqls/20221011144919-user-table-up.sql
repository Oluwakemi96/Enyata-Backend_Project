CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email_address VARCHAR NOT NULL,
    phone_number INT NOT NULL,
    password TEXT NOT NULL,
    confirm_password TEXT NOT NULL
);