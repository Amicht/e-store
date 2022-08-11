-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2022 at 04:50 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-store`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `client_id` int(10) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `client_id`, `date`) VALUES
(10, 123456789, '2022-08-07 10:25:51'),
(13, 111111111, '2022-08-09 13:15:08'),
(16, 123123123, '2022-08-10 11:15:27'),
(18, 222222222, '2022-08-10 13:18:52');

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

CREATE TABLE `cart_items` (
  `id` int(11) NOT NULL,
  `product_id` int(10) NOT NULL,
  `cart_id` int(10) NOT NULL,
  `amount` int(3) NOT NULL,
  `totalPrice` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `cart_items`
--

INSERT INTO `cart_items` (`id`, `product_id`, `cart_id`, `amount`, `totalPrice`) VALUES
(46, 58, 10, 1, '4.40'),
(47, 59, 10, 4, '8.40'),
(48, 35, 10, 1, '17.70'),
(49, 34, 10, 3, '39.90'),
(50, 39, 10, 2, '25.00'),
(51, 78, 10, 3, '11.10'),
(52, 99, 10, 4, '37.60');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(6, 'Bakery & Bread'),
(14, 'Cereal & Breakfast'),
(1, 'Dairy'),
(9, 'Drinks'),
(10, 'Frozen Foods'),
(4, 'Fruits'),
(5, 'Grains'),
(12, 'Ice Cream & Frozen Desserts'),
(2, 'Meat'),
(13, 'Salt, Sugar & Spices'),
(8, 'Snacks'),
(7, 'Sweets'),
(3, 'Vegetables'),
(11, 'Wine, Alcohol & Beer');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `firstName` varchar(50) COLLATE utf8_bin NOT NULL,
  `lastName` varchar(50) COLLATE utf8_bin NOT NULL,
  `email` varchar(50) COLLATE utf8_bin NOT NULL,
  `id` int(10) NOT NULL,
  `password` varchar(100) COLLATE utf8_bin NOT NULL,
  `city` varchar(30) COLLATE utf8_bin NOT NULL,
  `street` varchar(50) COLLATE utf8_bin NOT NULL,
  `role` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`firstName`, `lastName`, `email`, `id`, `password`, `city`, `street`, `role`) VALUES
('test', 'test', '1234', 1234, '024ee282310e620c929127069b4097c0adbe6a6529b5825a35770bf396a6995a', 'citytest', 'streettest', 1),
('Amit', 'Licht', 'Amicht@gmail.com', 111111111, '024ee282310e620c929127069b4097c0adbe6a6529b5825a35770bf396a6995a', 'Petach Tikva', 'somewhere', 2),
('Amicht', 'Micht', 'vicoosh@gmail.com', 123123123, '19a4634508648bcea5d46dcee35a3ecc5b2df16d2fdb127f0ec2f74c962c7971', 'Petach Tikva', 'Haari Hakadosh', 1),
('Shlomo', 'Russel', 'Shlomo@gmail.com', 123456789, '024ee282310e620c929127069b4097c0adbe6a6529b5825a35770bf396a6995a', 'Jerusalem', 'somewhere', 1),
('nurit', 'tal', 'nuritoosh@gmail.com', 222222222, '024ee282310e620c929127069b4097c0adbe6a6529b5825a35770bf396a6995a', 'patach', 'haari', 1),
('bla', 'blabla', 'cvfdvbfe@jnvjfdke.com', 1212121212, '024ee282310e620c929127069b4097c0adbe6a6529b5825a35770bf396a6995a', 'blablabkl', 'blabla', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `client_id` int(10) NOT NULL,
  `cart_id` int(10) NOT NULL,
  `totalPrice` decimal(10,2) NOT NULL,
  `city` varchar(30) COLLATE utf8_bin NOT NULL,
  `street` varchar(50) COLLATE utf8_bin NOT NULL,
  `arrival` datetime NOT NULL,
  `date` datetime NOT NULL,
  `creditNumber` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `client_id`, `cart_id`, `totalPrice`, `city`, `street`, `arrival`, `date`, `creditNumber`) VALUES
(1, 7, 8, '457.00', 'Tel-Aviv', 'Hamasger', '2023-10-07 00:00:00', '2022-10-08 00:00:00', 1234),
(3, 7, 8, '456.80', 'Tel-Aviv', 'Hamasger', '2023-10-07 00:00:00', '2022-10-08 00:00:00', 1234),
(4, 8, 8, '400.00', 'Tel-Aviv', 'Hamasger', '2023-10-07 00:00:00', '2022-08-04 14:13:58', 1234),
(5, 111111111, 8, '183.00', 'Tel-Aviv', 'Florentin', '2022-08-11 11:59:00', '2022-08-09 11:59:25', 1234),
(6, 111111111, 8, '183.00', 'Tel-Aviv', 'Hamasger', '2022-08-11 12:43:00', '2022-08-09 12:44:01', 2222),
(7, 111111111, 8, '183.00', 'Tel-Aviv', 'Hamasger', '2022-08-18 12:43:00', '2022-08-09 12:48:27', 2222),
(8, 111111111, 8, '183.00', 'Jerusalem', 'Jaffa', '2022-08-18 12:53:00', '2022-08-09 12:53:42', 1111),
(9, 111111111, 8, '183.00', 'Jerusalem', 'Jaffa', '2022-08-18 12:53:00', '2022-08-09 12:53:54', 1111),
(10, 111111111, 8, '183.00', 'Jerusalem', 'Jaffa', '2022-08-18 12:53:00', '2022-08-09 12:55:41', 1111),
(11, 111111111, 8, '183.00', 'Haifa', 'Kiryat-yam', '2022-08-19 12:57:00', '2022-08-09 12:57:31', 3333),
(12, 111111111, 11, '752.70', 'Beer Sheva', 'hi', '2022-08-22 13:14:00', '2022-08-09 13:14:56', 4444),
(13, 123123123, 15, '268.60', 'Petach Tikva', 'Haari hakadosh 4', '2022-08-23 11:15:00', '2022-08-10 11:15:24', 1234),
(14, 222222222, 17, '15.80', 'Petach Tikva', 'haari 4', '2022-08-11 13:18:00', '2022-08-10 13:18:48', 1234);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_bin NOT NULL,
  `category_id` int(10) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `image` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category_id`, `price`, `image`) VALUES
