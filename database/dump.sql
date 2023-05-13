CREATE DATABASE IF NOT EXISTS foodcare;

USE foodcare;

CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

INSERT INTO products (category, name, image_url, price)
VALUES
    ('proteines', 'Poulet Bio', 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 25),
    ('proteines', 'Tofu', 'https://images.pexels.com/photos/4518586/pexels-photo-4518586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 18),
    ('proteines', 'Poisson', 'https://images.pexels.com/photos/3731945/pexels-photo-3731945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 35),
    ('proteines', 'Edamam', 'https://images.pexels.com/photos/3338529/pexels-photo-3338529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 25),
    ('proteines', 'Lentilles', 'https://images.pexels.com/photos/8108209/pexels-photo-8108209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 18),
    ('proteines', 'Pois Chiches', 'https://images.pexels.com/photos/4149256/pexels-photo-4149256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 14),
    ('proteines', 'Viande rouge', 'https://images.pexels.com/photos/8308887/pexels-photo-8308887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 18),
    ('proteines', 'Sardine', 'https://images.pexels.com/photos/8696562/pexels-photo-8696562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 14),
    ('proteines', 'Green Beans', 'https://images.pexels.com/photos/768089/pexels-photo-768089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 16),
    ('proteines', 'Green Beans', 'https://images.pexels.com/photos/768089/pexels-photo-768089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 16),
    ('legumes', 'Crucifère: chou fleur', 'https://images.pexels.com/photos/209482/pexels-photo-209482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 8),
    ('legumes', 'Poivron', 'https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 3),
    ('legumes', 'Tomate', 'https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 4),
    ('legumes', 'Brocoli', 'https://images.pexels.com/photos/4111827/pexels-photo-4111827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 5),
    ('legumes', 'Carotte', 'https://images.pexels.com/photos/4587974/pexels-photo-4587974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 2),
    ('fruits', 'Banane', 'https://images.pexels.com/photos/1627689/pexels-photo-1627689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1),
    ('fruits', 'Pomme', 'https://images.pexels.com/photos/5328688/pexels-photo-5328688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 2),
    ('fruits', 'Orange', 'https://images.pexels.com/photos/2186581/pexels-photo-2186581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1),
    ('fruits', 'Fraise', 'https://images.pexels.com/photos/1011317/pexels-photo-1011317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 3),
    ('fruits', 'Mangue', 'https://images.pexels.com/photos/2367207/pexels-photo-2367207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 5);
