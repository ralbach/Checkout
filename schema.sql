DROP DATABASE Checkout;
CREATE DATABASE Checkout;

USE Checkout;

CREATE TABLE User (
  userId INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  street VARCHAR(30) NOT NULL,
  houseNum INT(5) NOT NULL,
  city VARCHAR(30) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip INT(5) NOT NULL,
  phone INT(10) NOT NULL,
  ccnum INT NOT NULL,
  expiration INT(4) NOT NULL,
  cvv INT(3) NOT NULL,
  billingZip INT(5) NOT NULL,
  PRIMARY KEY(userId)
);
