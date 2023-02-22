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
-- Table `p3`.`CANDIDACY`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`CANDIDACY` ;

CREATE TABLE IF NOT EXISTS `p3`.`CANDIDACY` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `candidate_id` INT NOT NULL,
  `job_offer_id` INT NOT NULL,
  `candidacy_date` DATE NOT NULL,
  `received_by_company` TINYINT(1) NOT NULL,
  `read_by_company` TINYINT(1) NOT NULL,
  `company_responsed` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_CANDIDACY_candidate_id` (`candidate_id` ASC) VISIBLE,
  INDEX `fk_CANDIDACY_job_offer_id` (`job_offer_id` ASC) VISIBLE,
  CONSTRAINT `fk_CANDIDACY_candidate_id`
    FOREIGN KEY (`candidate_id`)
    REFERENCES `p3`.`CANDIDATE` (`id`),
  CONSTRAINT `fk_CANDIDACY_job_offer_id`
    FOREIGN KEY (`job_offer_id`)
    REFERENCES `p3`.`JOB_OFFER` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `p3`.`CANDIDATE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`CANDIDATE` ;

CREATE TABLE IF NOT EXISTS `p3`.`CANDIDATE` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cv` VARCHAR(255) NOT NULL,
  `age` INT NOT NULL,
  `github` VARCHAR(255) NOT NULL,
  `active` TINYINT(1) NOT NULL,
  `soft_skills` TEXT NOT NULL,
  `consultant_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_CANDIDATE_consultant_id` (`consultant_id` ASC) VISIBLE,
  INDEX `fk_CANDIDATE_user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_CANDIDATE_consultant_id`
    FOREIGN KEY (`consultant_id`)
    REFERENCES `p3`.`CONSULTANT` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `fk_CANDIDATE_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `p3`.`USER` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `p3`.`CANDIDATE_has_NOTIFICATION`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`CANDIDATE_has_NOTIFICATION` ;

