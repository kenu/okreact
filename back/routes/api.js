var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.json({ msg: 'Hello' });
});

module.exports = router;
