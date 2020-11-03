-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 01 2020 г., 11:40
-- Версия сервера: 5.5.48
-- Версия PHP: 5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `admin_plumber`
--

-- --------------------------------------------------------

--
-- Структура таблицы `order_text`
--

CREATE TABLE IF NOT EXISTS `order_text` (
  `id` int(11) NOT NULL,
  `number` text NOT NULL,
  `order_time` text NOT NULL,
  `order_cat` text NOT NULL,
  `page` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `order_text`
--

INSERT INTO `order_text` (`id`, `number`, `order_time`, `order_cat`, `page`) VALUES
(25, '+7 (765) 765-76-76', '25.10.2020 / 13:6', 'Без категории', 'ready'),
(26, '+7 (657) 576-87-68', '25.10.2020 / 13:16', 'Без категории', 'archive'),
(28, '+7 (567) 546-77-86', '25.10.2020 / 13:16', 'Без категории', 'ready'),
(29, '+7 (456) 457-54-64', '25.10.2020 / 13:16', 'Без категории', 'ready'),
(30, '+7 (546) 567-68-78', '25.10.2020 / 14:29', 'Без категории', 'ready'),
(31, '+7 (678) 456-45-67', '25.10.2020 / 14:29', 'Без категории', 'ready'),
(32, '+7 (567) 898-79-89', '25.10.2020 / 14:29', 'Без категории', 'ready'),
(37, '+72148446548', '26.10.2020 / 21:54', 'Устранение протечки унитаза', 'ready'),
(38, '+75465765876', '27.10.2020 / 0:14', 'Штробление стен', 'ready'),
(42, '+7 (845) 648-54-57', '29.10.2020 / 12:34', 'Без категории', 'ready'),
(44, '+78768787878', '29.10.2020 / 12:43', 'Без категории', 'ready'),
(45, '+7 (435) 454-35-45', '29.10.2020 / 12:47', 'Без категории', 'home'),
(46, '+7 (546) 565-46-56', '29.10.2020 / 12:54', 'Без категории', 'home'),
(47, '+7 (564) 675-67-66', '29.10.2020 / 13:9', 'Без категории', 'home'),
(48, '+7 (324) 342-34-32', '29.10.2020 / 13:16', 'Установка и ремонт душевой кабины', 'home');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `order_text`
--
ALTER TABLE `order_text`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `order_text`
--
ALTER TABLE `order_text`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=49;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
