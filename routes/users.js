var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
//  res.send('respond with a resource');
    res.render('users', {title: 'Users', message: 'respond with a resource'});
});



router.get('/profile', function (req, res, next) {
//  res.send('Got a post request');
console.log('post request');
    res.render('users', {title: 'User Profile', message: 'user profile request intitated!'});
});

router.get('/account', function (req, res, next) {
//  res.send('respond with a resource');
    res.render('users', {title: 'User Account', message: 'user profile request intitated!'});
});

module.exports = router;
