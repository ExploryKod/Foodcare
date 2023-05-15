CREATE DATABASE IF NOT EXISTS foodcare;

USE foodcare;

CREATE TABLE IF NOT EXISTS food_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL,
    category_description TEXT NULL,
    category_image BLOB NULL,
);

CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT NOT NULL, 
    category VARCHAR(255) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    product_image_url VARCHAR(255),
    product_price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES food_categories(id)
);

-- CREATE TABLE IF NOT EXISTS category_images (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     category_image_id INT NULL,
--     image_path VARCHAR(255) NULL,
--     image_blob BLOB NULL,
--     FOREIGN KEY (category_image_id) REFERENCES food_categories(id)
-- );

INSERT INTO food_categories (category_name) VALUES ('proteines'), ('legumes'), ('fruits'), ('epices'),('boissons');

INSERT INTO products (category, category_id, product_name, product_image_url, product_price)
VALUES
    ('proteines', 1,'Poulet Bio', 'assets/products/proteines_poulet_bio.jpg', 25),
    ('proteines', 1,'Tofu', 'assets/products/proteines_tofu.jpg', 18),
    ('proteines', 1,'Poisson', 'assets/products/proteines_poisson.jpg', 35),
    ('proteines', 1,'Edamam', 'assets/products/proteines_edamam.jpg', 25),
    ('proteines', 1,'Lentilles', 'assets/products/proteines_lentilles.jpg', 18),
    ('proteines', 1,'Pois Chiches', 'assets/products/proteines_pois_chiches.jpg', 14),
    ('proteines', 1,'Viande rouge', 'assets/products/proteines_viande_rouge.jpg', 18),
    ('proteines', 1,'Sardine', 'assets/products/proteines_sardine.jpg', 14),
    ('proteines', 1,'Green Beans', 'assets/products/proteines_green_beans.jpg', 16),
    ('legumes', 2,'Crucifère: chou fleur', 'assets/products/legumes_chou_fleur.jpg', 8),
    ('legumes', 2,'Poivron', 'assets/products/legumes_poivron.jpg', 3),
    ('legumes', 2,'Tomate', 'assets/products/legumes_tomate.jpg', 4),
    ('legumes', 2,'Brocoli', 'assets/products/legumes_brocoli.jpg', 5),
    ('legumes', 2,'Carotte', 'assets/products/legumes_carotte.jpg', 2),
    ('fruits', 3,'Banane', 'assets/products/fruits_banane.jpg', 1),
    ('fruits', 3,'Pomme', 'assets/products/fruits_pomme.jpg', 2),
    ('fruits', 3,'Orange', 'assets/products/fruits_orange.jpg', 1),
    ('fruits', 3,'Fraise', 'assets/products/fruits_fraise.jpg', 3),
    ('fruits', 3,'Mangue', 'assets/products/fruits_mangue.jpg', 5),
    ('fruits', 3,'Apple', 'assets/products/proteines_apple.jpg', 8);
