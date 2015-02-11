var mongoose = require('mongoose');
var userSchema = require("../schemas").user;

userSchema.statics.findAll = function (callback) {
  this.find({}, null, {sort: 'username'}, callback);
}

var User = mongoose.model('User', userSchema);

module.exports = User;
