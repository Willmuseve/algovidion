// server/models/algorithm.js
const pool = require('../config/database'); // Assumes you have a database config file

class Algorithm {
  static async getAll() {
    const [rows, fields] = await pool.query('SELECT * FROM algorithms');
    return rows;
  }

  static async getById(id) {
    const [rows, fields] = await pool.query('SELECT * FROM algorithms WHERE id = ?', [id]);
    return rows[0]; // Return the first (and only) row
  }
}

module.exports = Algorithm;