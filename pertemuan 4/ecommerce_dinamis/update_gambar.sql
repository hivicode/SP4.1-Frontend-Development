-- Update data yang sudah ada
UPDATE products SET gambar = 'images/sepatu.jpg' WHERE nama = 'Sepatu Sport';
UPDATE products SET gambar = 'images/kaos.jpg' WHERE nama = 'Kaos Polos';

-- Atau hapus semua data dan insert ulang
-- DELETE FROM products;
-- INSERT INTO products (nama, harga, gambar, deskripsi)
-- VALUES
--   ("Sepatu Sport", 350000, "images/sepatu.jpg", "Sepatu olahraga ringan"),
--   ("Kaos Polos", 75000, "images/kaos.jpg", "Kaos polos katun premium");
