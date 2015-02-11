var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  user : { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  completed: Boolean,
  createdDate: { type: Date, default: Date.now }
});

var userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  createdDate: { type: Date, default: Date.now }
});

module.exports = {
  todo: todoSchema,
  user: userSchema
};
