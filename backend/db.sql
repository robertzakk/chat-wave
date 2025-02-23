CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	email TEXT NOT NULL UNIQUE,
	password TEXT NOT NULL,
	name TEXT NOT NULL,
	about TEXT,
	date_created TEXT NOT NULL
);

CREATE TABLE email_verification (
	id SERIAL PRIMARY KEY,
	verification_code INTEGER NOT NULL,
	expiration_date BIGINT NOT NULL,
	user_email TEXT NOT NULL,
	user_password TEXT NOT NULL,
	user_name TEXT NOT NULL,
	user_about TEXT,
	user_date_created BIGINT NOT NULL
);