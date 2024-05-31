// server/index.js (Corrected)

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

// Create Express app instance FIRST
const app = express(); // <-- Moved this line up
const port = process.env.PORT || 3001;

// Database Connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.use(cors());
app.use(express.json());

// Include your API routes AFTER app is defined
const algorithmRoutes = require('./routes/algorithms');
app.use('/api/algorithms', algorithmRoutes); 

// Test the database connection:
pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
  connection.release();
});

// Start the server at the end
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});