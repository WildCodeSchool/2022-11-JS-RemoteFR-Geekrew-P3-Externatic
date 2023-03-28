-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: p3
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `candidacy`
--

DROP TABLE IF EXISTS `candidacy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidacy` (
  `id` int NOT NULL AUTO_INCREMENT,
  `candidate_id` int NOT NULL,
  `job_offer_id` int NOT NULL,
  `candidacy_date` date NOT NULL,
  `received_by_company` tinyint(1) NOT NULL,
  `read_by_company` tinyint(1) NOT NULL,
  `company_responded` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_candidacy_candidate_id` (`candidate_id`),
  KEY `fk_candidacy_job_offer_id` (`job_offer_id`),
  CONSTRAINT `fk_candidacy_candidate_id` FOREIGN KEY (`candidate_id`) REFERENCES `candidate` (`id`),
  CONSTRAINT `fk_candidacy_job_offer_id` FOREIGN KEY (`job_offer_id`) REFERENCES `job_offer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidacy`
--

LOCK TABLES `candidacy` WRITE;
/*!40000 ALTER TABLE `candidacy` DISABLE KEYS */;
INSERT INTO `candidacy` VALUES (1,1,1,'2023-02-27',1,0,0),(2,2,2,'2023-02-27',0,0,0),(4,1,3,'2023-03-27',0,0,0),(5,1,2,'2023-03-27',0,0,0),(6,1,1,'2023-03-28',0,0,0);
/*!40000 ALTER TABLE `candidacy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidate`
--

DROP TABLE IF EXISTS `candidate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidate` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cv` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `age` int NOT NULL,
  `gender` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `github` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `active` tinyint(1) NOT NULL,
  `soft_skills` text COLLATE utf8mb4_general_ci NOT NULL,
  `consultant_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_candidate_consultant_id` (`consultant_id`),
  KEY `fk_candidate_user_id` (`user_id`),
  CONSTRAINT `fk_candidate_consultant_id` FOREIGN KEY (`consultant_id`) REFERENCES `consultant` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_candidate_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidate`
--

LOCK TABLES `candidate` WRITE;
/*!40000 ALTER TABLE `candidate` DISABLE KEYS */;
INSERT INTO `candidate` VALUES (1,'https://urlduCV',33,'Female','https://github.com/adore-maribeth',1,'Esprit d\'équipe, Soif de connaissances, Fiabilité',1,3),(2,'https://urlduCV',36,'Female','https://github.com/tracey-middleton',1,'Sens de l\'initiative, Capacité à travailler en équipe, Envie d\'apprendre',1,4);
/*!40000 ALTER TABLE `candidate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidate_has_notification`
--

DROP TABLE IF EXISTS `candidate_has_notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidate_has_notification` (
  `candidate_id` int NOT NULL,
  `notification_id` int NOT NULL,
  PRIMARY KEY (`candidate_id`,`notification_id`),
  KEY `fk_candidate_has_notification_notification1_idx` (`notification_id`),
  KEY `fk_candidate_has_notification_candidate1_idx` (`candidate_id`),
  CONSTRAINT `fk_candidate_has_notification_candidate1` FOREIGN KEY (`candidate_id`) REFERENCES `candidate` (`id`),
  CONSTRAINT `fk_candidate_has_notification_notification1` FOREIGN KEY (`notification_id`) REFERENCES `notification` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidate_has_notification`
--

LOCK TABLES `candidate_has_notification` WRITE;
/*!40000 ALTER TABLE `candidate_has_notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `candidate_has_notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidate_has_technology`
--

DROP TABLE IF EXISTS `candidate_has_technology`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidate_has_technology` (
  `candidate_id` int NOT NULL,
  `technology_id` int NOT NULL,
  PRIMARY KEY (`candidate_id`,`technology_id`),
  KEY `fk_candidate_has_technology_technology1_idx` (`technology_id`),
  KEY `fk_candidate_has_technology_candidate1_idx` (`candidate_id`),
  CONSTRAINT `fk_candidate_has_technology_candidate1` FOREIGN KEY (`candidate_id`) REFERENCES `candidate` (`id`),
  CONSTRAINT `fk_candidate_has_technology_technology1` FOREIGN KEY (`technology_id`) REFERENCES `technology` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidate_has_technology`
--

LOCK TABLES `candidate_has_technology` WRITE;
/*!40000 ALTER TABLE `candidate_has_technology` DISABLE KEYS */;
INSERT INTO `candidate_has_technology` VALUES (1,1),(2,1),(1,2),(2,5),(1,7),(1,8),(2,9);
/*!40000 ALTER TABLE `candidate_has_technology` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `number_of_employee` int NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `field` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `siret` varchar(14) COLLATE utf8mb4_general_ci NOT NULL,
  `company_type` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_company_user_id` (`user_id`),
  CONSTRAINT `fk_company_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'Braka-C',150,'Braka-C, c\'est une sart up en plein essort spécialisée dans une nouvelle technologie de réduction de fracture et de plâtre ! Rejoignez-nous et cassez vous joyeusement le bras afin de constater notre expertise !','Santé','01234567891011','Start Up','https//:urldelimageonverraplustard',2),(2,'Taupiqueur',250,'Editeur de logiciel SaaS spécialisé dans le domaine du BTP','BTP','04136785471356','PME','https//:urldelimageonverraplustard',3),(3,'DigiDollars',95,'Nous sommes une ESN spécialisée dans le secteur banquire. Nous proposons à nos clients une solution clé en mains, et sommes spécialisée dans la migration vers une stack moderne.','Banque','98567439621584','ESN','https//:urldelimageonverraplustard',4);
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_has_field`
--

DROP TABLE IF EXISTS `company_has_field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company_has_field` (
  `company_id` int NOT NULL,
  `field_id` int NOT NULL,
  PRIMARY KEY (`company_id`,`field_id`),
  KEY `fk_company_has_field_field1_idx` (`field_id`),
  KEY `fk_company_has_field_company1_idx` (`company_id`),
  CONSTRAINT `fk_company_has_field_company1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  CONSTRAINT `fk_company_has_field_field1` FOREIGN KEY (`field_id`) REFERENCES `field` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_has_field`
--

LOCK TABLES `company_has_field` WRITE;
/*!40000 ALTER TABLE `company_has_field` DISABLE KEYS */;
INSERT INTO `company_has_field` VALUES (2,1),(1,2),(3,3);
/*!40000 ALTER TABLE `company_has_field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_has_notification`
--

DROP TABLE IF EXISTS `company_has_notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company_has_notification` (
  `company_id` int NOT NULL,
  `notification_id` int NOT NULL,
  PRIMARY KEY (`company_id`,`notification_id`),
  KEY `fk_company_has_notification_notification1_idx` (`notification_id`),
  KEY `fk_company_has_notification_company1_idx` (`company_id`),
  CONSTRAINT `fk_company_has_notification_company1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  CONSTRAINT `fk_company_has_notification_notification1` FOREIGN KEY (`notification_id`) REFERENCES `notification` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_has_notification`
--

LOCK TABLES `company_has_notification` WRITE;
/*!40000 ALTER TABLE `company_has_notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `company_has_notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultant`
--

DROP TABLE IF EXISTS `consultant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consultant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `gender` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_consultant_user_id` (`user_id`),
  CONSTRAINT `fk_consultant_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultant`
--

LOCK TABLES `consultant` WRITE;
/*!40000 ALTER TABLE `consultant` DISABLE KEYS */;
INSERT INTO `consultant` VALUES (1,'Male',1);
/*!40000 ALTER TABLE `consultant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultant_has_notification`
--

DROP TABLE IF EXISTS `consultant_has_notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consultant_has_notification` (
  `consultant_id` int NOT NULL,
  `notification_id` int NOT NULL,
  PRIMARY KEY (`consultant_id`,`notification_id`),
  KEY `fk_consultant_has_notification_notification1_idx` (`notification_id`),
  KEY `fk_consultant_has_notification_consultant1_idx` (`consultant_id`),
  CONSTRAINT `fk_consultant_has_notification_consultant1` FOREIGN KEY (`consultant_id`) REFERENCES `consultant` (`id`),
  CONSTRAINT `fk_consultant_has_notification_notification1` FOREIGN KEY (`notification_id`) REFERENCES `notification` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultant_has_notification`
--

LOCK TABLES `consultant_has_notification` WRITE;
/*!40000 ALTER TABLE `consultant_has_notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `consultant_has_notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contract`
--

DROP TABLE IF EXISTS `contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contract` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contract`
--

LOCK TABLES `contract` WRITE;
/*!40000 ALTER TABLE `contract` DISABLE KEYS */;
INSERT INTO `contract` VALUES (1,'CDD'),(2,'CDI'),(3,'Freelance'),(4,'Stage'),(5,'Alternance');
/*!40000 ALTER TABLE `contract` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite`
--

DROP TABLE IF EXISTS `favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite` (
  `candidate_id` int NOT NULL,
  `job_offer_id` int NOT NULL,
  PRIMARY KEY (`candidate_id`,`job_offer_id`),
  KEY `fk_candidate_has_job_offer_job_offer1_idx` (`job_offer_id`),
  KEY `fk_candidate_has_job_offer_candidate1_idx` (`candidate_id`),
  CONSTRAINT `fk_candidate_has_job_offer_candidate1` FOREIGN KEY (`candidate_id`) REFERENCES `candidate` (`id`),
  CONSTRAINT `fk_candidate_has_job_offer_job_offer1` FOREIGN KEY (`job_offer_id`) REFERENCES `job_offer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite`
--

LOCK TABLES `favorite` WRITE;
/*!40000 ALTER TABLE `favorite` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `field`
--

DROP TABLE IF EXISTS `field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `field` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `field`
--

LOCK TABLES `field` WRITE;
/*!40000 ALTER TABLE `field` DISABLE KEYS */;
INSERT INTO `field` VALUES (1,'BTP'),(2,'Santé'),(3,'Secteur banquaire');
/*!40000 ALTER TABLE `field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `handled_offer`
--

DROP TABLE IF EXISTS `handled_offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `handled_offer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `job_offer_id` int NOT NULL,
  `consultant_id` int NOT NULL,
  `number_of_candidates` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_handled_offer_job_offer_id` (`job_offer_id`),
  KEY `fk_handled_offer_consultant_id` (`consultant_id`),
  CONSTRAINT `fk_handled_offer_consultant_id` FOREIGN KEY (`consultant_id`) REFERENCES `consultant` (`id`),
  CONSTRAINT `fk_handled_offer_job_offer_id` FOREIGN KEY (`job_offer_id`) REFERENCES `job_offer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `handled_offer`
--

LOCK TABLES `handled_offer` WRITE;
/*!40000 ALTER TABLE `handled_offer` DISABLE KEYS */;
INSERT INTO `handled_offer` VALUES (1,1,1,5),(2,2,1,10),(3,3,1,4);
/*!40000 ALTER TABLE `handled_offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_offer`
--

DROP TABLE IF EXISTS `job_offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_offer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `salary` int NOT NULL,
  `title` varchar(180) COLLATE utf8mb4_general_ci NOT NULL,
  `lower_salary` int NOT NULL,
  `higher_salary` int NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `experience` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `location` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `contract_id` int DEFAULT NULL,
  `debut_date` date NOT NULL,
  `mission` text COLLATE utf8mb4_general_ci NOT NULL,
  `profile_needed` text COLLATE utf8mb4_general_ci NOT NULL,
  `interview_run` text COLLATE utf8mb4_general_ci NOT NULL,
  `remote` tinyint(1) NOT NULL,
  `bonuses` text COLLATE utf8mb4_general_ci NOT NULL,
  `work_hours` int NOT NULL,
  `date_of_creation` date NOT NULL,
  `number_of_candidates` int NOT NULL,
  `company_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_job_offer_contract_id` (`contract_id`),
  KEY `fk_job_offer_company_id` (`company_id`),
  CONSTRAINT `fk_job_offer_company_id` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  CONSTRAINT `fk_job_offer_contract_id` FOREIGN KEY (`contract_id`) REFERENCES `contract` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_offer`
--

LOCK TABLES `job_offer` WRITE;
/*!40000 ALTER TABLE `job_offer` DISABLE KEYS */;
INSERT INTO `job_offer` VALUES (1,4600,'Developpeur Fullstack JS',55000,70000,'Nous accompagnons un éditeur de logiciel SaaS qui compte 150 collaborateurs, la société évolue dans le domaine du BTP, et développe depuis 2017 une solution SaaS pour faciliter le quotidien des acteurs du milieu. La stratégie à long terme de la société est de s\'étendre à l\'international, les premières agences étrangères commencent déjà à voir le jour. Dans ce contexte novateur et dynamique, vous prenez part à cette aventure unique au sein d\'une équipe de 15 personnes à Nantes ou en full remote !','2 à 3 ans','Nantes, Paris',1,'2023-05-10','Au sein d\'une équipe technique de 6 collaborateurs, vos missions seront les suivantes : Migrer du code vers de nouveaux standards; Implémenter des fonctionnalités sur de nouvelles applications; Améliorer l’écosystème de nos outils de développement; Participer à la montée en compétence de toute l’équipe; Répondre aux besoins et aux questions de développeurs avec des problématiques back sous node et front sous react; Apporter une expertise lors de décision technique ou de chiffrages; Maintenir le code; Assurer une collaboration avec les équipes designs et techniques; Optimiser des applications; Concevoir et maintenir de la documentation; Participer à la résolution d’éventuelles pannes ou erreurs de conception;','Développeur autonome sur la stack JS et plus particulièrement sur node.js et react, vous : Avez de bonnes connaissances de Typescript, GraphQL, CSS et de la maintenance de mono-repo; Êtes une personne proactive, dynamique et communicante. Témoignez d\'une expérience dans une équipe de plus de 10 personnes, idéalement en environnement start-up/scale-up !','RDV avec le responsable produit; Test technique (1h max); RDV avec le CTO',1,'Mutuelle familiale à 100%; Tickets restaurants pris en charge à 60%',35,'2023-02-22',5,2),(2,4400,'Développeur Frontend React',52800,65000,'Nous sommes une start up qui évolue dans le domaine paramédical, et nous proposons une plateforme de collaboration avec les acteurs du secteurs (cliniques, hopitaux). Dans ce contexte, vous assurez l\'accès aux professionnels de santé, mais aussi aux patients, à une technologie de pointe de traitement des fractures.','0-2 ans','Tours',2,'2023-03-25','Au sein de notre équipe web comptant 5 collaborateurs, vous aurez pour mission de continuer le déploimement et de notre plateforme web via l\'amélioration de l\'interface client, implémenter de nouvelles fonctionnalités, assurer la documentation et la formation client, assurer la qualité et la maintenabilité du code, offrir une expérience agréable mais aussi fluide à nos utilisateurs.','Développeur junior, vous avez des bases solides en React, HTML/CSS/JS. Vous êtes dynamique, communicant et curieux.','RDV avec un membre de l\'équipe technique, RDV avec l\'assistante de direction',1,'Chèques vacancces',35,'2023-02-27',10,1),(3,5000,'Développeur backend',58000,72000,'Entreprise de sevice numérique accompagnant nos clients du secteur banquaire, nous cherchons à faire évoluer les outils de nos clients vers une stack technique plus moderne.','5+ ans','Toulouse',3,'2023-04-16','Vous serez amener à assurer la migration de l\'infrastucture serveur de nos client vers le framework PhP Symfony.','Développeur confirmé.','RDV CTO',0,'Bonbons',28,'2023-03-08',8,3);
/*!40000 ALTER TABLE `job_offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_offer_has_technology`
--

DROP TABLE IF EXISTS `job_offer_has_technology`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_offer_has_technology` (
  `job_offer_id` int NOT NULL,
  `technology_id` int NOT NULL,
  PRIMARY KEY (`job_offer_id`,`technology_id`),
  KEY `fk_job_offer_has_technology_technology1_idx` (`technology_id`),
  KEY `fk_job_offer_has_technology_job_offer1_idx` (`job_offer_id`),
  CONSTRAINT `fk_job_offer_has_technology_job_offer1` FOREIGN KEY (`job_offer_id`) REFERENCES `job_offer` (`id`),
  CONSTRAINT `fk_job_offer_has_technology_technology1` FOREIGN KEY (`technology_id`) REFERENCES `technology` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_offer_has_technology`
--

LOCK TABLES `job_offer_has_technology` WRITE;
/*!40000 ALTER TABLE `job_offer_has_technology` DISABLE KEYS */;
INSERT INTO `job_offer_has_technology` VALUES (2,1),(1,2),(2,2),(1,3),(3,3),(3,7),(1,8),(3,9);
/*!40000 ALTER TABLE `job_offer_has_technology` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `id` int NOT NULL AUTO_INCREMENT,
  `job_offer_id` int NOT NULL,
  `date` datetime NOT NULL,
  `message` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_notification_job_offer_id` (`job_offer_id`),
  CONSTRAINT `fk_notification_job_offer_id` FOREIGN KEY (`job_offer_id`) REFERENCES `job_offer` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `technology`
--

DROP TABLE IF EXISTS `technology`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `technology` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technology`
--

LOCK TABLES `technology` WRITE;
/*!40000 ALTER TABLE `technology` DISABLE KEYS */;
INSERT INTO `technology` VALUES (1,'JavaScript'),(2,'React'),(3,'NodeJS'),(4,'PHP'),(5,'Angular'),(6,'Java'),(7,'Express'),(8,'MySQL'),(9,'noSQL');
/*!40000 ALTER TABLE `technology` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `lastname` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `mail` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `linkedin` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `hashed_password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `location` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `roles` varchar(255) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '["user"]',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Gusty','Amethist','Gusty.Amethist@yopmail.com','https://www.linkedin.com/in/Gusty-Amethist/','xx.xx.xx.xx.xx','$argon2id$v=19$m=524288,t=5,p=1$L6jZcFQDpynOFGgpGF+EwA$y9GMxbL0/31Tk6R4yOhY8wBYQSGSLfiNk52PNOlbBd0','Chengdu','urldelimage','[\"user\", \"admin\", \"consultant\"]'),(2,'Courtnay','Rona','Courtnay.Rona@yopmail.com','https://www.linkedin.com/in/Courtnay-Rona/','xx.xx.xx.xx.xx','$argon2id$v=19$m=524288,t=5,p=1$L6jZcFQDpynOFGgpGF+EwA$y9GMxbL0/31Tk6R4yOhY8wBYQSGSLfiNk52PNOlbBd0','Mashhad','urldelimage','[\"user\", \"company\"]'),(3,'Adore','Maribeth','Adore.Maribeth@yopmail.com','https://www.linkedin.com/in/Adore-Maribeth/','xx.xx.xx.xx.xx','$argon2id$v=19$m=524288,t=5,p=1$L6jZcFQDpynOFGgpGF+EwA$y9GMxbL0/31Tk6R4yOhY8wBYQSGSLfiNk52PNOlbBd0','Semarang','urldelimage','[\"user\", \"candidate\"]'),(4,'Tracey','Middleton','Tracey.Middleton@yopmail.com','https://www.linkedin.com/in/Tracey-Middleton/','xx.xx.xx.xx.xx','$argon2id$v=19$m=524288,t=5,p=1$L6jZcFQDpynOFGgpGF+EwA$y9GMxbL0/31Tk6R4yOhY8wBYQSGSLfiNk52PNOlbBd0','Kigali','urldelimage','[\"user\", \"candidate\"]'),(5,'Kate','Rheingold','Kate.Rheingold@yopmail.com','https://www.linkedin.com/in/Kate-Rheingold/','xx.xx.xx.xx.xx','$argon2id$v=19$m=524288,t=5,p=1$L6jZcFQDpynOFGgpGF+EwA$y9GMxbL0/31Tk6R4yOhY8wBYQSGSLfiNk52PNOlbBd0','Dammam','urldelimage','[\"user\"]');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-28 14:28:21
