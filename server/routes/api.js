const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  return res.status(200);
});

router.post('/', (req, res) => {
  return res.status(200);
});

router.patch('/', (req, res) => {
  return res.status(200);
});

router.delete('/', (req, res) => {
  return res.status(200);
});

module.exports = router;
