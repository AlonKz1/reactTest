CREATE SCHEMA `UITeams`;

CREATE TABLE `UITeams`.`teams` (
  `team_id` INT NOT NULL AUTO_INCREMENT,
  `team_name` VARCHAR(45) NULL,
  PRIMARY KEY (`team_id`));

INSERT INTO `UITeams`.`teams` (`team_name`) VALUES ('Bezeq');
INSERT INTO `UITeams`.`teams` (`team_name`) VALUES ('Mobile');
INSERT INTO `UITeams`.`teams` (`team_name`) VALUES ('YES');
INSERT INTO `UITeams`.`teams` (`team_name`) VALUES ('UI');
INSERT INTO `UITeams`.`teams` (`team_name`) VALUES ('HOT');

CREATE TABLE `UITeams`.`appointments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `team_id` INT NOT NULL,
  `start` DATETIME NOT NULL,
  `end` DATETIME NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `room` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

  ALTER TABLE `UITeams`.`appointments` 
ADD INDEX `team_id_idx` (`team_id` ASC) VISIBLE;
;
ALTER TABLE `UITeams`.`appointments` 
ADD CONSTRAINT `team_id`
  FOREIGN KEY (`team_id`)
  REFERENCES `UITeams`.`teams` (`team_id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

  INSERT INTO `UITeams`.`appointments` (`team_id`, `start`, `end`, `description`, `room`) 
  VALUES ('1', '2022-06-08 19:00:00', '2022-06-08 20:00:00', 'UI building', 'Green Room');
  INSERT INTO `UITeams`.`appointments` (`team_id`, `start`, `end`, `description`, `room`) 
  VALUES ('1', '2022-06-09 20:00:00', '2022-06-07 21:00:00', 'API buulding up', 'Red Room');
  INSERT INTO `UITeams`.`appointments` (`team_id`, `start`, `end`, `description`, `room`) 
  VALUES ('2', '2022-06-09 13:00:00', '2022-06-07 14:00:00', 'Company vacation', 'Blue Room');
  




