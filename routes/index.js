var express = require('express');
var router = express.Router();

var {
  increment_count,
  decrement_count
} = require('../controllers/counter_controller.js');

router.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.FRONT_URL);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

router.put('/increment', increment_count);
router.put('/decrement',   decrement_count);

module.exports = router;
