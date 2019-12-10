-- MySQL dump 10.13  Distrib 8.0.18, for Linux (x86_64)
--
-- Host: localhost    Database: ExamReg
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `accountList`
--

LOCK TABLES `accountList` WRITE;
/*!40000 ALTER TABLE `accountList` DISABLE KEYS */;
INSERT INTO `accountList` VALUES (1,'staff1','$2b$10$HK3v6Qphes6buK.R2J/jGeJWiFDP7ExiFvtY8qUnhCAOkXCJ5wiB.','2019-12-05 13:52:03',1),(2,'staff2','root',NULL,1),(17021234,'17021234','abcabc',NULL,0),(17021324,'17021324','abc123',NULL,0);
/*!40000 ALTER TABLE `accountList` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `class_subject`
--

LOCK TABLES `class_subject` WRITE;
/*!40000 ALTER TABLE `class_subject` DISABLE KEYS */;
INSERT INTO `class_subject` VALUES ('INT1002-23','INT1002','Lê Phê Đô','2018-2019');
/*!40000 ALTER TABLE `class_subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `exam`
--

LOCK TABLES `exam` WRITE;
/*!40000 ALTER TABLE `exam` DISABLE KEYS */;
/*!40000 ALTER TABLE `exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `exam_room`
--

LOCK TABLES `exam_room` WRITE;
/*!40000 ALTER TABLE `exam_room` DISABLE KEYS */;
/*!40000 ALTER TABLE `exam_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `exam_session`
--

LOCK TABLES `exam_session` WRITE;
/*!40000 ALTER TABLE `exam_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `exam_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('1Up7i7nLqS-hERZYIOft19WvEivD5ew2',1618458866,'{\"cookie\":{\"originalMaxAge\":43200000000,\"expires\":\"2021-04-15T03:54:25.869Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('4ZMT1-dB_lv6nYeIuu_jD_TPb420ayHD',1618539426,'{\"cookie\":{\"originalMaxAge\":43200000000,\"expires\":\"2021-04-16T02:17:06.136Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('8Jb-tsU-KsgDzCsQ0_N5vyvktTM66j5s',1618539435,'{\"cookie\":{\"originalMaxAge\":43200000000,\"expires\":\"2021-04-16T02:17:15.172Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('LUnGZrQWXMIfHGX0S8ku1RUO4ovmESFY',1618539199,'{\"cookie\":{\"originalMaxAge\":43200000000,\"expires\":\"2021-04-16T02:13:19.367Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('NX4Q3PqKBJIgsC7Qyhf2bOeV1uce5eVT',1618539437,'{\"cookie\":{\"originalMaxAge\":43200000000,\"expires\":\"2021-04-16T02:17:16.780Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('i5_1lcw8IwSzEEayVlFhR5ohTYb50-yk',1618457672,'{\"cookie\":{\"originalMaxAge\":43200000000,\"expires\":\"2021-04-15T03:34:32.386Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('jomRn-YI9Pd9BAEKTe2yPzzX8s0fIPVc',1618539201,'{\"cookie\":{\"originalMaxAge\":43200000000,\"expires\":\"2021-04-16T02:13:21.453Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('rXmgtBzI10GikxbVTTIzB6WbCjOQbw3s',1618457674,'{\"cookie\":{\"originalMaxAge\":43200000000,\"expires\":\"2021-04-15T03:34:33.805Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('wycOYccnZn8uJMSdd937WJBBxewPg8j1',1618539201,'{\"cookie\":{\"originalMaxAge\":43200000000,\"expires\":\"2021-04-16T02:13:20.676Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}'),('xkw4TMQznKMwoAQ1Kq3V52yofewq6t1D',1618540119,'{\"cookie\":{\"originalMaxAge\":43200000000,\"expires\":\"2021-04-16T02:28:38.519Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"username\":\"abc\",\"salary\":0.039557470772697556}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `studentInfo`
--

LOCK TABLES `studentInfo` WRITE;
/*!40000 ALTER TABLE `studentInfo` DISABLE KEYS */;
INSERT INTO `studentInfo` VALUES (17021324,'Hong Quan','Nguyen','17021324@vnu.edu.vn','0123456789','abcxyz','INT1002-23',NULL,'1/1/2019','');
/*!40000 ALTER TABLE `studentInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `subject`
--

LOCK TABLES `subject` WRITE;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` VALUES ('INT1002','Giải Tích 1',4);
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-10 15:00:22
