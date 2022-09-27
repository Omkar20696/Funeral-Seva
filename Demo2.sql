create database Demo2;
use demo2;

CREATE TABLE `add_to_cart` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `added_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_pk_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
desc add_to_cart;
CREATE TABLE `category` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
desc category;
CREATE TABLE `checkout_cart` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `order_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `payment_type` enum('COD','ONLINE') DEFAULT NULL,
  `delivery_address` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
desc checkout_cart;
CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `order_id` varchar(40) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `order_on` date DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_pk_id` (`product_id`),
  CONSTRAINT `product_pk_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
desc orders;

CREATE TABLE `products` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `price` double DEFAULT NULL,
  `added_on` datetime DEFAULT CURRENT_TIMESTAMP,
  `category_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id_fk` (`category_id`),
  CONSTRAINT `category_id_fk` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
desc products;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `login_token` text,
  `type` int(11) DEFAULT NULL,
  `address` text,
  `is_email_verified` int(11) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
desc users;

alter table add_to_cart add constraint foreign key(user_id) references users(id);
alter table add_to_cart add constraint foreign key(product_id) references products(id);
alter table add_to_cart modify user_id bigint(20);
alter table checkout_cart modify user_id bigint(20);
alter table checkout_cart modify product_id bigint(20);
alter table checkout_cart modify order_id bigint(20);
alter table checkout_cart add constraint foreign key(user_id) references users(id);
alter table checkout_cart add constraint foreign key(order_id) references orders(id);
alter table checkout_cart add constraint foreign key(product_id) references products(id);






