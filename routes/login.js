const express = require('express');
const router = express.Router();



router.get('/', function(req, res, next) {
    res.render('login', {
        title:'Login Page',
        home:'Home',
        galery:'Galery',
        register:'Register',
        login:'Login'
    });
});
  
module.exports = router;