(22, 'Beer Goldstar', 11, '9.90', '/api/images/d755df39-af3a-490a-97ea-15341eb5c281.jpg'),
(23, 'Beer Heinken', 11, '10.70', '/api/images/77937976-26cb-4183-9f97-8f9266ff3d29.jpg'),
(24, 'Beer Corona', 11, '8.50', '/api/images/2626b247-629e-4635-ac7e-e7fc8f8b2bb5.jpg'),
(25, 'Arak', 11, '7.80', '/api/images/5eef9682-5b42-4bb5-867b-c66f5f11d660.jpg'),
(26, 'Merlo wine - Hayarden', 11, '12.00', '/api/images/54ddbcbf-4aa7-4045-90dd-2ea0ceda556b.jpg'),
(27, 'Chicken Breast', 2, '5.50', '/api/images/f0da29cd-9a46-4f14-9126-26b7f25a8b42.jpg'),
(28, 'Chicken Wings', 2, '7.50', '/api/images/1559e2d2-7854-499b-a2d8-39ec76641147.jpg'),
(29, 'Chicken Legs', 2, '7.80', '/api/images/e992634e-a31c-4983-a960-cba9a073026d.jpg'),
(30, 'Steak', 2, '14.70', '/api/images/05fad0fc-ab75-41ca-ad4b-ebd31c0fbe45.jpg'),
(31, 'Spring Chicken', 2, '12.00', '/api/images/9f81d407-29f4-41e6-9f8f-f1572112e4f7.jpg'),
(32, 'B&J Chunky Munky', 12, '15.00', '/api/images/52f3e9d1-5b89-4c11-bd44-4a91f3fbdbf2.jpg'),
(33, 'Vanilla & Cookies ice cream', 12, '14.30', '/api/images/ae4765a8-293e-4f5c-bbad-c698ba9332de.png'),
(34, 'Click Ice Cream', 12, '13.30', '/api/images/c3196677-4619-40db-a1db-475d50f28034.jpeg'),
(35, 'Dulce de leche ice cream', 12, '17.70', '/api/images/34a516a1-0aad-4247-9b13-e5ad6e91f8f8.jpg'),
(36, 'Ice Cream Snackies', 12, '19.30', '/api/images/adaf3d8c-adb2-442f-a23c-bb96abc24e05.jpg'),
(37, 'Trix', 14, '10.50', '/api/images/87d32ed7-1892-446f-9c7a-49d63fde15fc.jpg'),
(38, 'Nesquik', 14, '15.40', '/api/images/6b51a42c-3c44-4a75-99e0-f49c5aac0c1d.jpg'),
(39, 'Cornflakes', 14, '12.50', '/api/images/a0600900-eeee-431d-b528-145f3f3ceff1.jpg'),
(40, 'Crunch Chocolate', 14, '13.60', '/api/images/4c1777ca-bce2-4921-8c4a-9c2e6c29f531.jpg'),
(41, 'Bisli BBQ', 8, '5.90', '/api/images/ba3dce29-2b94-4718-b543-3e5061908671.jpg'),
(42, 'Bisli onion', 8, '5.90', '/api/images/20d5f755-8a63-496f-8eda-97675da7cc38.jpg'),
(43, 'Bamba Nugat', 8, '6.90', '/api/images/8468420e-771f-49f5-948c-f6df4911eda4.jpg'),
(44, 'Bamba', 8, '3.90', '/api/images/aad86dbb-d61f-4fc9-8318-76c8faa48399.jpg'),
(45, 'Chips Gril', 8, '5.80', '/api/images/bdad8fbd-2cf0-4c74-8fdf-eb0ae28aaf67.jpg'),
(46, 'Chips', 8, '5.80', '/api/images/782f5603-d417-49ef-8307-a57f930070db.jpg'),
(47, 'Chips Mexican', 8, '5.80', '/api/images/46253fec-fe1b-41cc-9b24-e6aff0c87687.jpg'),
(48, 'Danone Pro', 1, '6.40', '/api/images/39901502-ee13-442d-9bd0-ddbb45a2c6dc.jpg'),
(49, 'Milk Tnuva', 1, '5.50', '/api/images/4d4c5e5f-4d51-4680-8448-3138e94e1f20.jpg'),
(50, 'Kilk Cream Tnuva', 1, '7.70', '/api/images/5bafc0e6-6de5-4489-83cb-08b0b05e1a05.jpg'),
(51, 'onins 1kg', 3, '3.20', '/api/images/33007fa0-541f-460f-bdc1-0c1a60c32473.jpg'),
(52, 'Gamba 1kg', 3, '4.10', '/api/images/69d3b415-9a82-4270-af25-1f97cee911c6.jpg'),
(53, 'Eggplants 1kg', 3, '5.70', '/api/images/487c264f-a4db-4a7f-8422-a6a7589f4e09.jpg'),
(54, 'Cauliflower 1kg', 3, '4.30', '/api/images/f8e5770f-507a-442d-9583-2006e3bed234.jpg'),
(55, 'Cucumbers 1kg', 3, '3.30', '/api/images/01496a36-571b-42be-a249-a1f23a358aae.jpg'),
(56, 'Cherry Tomato 1kg', 3, '5.50', '/api/images/6bfa45e5-5f8f-4c97-9c57-02015f8379ba.jpg'),
(57, 'Tomatos', 3, '4.60', '/api/images/678353bf-ff96-460e-8a85-4b6b0538d4d6.jpg'),
(58, 'Sliced Bread', 6, '4.40', '/api/images/c0525ac5-f47d-4463-a2ec-de0f06975ccc.jpg'),
(59, 'Round Buns', 6, '2.10', '/api/images/fd1e2e45-66b6-4098-bfd8-1723702dc952.jpg'),
(60, 'Long Buns', 6, '2.10', '/api/images/5f9601f8-19fa-40da-9968-0b31fe9fef7d.jpg'),
(61, 'Pretzel Buns', 6, '3.30', '/api/images/ed95d991-abdd-4298-a72f-5c61e64dbab9.jpg'),
(62, 'M & M', 7, '6.90', '/api/images/261827db-7458-4c8c-8b32-b5dee8fd2c37.jpg'),
(63, 'Pesek Zman Vanilla', 7, '6.50', '/api/images/34aaa873-7fff-4be7-b144-bd76a0dab8a0.jpg'),
(64, 'Pesek Zman Nugat', 7, '6.90', '/api/images/224272c8-8e21-4c89-b991-97d3a3537499.png'),
(65, 'Biskit Chocolate Milk', 7, '7.70', '/api/images/ad03285d-9921-4462-bc18-7bb65475c0f5.jpg'),
(66, 'Pesek Zman', 7, '6.80', '/api/images/a29c5f1a-076b-49cb-949a-552fe990cb0d.jpg'),
(67, 'White Chocolate with cookies', 7, '4.70', '/api/images/bd6bcd4c-7e3c-4ead-8d6e-dbe351615d07.jpg'),
(68, 'Chocolate Para', 7, '4.70', '/api/images/0e929a77-a876-4d2a-b2fa-7cdd2b83a0f8.jpg'),
(69, 'King Nuts', 5, '4.40', '/api/images/803a1896-bd9a-475b-bbe7-415894993821.jpg'),
(70, 'White Grains', 5, '3.30', '/api/images/347e1395-2bd2-4316-89d6-d71b7ef2bd59.jpg'),
(71, 'Black Grains', 5, '3.30', '/api/images/7efcf43e-aca9-418c-a59e-105c2cfe390f.jpg'),
(72, 'Kashios', 5, '4.50', '/api/images/8a610b9c-bf7b-4832-ab76-591ccefc7cd7.jpg'),
(73, 'Tonsils', 5, '5.60', '/api/images/75604a06-384b-454f-887d-841114cab7b5.jpg'),
(74, 'Watermelon', 4, '7.70', '/api/images/f07c8dd4-291c-4983-9749-a715ec22dec9.jpg'),
(75, 'Peach', 4, '4.40', '/api/images/94649251-b397-4a4f-a982-3cd7b2f82cf5.jpg'),
(76, 'Melon', 4, '7.60', '/api/images/694155b6-0893-4f0f-86ca-e4f588519d44.jpg'),
(77, 'Apples', 4, '4.40', '/api/images/0c4902df-4625-4df7-99c4-e0dda9f3598b.jpg'),
(78, 'Pear', 4, '3.70', '/api/images/5f6c2db7-b049-4331-a43e-4e9f83fa7f09.jpg'),
(79, 'Borax Philo Cheese', 10, '12.30', '/api/images/04ef8542-ee1d-4eca-b8d1-86952d7b5d13.jpg'),
(80, 'Vegeterian Hamburger', 10, '8.70', '/api/images/d1f915c5-157d-4e47-a9a0-ed19e52ec0cb.jpg'),
(81, 'Onion Rings', 10, '10.30', '/api/images/ce044f7f-614d-4c98-ba6d-034b1c0e9043.jpg'),
(82, 'Melawah', 10, '7.60', '/api/images/209049a6-f603-49f4-a271-5205127e9712.jpg'),
(83, 'Pizza Margarita', 10, '12.90', '/api/images/00414290-1c23-4d8d-8dc3-62d11a085b0f.jpg'),
(84, 'Chips', 10, '11.20', '/api/images/930a0772-6ef9-44a0-9751-a586fdbc4f16.jpg'),
(85, 'Schnitzel Mama-Of', 10, '13.30', '/api/images/fe5e06a7-0bae-4e33-b47e-65bc3aaa8a7d.jpg'),
(86, 'Schnitzel Corns', 10, '10.20', '/api/images/3d1e5357-af94-4e0b-9ccb-bd84d8b6746c.jpg'),
(87, 'Peach Prigat', 9, '6.60', '/api/images/308be874-7423-4d82-9494-18979cc84b72.png'),
(88, 'Lemonana Prigat', 9, '6.90', '/api/images/fee383f6-4bdf-47f3-87b9-261de21e29a8.jpg'),
(89, 'Mango Prigat', 9, '6.90', '/api/images/7e449b3e-e0e5-479c-886e-a2feb8a09220.jpg'),
(90, 'Grapefruits Prigat', 9, '6.90', '/api/images/9f87f741-3592-45c3-93ab-6ded5cf7efe2.jpg'),
(91, 'Diet coke - sixpack', 9, '40.30', '/api/images/3d3a5aee-bc3d-431c-a1fb-34c746f0fd4a.jpg'),
(92, 'Zero Coke', 9, '9.80', '/api/images/dc1afddf-9437-4c49-b5f6-d7a12ae11ebc.jpg'),
(93, 'Fuze tea', 9, '8.70', '/api/images/94633a87-33dd-4418-8215-eab44ae93f9d.jpg'),
(94, 'Coke', 9, '9.70', '/api/images/5ef22d8b-c10d-4453-ae2c-23a26e184cb6.jpg'),
(95, 'Coke - can', 9, '4.80', '/api/images/c4aed9bc-0724-4c6f-bf13-4ed66bb535eb.jpg'),
(96, 'Orange juise Prigat', 9, '6.90', '/api/images/ccef5315-a2b2-46da-8a30-7a35fa7d66f1.jpg'),
(97, 'Garlic ', 13, '9.40', '/api/images/9ed772c7-11aa-4e23-98c0-5ba9167327d3.jpg'),
(98, 'Oregano', 13, '9.40', '/api/images/9fbd7ad2-7c01-42fa-932b-1187529b2355.jpg'),
(99, 'Lemon Salt', 13, '9.40', '/api/images/0f204a98-4ef8-461d-8a56-8bc6b6a1ab2b.jpg'),
(100, 'Black Pepper', 13, '9.40', '/api/images/7e66b437-5845-424a-96ed-dffd679da582.jpg'),
(101, 'Grined Garlic', 13, '9.40', '/api/images/e94dcf95-16ec-4510-8ec1-73fee40084fd.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `client_id` (`client_id`);

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_id` (`cart_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_ibfk_1` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`);

--
-- Constraints for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`),
  ADD CONSTRAINT `cart_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
