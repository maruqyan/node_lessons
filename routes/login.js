const express = require('express');
const router = express.Router();



router.get('/',(req,res,next) => {  
  res.render('login');
})

router.post('/',(req,res,next) => {
  console.log(req.body);
  
  res.send('ok');
})

module.exports = router
