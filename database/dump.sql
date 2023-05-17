CREATE DATABASE IF NOT EXISTS foodcare;

USE foodcare;

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `food_categories`;
CREATE TABLE food_categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL,
    category_description TEXT NULL,
    category_image BLOB NULL,
    category_image_path VARCHAR(255) NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `products`;
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT NOT NULL, 
    category VARCHAR(255) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    product_image_url VARCHAR(255),
    product_price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES food_categories(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
                        `id` int(11) NOT NULL AUTO_INCREMENT,
                        `username` varchar(100) NOT NULL,
                        `first_name` varchar(100) DEFAULT NULL,
                        `last_name` varchar(100) DEFAULT NULL,
                        `email` varchar(150) DEFAULT NULL,
                        `birth_date` varchar(50) DEFAULT NULL,
                        `password` varchar(100) NOT NULL,
                        `status` varchar(100) DEFAULT NULL,
                        `creation_date` date DEFAULT NULL,
                        PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `user` (`id`, `username`, `first_name`, `last_name`, `email`, `birth_date`, `password`, `status`, `creation_date`) 
VALUES
    (1,	'amaury',	'amaury',	'amosa',	'am@g.com',	'6/06/1236',	'password',	'admin',	NULL);

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
