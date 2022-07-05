const express = require('express');

const router = express.Router();
const { APP_NAME } = process.env;

/* GET users listing. */
router.get('/', (req, res) => {
  res.send(APP_NAME);
});

module.exports = router;
