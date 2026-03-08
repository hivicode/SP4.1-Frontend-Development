CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(255),
  harga DECIMAL(10,2),
  gambar VARCHAR(255),
  deskripsi TEXT
);

INSERT INTO products (nama, harga, gambar, deskripsi)
VALUES
  ("Sepatu Sport", 350000, "sepatu.jpg", "Sepatu olahraga ringan"),
  ("Kaos Polos", 75000, "kaos.jpg", "Kaos polos katun premium");
