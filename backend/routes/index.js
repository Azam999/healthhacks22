var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Connected to the API')
});

module.exports = router;