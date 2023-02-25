-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : sam. 25 fév. 2023 à 15:31
-- Version du serveur : 8.0.28
-- Version de PHP : 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `forfaits`
--

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE `clients` (
  `id` int NOT NULL,
  `nom_client` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `prenom_client` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `adresse_client` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `ville_client` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `code_postal_client` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `province_client` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `pays_client` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `telephone_client` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `courriel_client` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id`, `nom_client`, `prenom_client`, `adresse_client`, `ville_client`, `code_postal_client`, `province_client`, `pays_client`, `telephone_client`, `courriel_client`) VALUES
(2, 'Pierre', 'Katy', '2020 Blvd Saint Laurent', 'Montréal', 'H2N1K4', 'Québec', 'Canada', '438-2368749', 'kpierre@gmail.com'),
(3, 'Dupuis', 'Béatrice', '245 Rue Saint-Jacques', 'Montréal', 'H2Y3Y5', 'Québec', 'Canada', '514-8452624', 'bdupuis@gmail.com'),
(4, 'Charles', 'Scherline', '33 rue Aladin', 'Laval', 'H7K2R4', 'Québec', 'Canada', '438-2568784', 'scharles@gmail.com'),
(5, 'Jean', 'Brunette', '1800 Blvd Saint-Martin Ouest', 'Laval', 'H7S3G7', 'Québec', 'Canada', '438-4856245', 'bjean@gmail.com'),
(6, 'Braive', 'Alexandra', '3210 Rue Goyer', 'Montréal', 'H3S1K6', 'Québec', 'Canada', '514-7625846', 'abraive@gmail.com'),
(7, 'Justin', 'Nicole', '1212 rue Saint-Denis', 'Montréal', 'H2X3R3', 'Québec', 'Canada', '438-2567878', 'njustin@gmail.com'),
(8, 'Rivière', 'Carline', '2525 Bd de la Renaissance', 'Laval', 'H7L1F2', 'Québec', 'Canada', '514-7854235', 'criviere@gmail.com'),
(15, 'Jacques', 'Jean', 'Acton Vale', 'Montérégie', 'J0H4R5', 'QC', 'CA', '450-658-4545', 'jjacques@yahoo.fr'),
(16, 'Denis', 'Pierre-Luc', ' Abitibi-Témiscamingue', 'Amos', 'J9T0A2', 'QC', 'CA', '450-254-7894', 'pldenis@yahoo.fr'),
(17, 'Carline', 'Charles', 'Saint-Rosaire', 'Victoriaville', 'G6L0E1', 'QC', 'CA', '581-300-3030', 'ccharles@gmail.com'),
(18, 'Justin', 'Judith', ' rue Arago E', 'Victoriaville', 'G6L0E1', 'QC', 'CA', '581-300-2222', 'jjustin@yahoo.com'),
(19, 'Saint-Sauveur', 'Sabine', 'Saint-Lambert', 'Longueuil', 'J4P0A2', 'QC', 'CA', '450396-9999', 'ssaintsauveur@gmail.com'),
(20, 'Brossard', 'Fabienne', 'Saint-Lambert', 'Longueuil', 'J4P0A5', 'QC', 'CA', '450396-7777', 'fbrossard@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `forfaits`
--

CREATE TABLE `forfaits` (
  `id` int NOT NULL,
  `nom` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `code` varchar(5) COLLATE utf8mb4_general_ci NOT NULL,
  `nomEtablissement` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `adresseEtablissement` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `villeEtablissement` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `telephoneEtablissement` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `courrielEtablissement` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `siteWebEtablissement` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `dateDebut` date NOT NULL,
  `dateFin` date NOT NULL,
  `prix` decimal(10,0) NOT NULL,
  `nouveauPrix` decimal(10,0) NOT NULL,
  `rabais` decimal(10,0) DEFAULT NULL,
  `premium` tinyint(1) NOT NULL,
  `imageUrl` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `forfaits`
--

INSERT INTO `forfaits` (`id`, `nom`, `description`, `code`, `nomEtablissement`, `adresseEtablissement`, `villeEtablissement`, `telephoneEtablissement`, `courrielEtablissement`, `siteWebEtablissement`, `dateDebut`, `dateFin`, `prix`, `nouveauPrix`, `rabais`, `premium`, `imageUrl`) VALUES
(1, 'Forfait Smart phone', 'Iphone 13 Pro Blue', 'F0001', 'Communication plus', 'Carrefour Laval', 'Laval', '514-730-8206', 'josaintus@gmail.com', 'www.josaintus.com', '2022-10-18', '2024-10-21', '960', '1060', '0', 0, 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__340.jpg'),
(4, 'Forfait massage pour une personne', 'Massage pour une personne', 'F0004', 'JOSLS Massage', '33 rue Edith', 'Laval', '514-730-8282', 'josls@gmail.com', 'www.joslsinfo.com', '2022-11-02', '2022-12-31', '200', '125', '75', 1, 'https://cdn.pixabay.com/photo/2014/03/11/22/57/wellness-285590__340.jpg'),
(5, 'Forfait massage pour Bébé', 'Massage pour Bébé', 'F0005', 'JOSLS Massage', '33 rue Edith', 'Laval', '514-730-8282', 'josls@gmail.com', 'www.joslsinfo.com', '2022-11-02', '2022-12-31', '100', '60', '40', 1, 'https://images.unsplash.com/photo-1537673156864-5d2c72de7824?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hc3NhZ2UlMjBmb3JmYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),
(6, 'Forfait yoga en plein air', 'Yoga en plein air', 'F0006', 'JOSLS Yoga', '33 rue Edith', 'Laval', '514-730-8282', 'josls@gmail.com', 'www.joslsinfo.com', '2022-12-25', '2023-01-31', '250', '180', '70', 1, 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8eW9nYSUyMGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),
(7, 'Forfait yoga pour une personne', 'Yoga pour une personne', 'F0007', 'JOSLS Yoga', '33 rue Edith', 'Laval', '514-730-8282', 'josls@gmail.com', 'www.joslsinfo.com', '2022-12-25', '2023-01-31', '150', '100', '50', 1, 'https://cdn.pixabay.com/photo/2022/06/23/06/24/yoga-asanas-7279223__340.jpg'),
(8, 'Forfait Yoga à la plage', 'Yoga à la plage', 'F0008', 'JOSLS Yoga', '33 rue Edith', 'Laval', '514-730-8282', 'josls@gmail.com', 'www.joslsinfo.com', '2022-11-02', '2023-01-31', '190', '140', '50', 1, 'https://media.istockphoto.com/id/597963486/fr/photo/cest-une-journ%C3%A9e-parfaite-pour-le-yoga-%C3%A0-la-plage.jpg?b=1&s=170667a&w=0&k=20&c=AIsw32DQQGvsq0K5rYr18GdscfH69TTSmwvzGMjgZBc='),
(9, 'Forfait Yoga', 'Yoga d\\\'équipe', 'F0009', 'JOSLS Yoga', '33 rue Edith', 'Laval', '514-730-8282', 'josls@gmail.com', 'www.joslsinfo.com', '2022-11-19', '2023-01-31', '180', '110', '70', 0, 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
(10, 'Forfait Yoga entre les amis', 'Yoga en groupe d\'amis', 'F0010', 'JOSLS Yoga', '33 rue Edith', 'Laval', '514-730-8282', 'josls@gmail.com', 'www.joslsinfo.com', '2022-12-01', '2023-01-31', '300', '160', '140', 1, 'https://cdn.pixabay.com/photo/2017/01/20/11/44/yoga-1994667__340.jpg'),
(11, 'Forfait Yoga chaud ', 'Yoga par couple', 'F0011', 'JOSLS Massage', '33 rue Edith', 'Laval', '514-730-8282', 'josls@gmail.com', 'www.joslsinfo.com', '2023-01-22', '2023-02-22', '700', '450', '250', 1, 'https://media.istockphoto.com/id/1076946978/fr/photo/groupe-de-jeunes-sportifs-pratiquant-des-cours-dyoga-exercice-enfant.jpg?b=1&s=170667a&w=0&k=20&c=8pTdDLkA13vBnPC1fdrwXtTYfZ4ZeX5FuTS4pPhuc-I='),
(34, 'Forfait Yoga chaud en groupe ', 'Yoga en groupe', 'F0012', 'JOSLS Massage', '33 rue Edith', 'Laval', '514-730-8282', 'josls@gmail.com', 'www.joslsinfo.com', '2023-01-22', '2023-03-22', '700', '500', '200', 1, 'https://media.istockphoto.com/id/944619684/fr/photo/groupe-de-jeunes-sportifs-dans-pose-camel.jpg?b=1&s=170667a&w=0&k=20&c=Ipv8-hvzLoFWMmzsDAvsnEqK0rmNMiBlloQKvGvEdEs='),
(39, 'Forfait massage par couple ', 'Massage par couple', 'F0003', 'JOSLS Massage', '33 rue Edith', 'Laval', '514-730-8282', 'josls@gmail.com', 'www.joslsinfo.com', '2022-11-02', '2022-12-31', '500', '350', '150', 1, 'https://cdn.pixabay.com/photo/2020/03/09/19/06/massage-4916847__340.jpg'),
(48, 'Forfait Yoga chaud en famille ', 'Yoga en famille', 'F0013', 'JOSLS Yoga\r\nDonnées API', '33 rue Edith', 'Laval', '514-730-8282', 'josls@gmail.com', 'www.joslsinfo.com', '2023-01-22', '2023-04-22', '600', '500', '100', 0, 'https://images.unsplash.com/photo-1529693662653-9d480530a697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlJTIwZ3JhdHVpdGUlMjBzdXIlMjB5b2dhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),
(50, 'Forfait Yoga - méditation', ' Yoga - méditation', 'F0013', 'JOSLS Yoga', 'Fabreville', 'Laval', '514-730-8282', 'josls@gmail.com', 'www.joslsinfo.com', '2023-01-22', '2023-04-22', '600', '500', '100', 0, 'https://cdn.pixabay.com/photo/2020/07/07/13/52/woman-5380651__340.jpg'),
(51, 'Forfait Yoga chaud en amies', 'Yoga chaud en groupe d\'amies', 'F0013', 'JOSLS Yoga', '33 rue Edith', 'Laval', '514-730-8282', 'josls@gmail.com', 'www.joslsinfo.com', '2023-01-22', '2023-04-22', '800', '700', '100', 1, 'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
(62, 'Yoga pour les adolescents', 'Yoga pour les adolescents', 'Y0001', 'Massage JOS', 'Montréal', 'Montréal', '438-245-6345', 'massagejos@gmail.com', 'www.massagejos.com', '2023-02-01', '2023-02-08', '100', '70', '30', 1, 'https://img.lovepik.com/element/40073/7712.png_300.png'),
(97, 'Forfait premium', 'Forfait premium', 'P0001', 'Forfait premium', 'Forfait forfait', 'Ville-Marie', '333-333-3333', 'premium@gmail.com', 'www.premium.com', '2023-02-17', '2023-02-23', '700', '500', '200', 1, 'https://media.istockphoto.com/id/1322837679/fr/photo/vue-au-dessus-de-l%C3%A9paule-de-l%C3%A9cran-de-maquette-vide-blanc-pour-la-publicit%C3%A9.jpg?b=1&s=170667a&w=0&k=20&c=J4sWFLJep2hfPGENTXGKYraGPSBCeY4bYuPX2uX0T-w='),
(98, 'Forfait amusant', 'Amusant', 'A0001', 'JOS Amusant', '9200, Blvd St. Laurent, Montréal', 'Montréal', '438-222-2222', 'amusant@gmail.com', 'www.amusant.com', '2023-02-21', '2023-02-28', '400', '250', '150', 0, 'https://media.istockphoto.com/id/1173711966/fr/photo/concept-de-marketing-par-courriel-et-de-newsletter-main-de-lhomme-envoyant-le-message-et.jpg?b=1&s=170667a&w=0&k=20&c=GE7JTGkH6_QcGJUjYy9U1VoiHIy0M9XveBap20z7J4Y='),
(102, 'Massage ', 'Massage à domicile', 'M0001', 'JOS massage', '1 Notre-Dame Ouest', 'Victoriaville', '555-254-2345', 'massage@gmail.com', 'wwww.massage.com', '2023-02-23', '2023-02-28', '500', '300', '200', 0, 'https://cdn.pixabay.com/photo/2018/09/10/05/10/traditional-chinese-3666269__340.jpg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `forfaits`
--
ALTER TABLE `forfaits`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `forfaits`
--
ALTER TABLE `forfaits`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
