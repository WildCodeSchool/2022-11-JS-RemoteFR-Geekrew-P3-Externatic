-- MySQL Script generated by MySQL Workbench
-- ven. 17 févr. 2023 18:37:44
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema p3
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `p3` ;

-- -----------------------------------------------------
-- Schema p3
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `p3` DEFAULT CHARACTER SET utf8mb4 ;
USE `p3` ;

-- -----------------------------------------------------
-- Table `p3`.`candidacy`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`candidacy` ;

CREATE TABLE IF NOT EXISTS `p3`.`candidacy` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `candidate_id` INT NOT NULL,
  `job_offer_id` INT NOT NULL,
  `candidacy_date` DATE NOT NULL,
  `received_by_company` TINYINT(1) NOT NULL,
  `read_by_company` TINYINT(1) NOT NULL,
  `company_responded` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_candidacy_candidate_id` (`candidate_id` ASC) VISIBLE,
  INDEX `fk_candidacy_job_offer_id` (`job_offer_id` ASC) VISIBLE,
  CONSTRAINT `fk_candidacy_candidate_id`
    FOREIGN KEY (`candidate_id`)
    REFERENCES `p3`.`candidate` (`id`),
  CONSTRAINT `fk_candidacy_job_offer_id`
    FOREIGN KEY (`job_offer_id`)
    REFERENCES `p3`.`job_offer` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

LOCK TABLES `candidacy` WRITE;
/*!40000 ALTER TABLE `candidacy` DISABLE KEYS */;
INSERT INTO `candidacy` VALUES
(1, 1, 1, '2023-02-27', 1, 0, 0), (2, 2, 2, '2023-02-27', 0, 0, 0);

UNLOCK TABLES;
-- -----------------------------------------------------
-- Table `p3`.`candidate`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`candidate` ;

CREATE TABLE IF NOT EXISTS `p3`.`candidate` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cv` VARCHAR(255) NOT NULL,
  `age` INT NOT NULL,
  `gender` VARCHAR(25) NOT NULL,
  `github` VARCHAR(255) NOT NULL,
  `active` TINYINT(1) NOT NULL,
  `soft_skills` TEXT NOT NULL,
  `consultant_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_candidate_consultant_id` (`consultant_id` ASC) VISIBLE,
  INDEX `fk_candidate_user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_candidate_consultant_id`
    FOREIGN KEY (`consultant_id`)
    REFERENCES `p3`.`consultant` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_candidate_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `p3`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

LOCK TABLES `candidate` WRITE;
/*!40000 ALTER TABLE `candidate` DISABLE KEYS */;
INSERT INTO `candidate` VALUES
(1,
"https://urlduCV",
33,
'Female',
'https://github.com/adore-maribeth',
1,
"Esprit d'équipe, Soif de connaissances, Fiabilité",
1,
3),
(2,
"https://urlduCV",
36,
'Female',
'https://github.com/tracey-middleton',
1,
"Sens de l'initiative, Capacité à travailler en équipe, Envie d'apprendre",
1,
4);

UNLOCK TABLES;
-- -----------------------------------------------------
-- Table `p3`.`candidate_has_notification`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`candidate_has_notification` ;

