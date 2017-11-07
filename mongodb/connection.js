var _db;
const MongoClient = require('mongodb').MongoClient;

module.exports = {
    connectToServer: function () {
        MongoClient.connect('mongodb://jsbimra:mlab123@ds249605.mlab.com:49605/expressquotes', (err, database) => {
            if (err)
                return console.log(err);

            //store db to gloabl variable
            _db = database;
        });
    },
    getDb: function(){
        return _db;
    }
};