-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2022 at 05:40 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `payuung_dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(10) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `telephone_number` varchar(16) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `address` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `company_name`, `telephone_number`, `is_active`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'testing 1', '0912893812', 0, 'akdjashdaskjd', '2022-03-15 13:50:04', '2022-03-15 13:50:04'),
(2, 'testing 2', '0912893812', 0, 'akdjashdaskjd', '2022-03-15 13:50:30', '2022-03-15 13:50:30'),
(3, 'testing 3', '0912893812', 0, 'akdjashdaskjd', '2022-03-15 13:50:36', '2022-03-15 13:50:36');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(16) DEFAULT NULL,
  `jobtitle` enum('manager','director','staff') NOT NULL DEFAULT 'staff',
  `company_id` int(10) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `email`, `phone_number`, `jobtitle`, `company_id`, `createdAt`, `updatedAt`) VALUES
(1, 'testing', 'sahatmarbun147@gmail.com', '12345678', 'manager', 1, '2022-03-15 13:50:47', '2022-03-15 16:05:01'),
(2, 'sahat', 'sahat@gmail.com', '085328179293', 'staff', 1, '2022-03-15 13:51:03', '2022-03-15 13:51:03'),
(3, 'testing', 'testing@gmail.com', '085328179293', 'staff', 2, '2022-03-15 15:44:28', '2022-03-15 15:44:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
