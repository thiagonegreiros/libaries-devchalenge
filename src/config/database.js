/**
 * Arquivo: config/database.js
 * Descrição: Arquivo responsável pelas 'connectionStrings da aplicação: PostgreSQL.
 * Data: 29/12/2020
 * Author: Thiago Negreiros
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Database Connected!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};