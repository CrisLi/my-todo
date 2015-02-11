var express = require('express');
var User = require("../models/user");
var router = express.Router();

// module.exports = router;

exports.ipUser =  function(req, res, next) {

  if (!req.currentUserId) {
    
    User.findOne({ username: req.ip}, function(err, user) {
      
      if (err) return next(err);
      
      if (user == null) {
        
        user = new User({
          username: req.ip,
          password: "secret",
          email: "secret@abc.com"
        });

        user.save(function(err, data) {
          if (err) return next(err);
          req.currentUserId = data._id.toString();
          return next();
        });

      } else {
        req.currentUserId = user._id.toString();
        return next();
      }
      
    });

  } else {
    return next();
  }

}