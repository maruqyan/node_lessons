const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',(req, res, next) => {
  return res.render('index');
});


router.get('/contact',(req, res, next) => {
  return res.render('contact');
});


router.get('/about',(req, res, next) => {
  return res.render('about');
});


module.exports = router;
