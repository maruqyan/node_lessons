const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'Home Page',
     home:'Home',
     galery:'Galery',
     register:'Register',
     login:'Login'
  });
});

module.exports = router;
