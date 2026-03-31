const mysql = require('mysql2/promise');

async function updateDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'ecommerce_db'
    });

    console.log('Connected to database...');

    // Update gambar paths
    await connection.execute(
      "UPDATE products SET gambar = 'images/sepatu.jpg' WHERE nama = 'Sepatu Sport'"
    );
    await connection.execute(
      "UPDATE products SET gambar = 'images/kaos.jpg' WHERE nama = 'Kaos Polos'"
    );

    console.log('Gambar paths updated successfully!');

    // Tampilkan data
    const [rows] = await connection.execute('SELECT * FROM products');
    console.log('Current products:', rows);

    await connection.end();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

updateDatabase();
