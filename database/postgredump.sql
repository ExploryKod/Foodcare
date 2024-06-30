-- PostgreSQL doesn't use CREATE DATABASE IF NOT EXISTS, but you can still create a database if needed:
-- CREATE DATABASE foodcare;

-- Use the database (PostgreSQL uses \c instead of USE)
-- \c foodcare;

-- The equivalent of setting character set and other settings in PostgreSQL:
SET client_encoding TO 'UTF8';
SET timezone TO 'UTC';

-- Disable foreign key checks temporarily (PostgreSQL does not support this directly)
-- The standard approach is to manually disable and re-enable triggers if necessary
-- SET session_replication_role = 'replica';

DROP TABLE IF EXISTS food_categories;
CREATE TABLE food_categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL,
    category_description TEXT,
    category_image BYTEA,  -- BYTEA is used for binary data in PostgreSQL
    category_image_path VARCHAR(255)
);

DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    category_id INT NOT NULL, 
    category VARCHAR(255) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    product_image_url VARCHAR(255),
    product_price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES food_categories(id)
);

DROP TABLE IF EXISTS "user";
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(150),
    birth_date VARCHAR(50),
    password VARCHAR(100) NOT NULL,
    status VARCHAR(100),
    creation_date DATE
);

INSERT INTO "user" (username, first_name, last_name, email, birth_date, password, status, creation_date) 
VALUES
    ('amaury', 'amaury', 'amosa', 'am@g.com', '6/06/1236', 'password', 'admin', NULL);

INSERT INTO food_categories (category_name) VALUES ('proteines'), ('legumes'), ('fruits'), ('epices'), ('boissons');

INSERT INTO products (category, category_id, product_name, product_image_url, product_price)
VALUES
    ('proteines', 1, 'Poulet Bio', 'proteines_poulet_bio', 25),
    ('proteines', 1, 'Tofu', 'proteines_tofu', 18),
    ('proteines', 1, 'Poisson', 'proteines_poisson', 35),
    ('proteines', 1, 'Edamam', 'proteines_edamam', 25),
    ('proteines', 1, 'Lentilles', 'proteines_lentilles', 18),
    ('proteines', 1, 'Pois Chiches', 'proteines_pois_chiches', 14),
    ('proteines', 1, 'Viande rouge', 'proteines_viande_rouge', 18),
    ('proteines', 1, 'Sardine', 'proteines_sardine', 14),
    ('proteines', 1, 'Green Beans', 'proteines_green_beans', 16),
    ('legumes', 2, 'chou fleur', 'legumes_chou_fleur', 8),
    ('legumes', 2, 'Poivron', 'legumes_poivron', 3),
    ('legumes', 2, 'Tomate', 'legumes_tomate', 4),
    ('legumes', 2, 'Brocoli', 'legumes_brocoli', 5),
    ('legumes', 2, 'Carotte', 'legumes_carotte', 2),
    ('fruits', 3, 'Banane', 'fruits_banane', 1),
    ('fruits', 3, 'Pomme', 'fruits_pomme', 2),
    ('fruits', 3, 'Orange', 'fruits_orange', 1),
    ('fruits', 3, 'Fraise', 'fruits_fraise', 3),
    ('fruits', 3, 'Mangue', 'fruits_mangue', 5),
    ('fruits', 3, 'Apple', 'proteines_apple', 8),
    ('epices', 4, 'curry', 'epices_curry', 5),
    ('epices', 4, 'curcuma', 'epices_curcuma', 6);
