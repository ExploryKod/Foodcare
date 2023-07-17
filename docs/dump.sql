CREATE TABLE shop (
                      id INT NOT NULL AUTO_INCREMENT,
                      title VARCHAR(255) NOT NULL,
                      PRIMARY KEY (id)
);

CREATE TABLE item (
                      id INT NOT NULL AUTO_INCREMENT,
                      name VARCHAR(255) NOT NULL,
                      imageUrl VARCHAR(255) NOT NULL,
                      price DECIMAL(10,2) NOT NULL,
                      shop_id INT NOT NULL,
                      PRIMARY KEY (id),
                      FOREIGN KEY (shop_id) REFERENCES shop(id)
);

INSERT INTO shop (title) VALUES ('proteines');
INSERT INTO shop (title) VALUES ('légumes');

INSERT INTO item (name, imageUrl, price, shop_id) VALUES ('Poulet Bio', 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 25.00, 2);
INSERT INTO item (name, imageUrl, price, shop_id) VALUES ('Tofu', 'https://images.pexels.com/photos/4518586/pexels-photo-4518586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 18.00, 1);
INSERT INTO item (name, imageUrl, price, shop_id) VALUES ('Poisson', 'https://images.pexels.com/photos/3731945/pexels-photo-3731945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 35.00, 2);
INSERT INTO item (name, imageUrl, price, shop_id) VALUES ('Edamam', 'https://images.pexels.com/photos/3338529/pexels-photo-3338529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 25.00, 1);
INSERT INTO item (name, imageUrl, price, shop_id) VALUES ('Lentilles', 'https://images.pexels.com/photos/8108209/pexels-photo-8108209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 18.00, 2);
INSERT INTO item (name, imageUrl, price, shop_id) VALUES ('Pois Chiches', 'https://images.pexels.com/photos/4149256/pexels-photo-4149256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 14.00, 2);
INSERT INTO item (name, imageUrl, price, shop_id) VALUES ('Viande rouge', 'https://images.pexels.com/photos/8308887/pexels-photo-8308887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 18.00, 2);
INSERT INTO item (name, imageUrl, price, shop_id) VALUES ('Sardine', 'https://images.pexels.com/photos/8696562/pexels-photo-8696562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 14.00, 2);

