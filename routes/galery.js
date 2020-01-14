const express = require('express');
const router = express.Router();



router.get('/', function(req, res, next) {
    res.render('galery', {
      title:'Galery Page',
      home:'Home',
      galery:'Galery',
      register:'Register',
      login:'Login',
      links:{
        link1:'https://source.unsplash.com/pWkk7iiCoDM/400x300',
        link2:'https://source.unsplash.com/aob0ukAYfuI/400x300',
        link3:'https://source.unsplash.com/EUfxH-pze7s/400x300',
        link4:'https://source.unsplash.com/M185_qYH8vg/400x300',
        link5:'https://source.unsplash.com/sesveuG_rNo/400x300',
        link6:'https://source.unsplash.com/AvhMzHwiE_0/400x300',
        link7:'https://source.unsplash.com/2gYsZUmockw/400x300',
        link8:'https://source.unsplash.com/EMSDtjVHdQ8/400x300',
        link9:'https://source.unsplash.com/8mUEy0ABdNE/400x300',
        link10:'https://source.unsplash.com/G9Rfc1qccH4/400x300',
        link11:'https://source.unsplash.com/aJeH0KcFkuc/400x300',
        link12:'https://source.unsplash.com/p2TQ-3Bh3Oo/400x300',
      }
    });
  });
  
module.exports = router;
