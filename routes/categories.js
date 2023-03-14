const express = require('express');

const router = express.Router();

const list = [
  {
    "id": 1,
    "category": "cats"
  },
  {
    "id": 2,
    "category": "sharks"
  }
];

router.get('/', async (req, res) => {
  res.json(list);
});

module.exports = router;
