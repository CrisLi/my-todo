var mongoose = require('mongoose');
var url = require('./config/db.json').url;

exports.connectDB = function() {
  mongoose.connect(url, function(err) {
    if (err) {
      throw new Error('Can not connect to database! ' + err);
    }
    console.log('Connected mongodb ok.');
  });
};
