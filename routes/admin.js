/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var router = express.Router();

//Get Admin listing

router.get('/',function(req, res, next){
    res.render('admin', { title: 'Admin Express', message: 'You have made get request on admin express highway!' });
//   res.send('responding admin get request succesfully'); ;
    next()
});

router.post('/',function(req, res, next){
    res.render('admin', { title: 'Admin Express', message: 'You have made POST request on admin express highway!' });
//   res.send('responding admin get request succesfully'); 
});

//router.post('/admin', function(req, res, next){
//    
//    res.render('admin', { title: 'Admin Express Highway', message: 'You have made post  request at admin express highway!' });
////      res.send('responding admin post request succesfully'); 
//});

module.exports = router;