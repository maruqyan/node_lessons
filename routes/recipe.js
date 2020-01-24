const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
  return res.render('recepies');
});

router.get('/recipe/:id',(req, res, next) => {  
  console.log(req.params.id);
  
  return res.render('recepie-single');
});



module.exports = router;
