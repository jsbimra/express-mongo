var express = require('express');
var router = express.Router();

var mongoUtil = require('../mongodb/connection');

/* GET home page. */
router.get('/', function (req, res, next) {
    var db = mongoUtil.getDb();
    if (db) {
        //console.log(req.query);
        
        if('d' in req.query){
            //console.log('command to delete');
            db.collection('quotes')
                    .findOneAndDelete({name: req.query.name},
                    (err, result) => {
                    if (err)
                        return res.send(err);
                    
                    res.redirect('/listQuotes');
                });
        }
        
        //Fetch records from db and sort by descending order
        db.collection('quotes').find().sort({_id: -1}).toArray(function (err, results) {

           // //console.log(results);
            //console.log('results found!!');

            res.render('quotes', {title: 'Quotes', bodyContent: results});
        });
        
    }
});

/* POST users listing. */
router.post('/', function (req, res, next) {
    var db = mongoUtil.getDb();

    //console.log('Hellooooooooooooooooo!', req.body);
    //console.log('Hellooooooooooooooooo!', req.body.name);

//    res.send('respond with a resource'+res);

    if (db) {

        if (req.body.name !== '' && req.body.quote !== '') {

            db.collection('quotes').save(req.body, (err, result) => {
                if (err)
                    return //console.log(err);
                //console.log('saved to database');

                res.redirect('/listQuotes');
            });

        } else {
            res.render('quotes', {title: 'Quotes', bodyContent: []});
        }
    }
});

router.put('/', (req, res) => {
    var db = mongoUtil.getDb();
    
    //console.log('PUT method');
    //console.log('PUT method', req);
    
    if (db) {
//        //console.log( req.body);
        
        db.collection('quotes')
            .findOneAndUpdate({name: req.body.queryName}, {
                $set: {
                    name: req.body.name,
                    quote: req.body.quote
                }
            }, {
                sort: {_id: -1},
                upsert: true
            }, (err, result) => {
                if (err)
                    return res.send(err);
                res.send(result);
            });
    }
});

module.exports = router;
