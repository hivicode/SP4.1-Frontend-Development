import mysql from 'mysql2/promise';

export const db = {
  query: async function(sql, values) {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'ecommerce_db'
    });

    const [results] = await connection.execute(sql, values);
    return results;
  }
};

export async function query(sql, values) {
  return db.query(sql, values);
}
