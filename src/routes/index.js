/**
 * Arquivo: src/routes/index.js
 * Descrição: Arquivo responsável pela chamada da Api da aplicação.
 * Data: 29/12/2020
 * Author Thiago Negreiros
 */

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Welcome the Libary API - DevChallenge',
    version: '1.0.0',
  });
});

module.exports = router;