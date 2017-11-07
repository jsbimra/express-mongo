var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req.query);
    if ('name' in req.query) {
        res.render('index', {title: 'Edit Quotes', message: 'Welcome User!', query: req.query});
        
    } else {
        res.render('index', {title: 'Add Quotes', message: 'Welcome User!', query: {name: '', quote: ''}});
    }      
});



module.exports = router;
