-- CREATE DATABASE IF NOT EXISTS foodcare;
--
-- USE foodcare;

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
    ('proteines', 1,'Poulet Bio', 'proteines_poulet_bio', 25),
    ('proteines', 1,'Tofu', 'proteines_tofu', 18),
    ('proteines', 1,'Poisson', 'proteines_poisson', 35),
    ('proteines', 1,'Edamam', 'proteines_edamam', 25),
    ('proteines', 1,'Lentilles', 'proteines_lentilles', 18),
    ('proteines', 1,'Pois Chiches', 'proteines_pois_chiches', 14),
    ('proteines', 1,'Viande rouge', 'proteines_viande_rouge', 18),
    ('proteines', 1,'Sardine', 'proteines_sardine', 14),
    ('proteines', 1,'Green Beans', 'proteines_green_beans', 16),
    ('legumes', 2,'chou fleur', 'legumes_chou_fleur', 8),
    ('legumes', 2,'Poivron', 'legumes_poivron', 3),
    ('legumes', 2,'Tomate', 'legumes_tomate', 4),
    ('legumes', 2,'Brocoli', 'legumes_brocoli', 5),
    ('legumes', 2,'Carotte', 'legumes_carotte', 2),
    ('fruits', 3,'Banane', 'fruits_banane', 1),
    ('fruits', 3,'Pomme', 'fruits_pomme', 2),
    ('fruits', 3,'Orange', 'fruits_orange', 1),
    ('fruits', 3,'Fraise', 'fruits_fraise', 3),
    ('fruits', 3,'Mangue', 'fruits_mangue', 5),
    ('fruits', 3,'Apple', 'proteines_apple', 8);
    ('epices', 4,'curry', 'epices_curry', 5);
    ('epices', 4,'curcuma', 'epices_curcuma', 6);
