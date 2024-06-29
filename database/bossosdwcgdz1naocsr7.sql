-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : bossosdwcgdz1naocsr7-mysql.services.clever-cloud.com:3306
-- Généré le : sam. 09 mars 2024 à 21:38
-- Version du serveur : 8.0.22-13
-- Version de PHP : 8.2.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bossosdwcgdz1naocsr7`
--

-- --------------------------------------------------------

--
-- Structure de la table `food_categories`
--

CREATE TABLE `food_categories` (
  `id` int NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_description` text,
  `category_image_path` varchar(255) DEFAULT NULL,
  `route` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `food_categories`
--

INSERT INTO `food_categories` (`id`, `category_name`, `category_description`, `category_image_path`, `route`) VALUES
(1, 'proteines', 'Explorez une variété d\'aliments riches en protéines pour nourrir votre corps et soutenir la croissance musculaire.', '../assets/img/categories/proteines.jpeg', 'shop/1'),
(2, 'legumes', 'Découvrez une sélection colorée de légumes frais et nutritifs pour un mode de vie sain.', '../assets/img/categories/vegetables.jpeg', 'shop/2'),
(3, 'fruits', 'Laissez-vous tenter par la douceur naturelle et les vitamines d\'une gamme diversifiée de fruits pour une collation savoureuse.', '../assets/img/categories/fruits.jpeg', 'shop/3'),
(4, 'epices', 'Rehaussez vos créations culinaires avec une pincée d\'épices et d\'herbes pleines de saveur.', '../assets/img/categories/spices.jpeg', 'shop/4'),
(5, 'Féculents', 'Dégustez la bonté de divers délices riches en amidon pour un repas satisfaisant et énergétique.', '../assets/img/categories/feculents.jpeg', 'shop/5'),
(6, 'Boissons', 'Restez rafraîchi avec une sélection de boissons qui répondent à différents goûts et préférences.', '../assets/img/categories/beverage.jpeg', 'shop/6'),
(7, 'Nos Recettes', 'Découvrez notre collection soigneusement sélectionnée de recettes alléchantes pour tout amateur de cuisine.', '../assets/img/categories/recipes.jpg', 'shop/7');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `category_id` int NOT NULL,
  `category` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_image_url` varchar(255) DEFAULT NULL,
  `product_price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `category_id`, `category`, `product_name`, `product_image_url`, `product_price`) VALUES
(1, 1, 'proteines', 'Poulet Bio', 'proteines_poulet_bio', 25.00),
(2, 1, 'proteines', 'Tofu', 'proteines_tofu', 18.00),
(3, 1, 'proteines', 'Poisson', 'proteines_poisson', 35.00),
(4, 1, 'proteines', 'Edamam', 'proteines_edamam', 25.00),
(5, 1, 'proteines', 'Lentilles', 'proteines_lentilles', 18.00),
(6, 1, 'proteines', 'Pois Chiches', 'proteines_pois_chiches', 14.00),
(7, 1, 'proteines', 'Viande rouge', 'proteines_viande_rouge', 18.00),
(8, 1, 'proteines', 'Sardine', 'proteines_sardine', 14.00),
(9, 1, 'proteines', 'Green Beans', 'proteines_green_beans', 16.00),
(10, 2, 'legumes', 'chou fleur', 'legumes_chou_fleur', 8.00),
(11, 2, 'legumes', 'Poivron', 'legumes_poivron', 3.00),
(12, 2, 'legumes', 'Tomate', 'legumes_tomate', 4.00),
(13, 2, 'legumes', 'Brocoli', 'legumes_brocoli', 5.00),
(14, 2, 'legumes', 'Carotte', 'legumes_carotte', 2.00),
(15, 3, 'fruits', 'Banane', 'fruits_banane', 1.00),
(16, 3, 'fruits', 'Pomme', 'fruits_pomme', 2.00),
(17, 3, 'fruits', 'Orange', 'fruits_orange', 1.00),
(18, 3, 'fruits', 'Fraise', 'fruits_fraise', 3.00),
(19, 3, 'fruits', 'Mangue', 'fruits_mangue', 5.00),
(20, 3, 'fruits', 'Apple', 'proteines_apple', 8.00);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `username` varchar(100) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `birth_date` varchar(50) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `status` varchar(100) DEFAULT NULL,
  `creation_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `first_name`, `last_name`, `email`, `birth_date`, `password`, `status`, `creation_date`) VALUES
(1, 'amaury', 'amaury', 'amosa', 'am@g.com', '6/06/1236', 'password', 'admin', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `food_categories`
--
ALTER TABLE `food_categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `food_categories`
--
ALTER TABLE `food_categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `food_categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