CREATE TABLE IF NOT EXISTS `p3`.`CANDIDATE_has_NOTIFICATION` (
  `CANDIDATE_id` INT NOT NULL,
  `NOTIFICATION_id` INT NOT NULL,
  PRIMARY KEY (`CANDIDATE_id`, `NOTIFICATION_id`),
  INDEX `fk_CANDIDATE_has_NOTIFICATION_NOTIFICATION1_idx` (`NOTIFICATION_id` ASC) VISIBLE,
  INDEX `fk_CANDIDATE_has_NOTIFICATION_CANDIDATE1_idx` (`CANDIDATE_id` ASC) VISIBLE,
  CONSTRAINT `fk_CANDIDATE_has_NOTIFICATION_CANDIDATE1`
    FOREIGN KEY (`CANDIDATE_id`)
    REFERENCES `p3`.`CANDIDATE` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CANDIDATE_has_NOTIFICATION_NOTIFICATION1`
    FOREIGN KEY (`NOTIFICATION_id`)
    REFERENCES `p3`.`NOTIFICATION` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `p3`.`CANDIDATE_has_TECHNOLOGY`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`CANDIDATE_has_TECHNOLOGY` ;

CREATE TABLE IF NOT EXISTS `p3`.`CANDIDATE_has_TECHNOLOGY` (
  `CANDIDATE_id` INT NOT NULL,
  `TECHNOLOGY_id` INT NOT NULL,
  PRIMARY KEY (`CANDIDATE_id`, `TECHNOLOGY_id`),
  INDEX `fk_CANDIDATE_has_TECHNOLOGY_TECHNOLOGY1_idx` (`TECHNOLOGY_id` ASC) VISIBLE,
  INDEX `fk_CANDIDATE_has_TECHNOLOGY_CANDIDATE1_idx` (`CANDIDATE_id` ASC) VISIBLE,
  CONSTRAINT `fk_CANDIDATE_has_TECHNOLOGY_CANDIDATE1`
    FOREIGN KEY (`CANDIDATE_id`)
    REFERENCES `p3`.`CANDIDATE` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CANDIDATE_has_TECHNOLOGY_TECHNOLOGY1`
    FOREIGN KEY (`TECHNOLOGY_id`)
    REFERENCES `p3`.`TECHNOLOGY` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `p3`.`COMPANY`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`COMPANY` ;

CREATE TABLE IF NOT EXISTS `p3`.`COMPANY` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(150) NOT NULL,
  `number_of_employee` INT NOT NULL,
  `description` TEXT NOT NULL,
  `field` VARCHAR(150) NOT NULL,
  `siret` VARCHAR(14) NOT NULL,
  `company_type` VARCHAR(150) NOT NULL,
  `picture` VARCHAR(255) NOT NULL,
  `user_id` INT NOT NULL,
  `COMPANY_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_COMPANY_user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_COMPANY_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `p3`.`USER` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `p3`.`COMPANY_has_FIELD`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`COMPANY_has_FIELD` ;

CREATE TABLE IF NOT EXISTS `p3`.`COMPANY_has_FIELD` (
  `COMPANY_id` INT NOT NULL,
  `FIELD_id` INT NOT NULL,
  PRIMARY KEY (`COMPANY_id`, `FIELD_id`),
  INDEX `fk_COMPANY_has_FIELD_FIELD1_idx` (`FIELD_id` ASC) VISIBLE,
  INDEX `fk_COMPANY_has_FIELD_COMPANY1_idx` (`COMPANY_id` ASC) VISIBLE,
  CONSTRAINT `fk_COMPANY_has_FIELD_COMPANY1`
    FOREIGN KEY (`COMPANY_id`)
    REFERENCES `p3`.`COMPANY` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_COMPANY_has_FIELD_FIELD1`
    FOREIGN KEY (`FIELD_id`)
    REFERENCES `p3`.`FIELD` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `p3`.`COMPANY_has_NOTIFICATION`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`COMPANY_has_NOTIFICATION` ;

CREATE TABLE IF NOT EXISTS `p3`.`COMPANY_has_NOTIFICATION` (
  `COMPANY_id` INT NOT NULL,
  `NOTIFICATION_id` INT NOT NULL,
  PRIMARY KEY (`COMPANY_id`, `NOTIFICATION_id`),
  INDEX `fk_COMPANY_has_NOTIFICATION_NOTIFICATION1_idx` (`NOTIFICATION_id` ASC) VISIBLE,
  INDEX `fk_COMPANY_has_NOTIFICATION_COMPANY1_idx` (`COMPANY_id` ASC) VISIBLE,
  CONSTRAINT `fk_COMPANY_has_NOTIFICATION_COMPANY1`
    FOREIGN KEY (`COMPANY_id`)
    REFERENCES `p3`.`COMPANY` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_COMPANY_has_NOTIFICATION_NOTIFICATION1`
    FOREIGN KEY (`NOTIFICATION_id`)
    REFERENCES `p3`.`NOTIFICATION` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `p3`.`CONSULTANT`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`CONSULTANT` ;

CREATE TABLE IF NOT EXISTS `p3`.`CONSULTANT` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_CONSULTANT_user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_CONSULTANT_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `p3`.`USER` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `p3`.`CONSULTANT_has_NOTIFICATION`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`CONSULTANT_has_NOTIFICATION` ;

CREATE TABLE IF NOT EXISTS `p3`.`CONSULTANT_has_NOTIFICATION` (
  `CONSULTANT_id` INT NOT NULL,
  `NOTIFICATION_id` INT NOT NULL,
  PRIMARY KEY (`CONSULTANT_id`, `NOTIFICATION_id`),
  INDEX `fk_CONSULTANT_has_NOTIFICATION_NOTIFICATION1_idx` (`NOTIFICATION_id` ASC) VISIBLE,
  INDEX `fk_CONSULTANT_has_NOTIFICATION_CONSULTANT1_idx` (`CONSULTANT_id` ASC) VISIBLE,
  CONSTRAINT `fk_CONSULTANT_has_NOTIFICATION_CONSULTANT1`
    FOREIGN KEY (`CONSULTANT_id`)
    REFERENCES `p3`.`CONSULTANT` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CONSULTANT_has_NOTIFICATION_NOTIFICATION1`
    FOREIGN KEY (`NOTIFICATION_id`)
    REFERENCES `p3`.`NOTIFICATION` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `p3`.`CONTRACT`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`CONTRACT` ;

CREATE TABLE IF NOT EXISTS `p3`.`CONTRACT` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `p3`.`FAVORITE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`FAVORITE` ;

CREATE TABLE IF NOT EXISTS `p3`.`FAVORITE` (
  `CANDIDATE_id` INT NOT NULL,
  `JOB_OFFER_id` INT NOT NULL,
  PRIMARY KEY (`CANDIDATE_id`, `JOB_OFFER_id`),
  INDEX `fk_CANDIDATE_has_JOB_OFFER_JOB_OFFER1_idx` (`JOB_OFFER_id` ASC) VISIBLE,
  INDEX `fk_CANDIDATE_has_JOB_OFFER_CANDIDATE1_idx` (`CANDIDATE_id` ASC) VISIBLE,
  CONSTRAINT `fk_CANDIDATE_has_JOB_OFFER_CANDIDATE1`
    FOREIGN KEY (`CANDIDATE_id`)
    REFERENCES `p3`.`CANDIDATE` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CANDIDATE_has_JOB_OFFER_JOB_OFFER1`
    FOREIGN KEY (`JOB_OFFER_id`)
    REFERENCES `p3`.`JOB_OFFER` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `p3`.`FIELD`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`FIELD` ;

CREATE TABLE IF NOT EXISTS `p3`.`FIELD` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `p3`.`HANDLED_OFFER`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`HANDLED_OFFER` ;

CREATE TABLE IF NOT EXISTS `p3`.`HANDLED_OFFER` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `job_offer_id` INT NOT NULL,
  `consultant_id` INT NOT NULL,
  `number_of_candidates` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_HANDLED_OFFER_job_offer_id` (`job_offer_id` ASC) VISIBLE,
  INDEX `fk_HANDLED_OFFER_consultant_id` (`consultant_id` ASC) VISIBLE,
  CONSTRAINT `fk_HANDLED_OFFER_consultant_id`
    FOREIGN KEY (`consultant_id`)
    REFERENCES `p3`.`CONSULTANT` (`id`),
  CONSTRAINT `fk_HANDLED_OFFER_job_offer_id`
    FOREIGN KEY (`job_offer_id`)
    REFERENCES `p3`.`JOB_OFFER` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `p3`.`JOB_OFFER`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`JOB_OFFER` ;

CREATE TABLE `JOB_OFFER` (
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
  KEY `fk_JOB_OFFER_contract_id` (`contract_id`),
  KEY `fk_JOB_OFFER_company_id` (`company_id`),
  CONSTRAINT `fk_JOB_OFFER_company_id` FOREIGN KEY (`company_id`) REFERENCES `COMPANY` (`id`),
  CONSTRAINT `fk_JOB_OFFER_contract_id` FOREIGN KEY (`contract_id`) REFERENCES `CONTRACT` (`id`)) 
  ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4 
  COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `JOB_OFFER` WRITE;
/*!40000 ALTER TABLE `JOB_OFFER` DISABLE KEYS */;
INSERT INTO `JOB_OFFER` VALUES 
(1,
4600,
'Developpeur Fullstack JS'
,55000,
70000,
"Nous accompagnons un éditeur de logiciel SaaS qui compte 150 collaborateurs, la société évolue dans le domaine du BTP, et développe depuis 2017 une solution SaaS pour faciliter le quotidien des acteurs du milieu. La stratégie à long terme de la société est de s\étendre à l'international, les premières agences étrangères commencent déjà à voir le jour. Dans ce contexte novateur et dynamique, vous prenez part à cette aventure unique au sein d'une équipe de 15 personnes à Nantes ou en full remote !",
'2 à 3 ans',
'Nantes, Paris'
,NULL,
'2023-05-10',
"Au sein d'une équipe technique de 6 collaborateurs, vos missions seront les suivantes : Migrer du code vers de nouveaux standards; Implémenter des fonctionnalités sur de nouvelles applications; Améliorer l’écosystème de nos outils de développement; Participer à la montée en compétence de toute l’équipe; Répondre aux besoins et aux questions de développeurs avec des problématiques back sous node et front sous react; Apporter une expertise lors de décision technique ou de chiffrages; Maintenir le code; Assurer une collaboration avec les équipes designs et techniques; Optimiser des applications; Concevoir et maintenir de la documentation; Participer à la résolution d’éventuelles pannes ou erreurs de conception;",
"Développeur autonome sur la stack JS et plus particulièrement sur node.js et react, vous : Avez de bonnes connaissances de Typescript, GraphQL, CSS et de la maintenance de mono-repo; Êtes une personne proactive, dynamique et communicante. Témoignez d'une expérience dans une équipe de plus de 10 personnes, idéalement en environnement start-up/scale-up !",
'RDV avec le responsable produit; Test technique (1h max); RDV avec le CTO',
1,
'Mutuelle familiale à 100%; Tickets restaurants pris en charge à 60%',
35,
'2023-02-22',
5,
NULL);
/*!40000 ALTER TABLE `JOB_OFFER` ENABLE KEYS */;
UNLOCK TABLES;


-- -----------------------------------------------------
-- Table `p3`.`JOB_OFFER_has_TECHNOLOGY`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`JOB_OFFER_has_TECHNOLOGY` ;

CREATE TABLE IF NOT EXISTS `p3`.`JOB_OFFER_has_TECHNOLOGY` (
  `JOB_OFFER_id` INT NOT NULL,
  `TECHNOLOGY_id` INT NOT NULL,
  PRIMARY KEY (`JOB_OFFER_id`, `TECHNOLOGY_id`),
  INDEX `fk_JOB_OFFER_has_TECHNOLOGY_TECHNOLOGY1_idx` (`TECHNOLOGY_id` ASC) VISIBLE,
  INDEX `fk_JOB_OFFER_has_TECHNOLOGY_JOB_OFFER1_idx` (`JOB_OFFER_id` ASC) VISIBLE,
  CONSTRAINT `fk_JOB_OFFER_has_TECHNOLOGY_JOB_OFFER1`
    FOREIGN KEY (`JOB_OFFER_id`)
    REFERENCES `p3`.`JOB_OFFER` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_JOB_OFFER_has_TECHNOLOGY_TECHNOLOGY1`
    FOREIGN KEY (`TECHNOLOGY_id`)
    REFERENCES `p3`.`TECHNOLOGY` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `p3`.`NOTIFICATION`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`NOTIFICATION` ;

CREATE TABLE IF NOT EXISTS `p3`.`NOTIFICATION` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `job_offer_id` INT NOT NULL,
  `date` DATETIME NOT NULL,
  `message` VARCHAR(150) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_general_ci' NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_NOTIFICATION_job_offer_id` (`job_offer_id` ASC) VISIBLE,
  CONSTRAINT `fk_NOTIFICATION_job_offer_id`
    FOREIGN KEY (`job_offer_id`)
    REFERENCES `p3`.`JOB_OFFER` (`id`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `p3`.`TECHNOLOGY`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`TECHNOLOGY` ;

CREATE TABLE IF NOT EXISTS `p3`.`TECHNOLOGY` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `p3`.`USER`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `p3`.`USER` ;

CREATE TABLE IF NOT EXISTS `p3`.`USER` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `mail` VARCHAR(255) NOT NULL,
  `linkedin` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `location` VARCHAR(150) NOT NULL,
  `picture` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;
INSERT INTO `USER` VALUES (1,'Gusty','Amethist','Gusty.Amethist@yopmail.com','https://www.linkedin.com/in/Gusty-Amethist/','xx.xx.xx.xx.xx','aupifserahash','Chengdu','urldelimage'),(2,'Courtnay','Rona','Courtnay.Rona@yopmail.com','https://www.linkedin.com/in/Courtnay-Rona/','xx.xx.xx.xx.xx','aupifserahash','Mashhad','urldelimage'),(3,'Adore','Maribeth','Adore.Maribeth@yopmail.com','https://www.linkedin.com/in/Adore-Maribeth/','xx.xx.xx.xx.xx','aupifserahash','Semarang','urldelimage'),(4,'Tracey','Middleton','Tracey.Middleton@yopmail.com','https://www.linkedin.com/in/Tracey-Middleton/','xx.xx.xx.xx.xx','aupifserahash','Kigali','urldelimage'),(5,'Kate','Rheingold','Kate.Rheingold@yopmail.com','https://www.linkedin.com/in/Kate-Rheingold/','xx.xx.xx.xx.xx','aupifserahash','Dammam','urldelimage');
/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;