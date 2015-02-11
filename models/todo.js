var mongoose = require('mongoose');
var todoSchema = require("../schemas").todo;

todoSchema.statics.completeAll = function (ids, callback) {
  this.update({_id: { $in: ids }}, {completed: true}, { multi: true }, callback);
}

todoSchema.statics.findAll = function (callback) {
  this.find({}, null, {sort: 'createdDate'}, callback);
}

todoSchema.statics.findAllByUser = function (userId, callback) {
  this.find({user: userId}, null, {sort: 'createdDate'}, callback);
}

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
