-- Buat database jika belum ada
CREATE DATABASE IF NOT EXISTS ecommerce_db;

-- Gunakan database
USE ecommerce_db;

-- Hapus tabel jika sudah ada (opsional)
DROP TABLE IF EXISTS products;

-- Buat tabel products
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  harga DECIMAL(10,2) NOT NULL,
  gambar VARCHAR(255),
  deskripsi TEXT
);

-- Insert data produk
INSERT INTO products (nama, harga, gambar, deskripsi)
VALUES
  ("Sepatu Sport", 350000, "images/sepatu.jpg", "Sepatu olahraga ringan"),
  ("Kaos Polos", 75000, "images/kaos.jpg", "Kaos polos katun premium");

-- Tampilkan semua data
SELECT * FROM products;
