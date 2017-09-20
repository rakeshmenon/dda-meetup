# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: localhost (MySQL 5.7.18)
# Database: ddameetup
# Generation Time: 2017-09-20 04:39:40 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table feedbacks
# ------------------------------------------------------------

DROP TABLE IF EXISTS `feedbacks`;

CREATE TABLE `feedbacks` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(2000) NOT NULL DEFAULT '',
  `from` varchar(50) NOT NULL DEFAULT '',
  `upvotes` int(11) NOT NULL,
  `downvotes` int(11) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) NOT NULL DEFAULT '',
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `feedbacks` WRITE;
/*!40000 ALTER TABLE `feedbacks` DISABLE KEYS */;

INSERT INTO `feedbacks` (`id`, `description`, `from`, `upvotes`, `downvotes`, `phone`, `email`, `createdAt`, `updatedAt`)
VALUES
	(1,'This is a long feedback - there were a lot of pros and cons and so on and so on','Rakesh Menon',16,4,'9811107220','rakeshmenon13@yahoo.com','2017-09-08','2017-09-09'),
	(2,'This is a long feedback - there were a lot of pros and cons and so on and so on','Sumeet',11,10,'9839289322','rmenon3@sapient.com','2017-09-08','2017-09-09'),
	(13,'Test','Rakesh',0,0,NULL,'test@test.com','2017-09-09','2017-09-09'),
	(14,'Test2','Rakesh Menon',10,14,NULL,'test@test1.com','2017-09-09','2017-09-09'),
	(15,'Testing123','Sanjay',4,0,NULL,'sanjay@sapient.com','2017-09-09','2017-09-09'),
	(16,'Wow!!','Rakesh Menon',0,0,'9811107220','rmenon3@sapient.com','2017-09-09','2017-09-09'),
	(17,'Test Client Insert','Rakesh Menon',0,0,'9811107220','rakeshmenon13@yahoo.com','2017-09-09','2017-09-09'),
	(18,'danioasnd','Fahad Baig',0,0,'9811107220','fahadb@yopmail.com','2017-09-12','2017-09-12');

/*!40000 ALTER TABLE `feedbacks` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
