CREATE TABLE admins (
    id SERIAL PRIMARY KEY,
    upload_photo TEXT,
    name VARCHAR(200) NOT NULL,
    email_address VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(11) NOT NULL,
    country VARCHAR(50) NOT NULL,
    address VARCHAR(200) NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);