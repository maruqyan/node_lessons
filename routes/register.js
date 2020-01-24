const express = require('express');
const router = express.Router();
const {isEmail,isName, isUsername, isPassowrd} = require('../Utils/index');

router.get('/',(req,res,next) => {    
  res.render('register');
})

router.post('/',(req,res,next) => {    
  if(isName(req.body.name) && isEmail(req.body.email) && isUsername(req.body.username) && isPassowrd(req.body.password,req.body.confirm )){  
    console.log(req.body);   
    res.redirect('login');
  }else{
    console.log('Invalid or uncorect data');
    
    res.redirect('/register');
  }
})

module.exports = router