CREATE TABLE IF NOT EXISTS `p3`.`candidate_has_notification` (
  `candidate_id` INT NOT NULL,
  `notification_id` INT NOT NULL,
  PRIMARY KEY (`candidate_id`, `notification_id`),
  INDEX `fk_candidate_has_notification_notification1_idx` (`notification_id` ASC) VISIBLE,
  INDEX `fk_candidate_has_notification_candidate1_idx` (`candidate_id` ASC) VISIBLE,
  CONSTRAINT `fk_candidate_has_notification_candidate1`
    FOREIGN KEY (`candidate_id`)
    REFERENCES `p3`.`candidate` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_candidate_has_notification_notification1`
    FOREIGN KEY (`notification_id`)
    REFERENCES `p3`.`notification` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;


-- -----------------------------------------------------
-- Table `p3`.`CANDIDATE_has_TECHNOLOGY`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`candidate_has_technology` ;

CREATE TABLE IF NOT EXISTS `p3`.`candidate_has_technology` (
  `candidate_id` INT NOT NULL,
  `technology_id` INT NOT NULL,
  PRIMARY KEY (`candidate_id`, `technology_id`),
  INDEX `fk_candidate_has_technology_technology1_idx` (`technology_id` ASC) VISIBLE,
  INDEX `fk_candidate_has_technology_candidate1_idx` (`candidate_id` ASC) VISIBLE,
  CONSTRAINT `fk_candidate_has_technology_candidate1`
    FOREIGN KEY (`candidate_id`)
    REFERENCES `p3`.`candidate` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_candidate_has_technology_technology1`
    FOREIGN KEY (`technology_id`)
    REFERENCES `p3`.`technology` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

INSERT INTO `p3`.`candidate_has_technology` (`candidate_id`, `technology_id`) VALUES ('1', '1');
INSERT INTO `p3`.`candidate_has_technology` (`candidate_id`, `technology_id`) VALUES ('1', '2');
INSERT INTO `p3`.`candidate_has_technology` (`candidate_id`, `technology_id`) VALUES ('1', '7');
INSERT INTO `p3`.`candidate_has_technology` (`candidate_id`, `technology_id`) VALUES ('1', '8');
INSERT INTO `p3`.`candidate_has_technology` (`candidate_id`, `technology_id`) VALUES ('2', '1');
INSERT INTO `p3`.`candidate_has_technology` (`candidate_id`, `technology_id`) VALUES ('2', '5');
INSERT INTO `p3`.`candidate_has_technology` (`candidate_id`, `technology_id`) VALUES ('2', '9');


-- -----------------------------------------------------
-- Table `p3`.`COMPANY`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`company` ;

CREATE TABLE IF NOT EXISTS `p3`.`company` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `number_of_employee` INT NOT NULL,
  `description` TEXT NOT NULL,
  `field` VARCHAR(150) NOT NULL,
  `siret` VARCHAR(14) NOT NULL,
  `company_type` VARCHAR(150) NOT NULL,
  `picture` VARCHAR(255) NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_company_user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_company_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `p3`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES 
(1,
'Braka-C',
150,
"Braka-C, c'est une sart up en plein essort spécialisée dans une nouvelle technologie de réduction de fracture et de plâtre ! Rejoignez-nous et cassez vous joyeusement le bras afin de constater notre expertise !",
'Santé',
'01234567891011',
'Start Up',
'https//:urldelimageonverraplustard',
2),
(2,'Taupiqueur',250,'Editeur de logiciel SaaS spécialisé dans le domaine du BTP','BTP','04136785471356','PME','https//:urldelimageonverraplustard',3),
(3,'DigiDollars',95,'Nous sommes une ESN spécialisée dans le secteur banquire. Nous proposons à nos clients une solution clé en mains, et sommes spécialisée dans la migration vers une stack moderne.','Banque','98567439621584','ESN','https//:urldelimageonverraplustard',4);

UNLOCK TABLES;
-- -----------------------------------------------------
-- Table `p3`.`COMPANY_has_FIELD`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`company_has_field` ;

CREATE TABLE IF NOT EXISTS `p3`.`company_has_field` (
  `company_id` INT NOT NULL,
  `field_id` INT NOT NULL,
  PRIMARY KEY (`company_id`, `field_id`),
  INDEX `fk_company_has_field_field1_idx` (`field_id` ASC) VISIBLE,
  INDEX `fk_company_has_field_company1_idx` (`company_id` ASC) VISIBLE,
  CONSTRAINT `fk_company_has_field_company1`
    FOREIGN KEY (`company_id`)
    REFERENCES `p3`.`company` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_has_field_field1`
    FOREIGN KEY (`field_id`)
    REFERENCES `p3`.`field` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

LOCK TABLES `company_has_field` WRITE;
/*!40000 ALTER TABLE `company_has_field` DISABLE KEYS */;
INSERT INTO `company_has_field` VALUES
(2,1),(1,2),(3,3);

UNLOCK TABLES;
-- -----------------------------------------------------
-- Table `p3`.`COMPANY_has_NOTIFICATION`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`company_has_notification` ;

CREATE TABLE IF NOT EXISTS `p3`.`company_has_notification` (
  `company_id` INT NOT NULL,
  `notification_id` INT NOT NULL,
  PRIMARY KEY (`company_id`, `notification_id`),
  INDEX `fk_company_has_notification_notification1_idx` (`notification_id` ASC) VISIBLE,
  INDEX `fk_company_has_notification_company1_idx` (`company_id` ASC) VISIBLE,
  CONSTRAINT `fk_company_has_notification_company1`
    FOREIGN KEY (`company_id`)
    REFERENCES `p3`.`company` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_has_notification_notification1`
    FOREIGN KEY (`notification_id`)
    REFERENCES `p3`.`notification` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;


-- -----------------------------------------------------
-- Table `p3`.`CONSULTANT`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`consultant` ;

CREATE TABLE IF NOT EXISTS `p3`.`consultant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `gender` VARCHAR(25) NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_consultant_user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_consultant_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `p3`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

LOCK TABLES `consultant` WRITE;
/*!40000 ALTER TABLE `consultant` DISABLE KEYS */;
INSERT INTO `consultant` VALUES 
(1, 'Male', 1);

UNLOCK TABLES;
-- -----------------------------------------------------
-- Table `p3`.`CONSULTANT_has_NOTIFICATION`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`consultant_has_notification` ;

CREATE TABLE IF NOT EXISTS `p3`.`consultant_has_notification` (
  `consultant_id` INT NOT NULL,
  `notification_id` INT NOT NULL,
  PRIMARY KEY (`consultant_id`, `notification_id`),
  INDEX `fk_consultant_has_notification_notification1_idx` (`notification_id` ASC) VISIBLE,
  INDEX `fk_consultant_has_notification_consultant1_idx` (`consultant_id` ASC) VISIBLE,
  CONSTRAINT `fk_consultant_has_notification_consultant1`
    FOREIGN KEY (`consultant_id`)
    REFERENCES `p3`.`consultant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_consultant_has_notification_notification1`
    FOREIGN KEY (`notification_id`)
    REFERENCES `p3`.`notification` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;


-- -----------------------------------------------------
-- Table `p3`.`CONTRACT`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`contract` ;

CREATE TABLE IF NOT EXISTS `p3`.`contract` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

LOCK TABLES `contract` WRITE;
/*!40000 ALTER TABLE `contract` DISABLE KEYS */;
INSERT INTO `contract` VALUES
(1, 'CDD'), (2, 'CDI'), (3, 'Freelance'), (4, 'Stage'), (5, 'Alternance');

UNLOCK TABLES;
-- -----------------------------------------------------
-- Table `p3`.`FAVORITE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`favorite` ;

CREATE TABLE IF NOT EXISTS `p3`.`favorite` (
  `candidate_id` INT NOT NULL,
  `job_offer_id` INT NOT NULL,
  PRIMARY KEY (`candidate_id`, `job_offer_id`),
  INDEX `fk_candidate_has_job_offer_job_offer1_idx` (`job_offer_id` ASC) VISIBLE,
  INDEX `fk_candidate_has_job_offer_candidate1_idx` (`candidate_id` ASC) VISIBLE,
  CONSTRAINT `fk_candidate_has_job_offer_candidate1`
    FOREIGN KEY (`candidate_id`)
    REFERENCES `p3`.`candidate` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_candidate_has_job_offer_job_offer1`
    FOREIGN KEY (`job_offer_id`)
    REFERENCES `p3`.`job_offer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;


-- -----------------------------------------------------
-- Table `p3`.`FIELD`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`field` ;

CREATE TABLE IF NOT EXISTS `p3`.`field` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

LOCK TABLES `field` WRITE;
/*!40000 ALTER TABLE `field` DISABLE KEYS */;
INSERT INTO `field` VALUES
(1, 'BTP'), (2, 'Santé'), (3, 'Secteur banquaire');

UNLOCK TABLES;
-- -----------------------------------------------------
-- Table `p3`.`HANDLED_OFFER`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`handled_offer` ;

CREATE TABLE IF NOT EXISTS `p3`.`handled_offer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `job_offer_id` INT NOT NULL,
  `consultant_id` INT NOT NULL,
  `number_of_candidates` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_handled_offer_job_offer_id` (`job_offer_id` ASC) VISIBLE,
  INDEX `fk_handled_offer_consultant_id` (`consultant_id` ASC) VISIBLE,
  CONSTRAINT `fk_handled_offer_consultant_id`
    FOREIGN KEY (`consultant_id`)
    REFERENCES `p3`.`CONSULTANT` (`id`),
  CONSTRAINT `fk_handled_offer_job_offer_id`
    FOREIGN KEY (`job_offer_id`)
    REFERENCES `p3`.`job_offer` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

LOCK TABLES `handled_offer` WRITE;
/*!40000 ALTER TABLE `handled_offer` DISABLE KEYS */;
INSERT INTO `handled_offer` VALUES
(1, 1, 1, 5), (2, 2, 1, 10), (3, 3, 1, 4);

UNLOCK TABLES;
-- -----------------------------------------------------
-- Table `p3`.`JOB_OFFER`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`job_offer` ;

CREATE TABLE `job_offer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `salary` int NOT NULL,
  `title` varchar(180) NOT NULL,
  `lower_salary` int NOT NULL,
  `higher_salary` int NOT NULL,
  `description` text NOT NULL,
  `experience` varchar(50) NOT NULL,
  `location` varchar(150) NOT NULL,
  `contract_id` int DEFAULT NULL,
  `debut_date` date NOT NULL,
  `mission` text NOT NULL,
  `profile_needed` text NOT NULL,
  `interview_run` text NOT NULL,
  `remote` tinyint(1) NOT NULL,
  `bonuses` text NOT NULL,
  `work_hours` int NOT NULL,
  `date_of_creation` date NOT NULL,
  `number_of_candidates` int NOT NULL,
  `company_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_job_offer_contract_id` (`contract_id`),
  KEY `fk_job_offer_company_id` (`company_id`),
  CONSTRAINT `fk_job_offer_company_id` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`),
  CONSTRAINT `fk_job_offer_contract_id` FOREIGN KEY (`contract_id`) REFERENCES `contract` (`id`)) 
  ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4 
  COLLATE=utf8mb4_general_ci;

LOCK TABLES `job_offer` WRITE;
/*!40000 ALTER TABLE `job_offer` DISABLE KEYS */;
INSERT INTO `job_offer` VALUES 
(1,
4600,
'Developpeur Fullstack JS'
,55000,
70000,
"Nous accompagnons un éditeur de logiciel SaaS qui compte 150 collaborateurs, la société évolue dans le domaine du BTP, et développe depuis 2017 une solution SaaS pour faciliter le quotidien des acteurs du milieu. La stratégie à long terme de la société est de s'étendre à l'international, les premières agences étrangères commencent déjà à voir le jour. Dans ce contexte novateur et dynamique, vous prenez part à cette aventure unique au sein d'une équipe de 15 personnes à Nantes ou en full remote !",
'2 à 3 ans',
'Nantes, Paris',
1,
'2023-05-10',
"Au sein d'une équipe technique de 6 collaborateurs, vos missions seront les suivantes : Migrer du code vers de nouveaux standards; Implémenter des fonctionnalités sur de nouvelles applications; Améliorer l’écosystème de nos outils de développement; Participer à la montée en compétence de toute l’équipe; Répondre aux besoins et aux questions de développeurs avec des problématiques back sous node et front sous react; Apporter une expertise lors de décision technique ou de chiffrages; Maintenir le code; Assurer une collaboration avec les équipes designs et techniques; Optimiser des applications; Concevoir et maintenir de la documentation; Participer à la résolution d’éventuelles pannes ou erreurs de conception;",
"Développeur autonome sur la stack JS et plus particulièrement sur node.js et react, vous : Avez de bonnes connaissances de Typescript, GraphQL, CSS et de la maintenance de mono-repo; Êtes une personne proactive, dynamique et communicante. Témoignez d'une expérience dans une équipe de plus de 10 personnes, idéalement en environnement start-up/scale-up !",
'RDV avec le responsable produit; Test technique (1h max); RDV avec le CTO',
1,
'Mutuelle familiale à 100%; Tickets restaurants pris en charge à 60%',
35,
'2023-02-22',
5,
2),
(2,
4400,
'Développeur Frontend React',
52800,
65000,
"Nous sommes une start up qui évolue dans le domaine paramédical, et nous proposons une plateforme de collaboration avec les acteurs du secteurs (cliniques, hopitaux). Dans ce contexte, vous assurez l'accès aux professionnels de santé, mais aussi aux patients, à une technologie de pointe de traitement des fractures.",
'0-2 ans',
'Tours',
2,
'2023-03-25',
"Au sein de notre équipe web comptant 5 collaborateurs, vous aurez pour mission de continuer le déploimement et de notre plateforme web via l'amélioration de l'interface client, implémenter de nouvelles fonctionnalités, assurer la documentation et la formation client, assurer la qualité et la maintenabilité du code, offrir une expérience agréable mais aussi fluide à nos utilisateurs.",
"Développeur junior, vous avez des bases solides en React, HTML/CSS/JS. Vous êtes dynamique, communicant et curieux.",
"RDV avec un membre de l'équipe technique, RDV avec l'assistante de direction",
1,
'Chèques vacancces',
35,
'2023-02-27',
10,
1),
(3,5000,'Développeur backend',58000,72000,'Entreprise de sevice numérique accompagnant nos clients du secteur banquaire, nous cherchons à faire évoluer les outils de nos clients vers une stack technique plus moderne.','5+ ans','Toulouse',3,'2023-04-16',"Vous serez amener à assurer la migration de l'infrastucture serveur de nos client vers le framework PhP Symfony.",'Développeur confirmé.','RDV CTO',0,'Bonbons',28,'2023-03-08',8,3);

/*!40000 ALTER TABLE `job_offer` ENABLE KEYS */;
UNLOCK TABLES;


-- -----------------------------------------------------
-- Table `p3`.`job_offer_has_TECHNOLOGY`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`job_offer_has_technology` ;

CREATE TABLE IF NOT EXISTS `p3`.`job_offer_has_technology` (
  `job_offer_id` INT NOT NULL,
  `technology_id` INT NOT NULL,
  PRIMARY KEY (`job_offer_id`, `technology_id`),
  INDEX `fk_job_offer_has_technology_technology1_idx` (`technology_id` ASC) VISIBLE,
  INDEX `fk_job_offer_has_technology_job_offer1_idx` (`job_offer_id` ASC) VISIBLE,
  CONSTRAINT `fk_job_offer_has_technology_job_offer1`
    FOREIGN KEY (`job_offer_id`)
    REFERENCES `p3`.`job_offer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_job_offer_has_technology_technology1`
    FOREIGN KEY (`technology_id`)
    REFERENCES `p3`.`technology` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

LOCK TABLES `job_offer_has_technology` WRITE;
/*!40000 ALTER TABLE `job_offer_has_technology` DISABLE KEYS */;
INSERT INTO `job_offer_has_technology` VALUES
(2,1),(1,2),(2,2),(1,3),(3,3),(3,7),(1,8),(3,9);

UNLOCK TABLES;
-- -----------------------------------------------------
-- Table `p3`.`NOTIFICATION`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`notification` ;

CREATE TABLE IF NOT EXISTS `p3`.`notification` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `job_offer_id` INT NOT NULL,
  `date` DATETIME NOT NULL,
  `message` VARCHAR(150) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci' NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_notification_job_offer_id` (`job_offer_id` ASC) VISIBLE,
  CONSTRAINT `fk_notification_job_offer_id`
    FOREIGN KEY (`job_offer_id`)
    REFERENCES `p3`.`job_offer` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `p3`.`TECHNOLOGY`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`technology` ;

CREATE TABLE IF NOT EXISTS `p3`.`technology` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

LOCK TABLES `technology` WRITE;
/*!40000 ALTER TABLE `technology` DISABLE KEYS */;
INSERT INTO `technology` VALUES 
(1, "JavaScript"), (2, "React"), (3, "NodeJS"), (4, "PHP"), (5, "Angular"), (6, "Java"), (7, "Express"), (8, "MySQL"), (9, "noSQL");
/*!40000 ALTER TABLE `technology` ENABLE KEYS */;
UNLOCK TABLES;

-- -----------------------------------------------------
-- Table `p3`.`USER`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`user` ;

CREATE TABLE IF NOT EXISTS `p3`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `mail` VARCHAR(255) NOT NULL,
  `linkedin` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `hashed_password` VARCHAR(255) NOT NULL,
  `location` VARCHAR(150) NOT NULL,
  `picture` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*MdP aupifserahash*/
INSERT INTO `user` VALUES (1,'Gusty','Amethist','Gusty.Amethist@yopmail.com','https://www.linkedin.com/in/Gusty-Amethist/','xx.xx.xx.xx.xx','$argon2id$v=19$m=524288,t=5,p=1$L6jZcFQDpynOFGgpGF+EwA$y9GMxbL0/31Tk6R4yOhY8wBYQSGSLfiNk52PNOlbBd0','Chengdu','urldelimage'),(2,'Courtnay','Rona','Courtnay.Rona@yopmail.com','https://www.linkedin.com/in/Courtnay-Rona/','xx.xx.xx.xx.xx','$argon2id$v=19$m=524288,t=5,p=1$L6jZcFQDpynOFGgpGF+EwA$y9GMxbL0/31Tk6R4yOhY8wBYQSGSLfiNk52PNOlbBd0','Mashhad','urldelimage'),(3,'Adore','Maribeth','Adore.Maribeth@yopmail.com','https://www.linkedin.com/in/Adore-Maribeth/','xx.xx.xx.xx.xx','$argon2id$v=19$m=524288,t=5,p=1$L6jZcFQDpynOFGgpGF+EwA$y9GMxbL0/31Tk6R4yOhY8wBYQSGSLfiNk52PNOlbBd0','Semarang','urldelimage'),(4,'Tracey','Middleton','Tracey.Middleton@yopmail.com','https://www.linkedin.com/in/Tracey-Middleton/','xx.xx.xx.xx.xx','$argon2id$v=19$m=524288,t=5,p=1$L6jZcFQDpynOFGgpGF+EwA$y9GMxbL0/31Tk6R4yOhY8wBYQSGSLfiNk52PNOlbBd0','Kigali','urldelimage'),(5,'Kate','Rheingold','Kate.Rheingold@yopmail.com','https://www.linkedin.com/in/Kate-Rheingold/','xx.xx.xx.xx.xx','$argon2id$v=19$m=524288,t=5,p=1$L6jZcFQDpynOFGgpGF+EwA$y9GMxbL0/31Tk6R4yOhY8wBYQSGSLfiNk52PNOlbBd0','Dammam','urldelimage');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;