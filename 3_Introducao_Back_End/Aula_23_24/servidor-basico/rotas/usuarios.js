const express = require('express');
const router = express.Router();

// Define uma rota GET para /usuarios
router.get('/', (req, res) => {
  res.send('Lista de usuários');
});

module.exports = router; 

