DROP DATABASE IF EXISTS `painel_database`

CREATE DATABASE IF NOT EXISTS `painel_database`

USE `painel_database`

CREATE TABLE IF NOT EXISTS `users` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`name` varchar(255) NOT NULL,
	`cpf` varchar(11) NOT NULL,
	`rg` varchar(10) NOT NULL,
	`date_birthday` date NOT NULL,
	`passwords_id` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `passwords` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`password` int NOT NULL,
	`box` int NOT NULL,
	`is_attended` boolean NOT NULL DEFAULT false,
	`date_attended` datetime NOT NULL,
	`user_id` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `feedbacks` (
	`id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`description` text NOT NULL,
	`levels` int NOT NULL,
	`posted_in` date NOT NULL,
	`user_id` int NOT NULL,
	`password_id` int NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `users` ADD CONSTRAINT `users_fk5` FOREIGN KEY (`passwords_id`) REFERENCES `passwords`(`id`);
ALTER TABLE `passwords` ADD CONSTRAINT `passwords_fk5` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);
ALTER TABLE `feedbacks` ADD CONSTRAINT `feedbacks_fk4` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `feedbacks` ADD CONSTRAINT `feedbacks_fk5` FOREIGN KEY (`password_id`) REFERENCES `passwords`(`id`);