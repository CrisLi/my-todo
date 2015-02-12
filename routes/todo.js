var express = require("express");
var Todo = require("../models/todo");
var router = express.Router();

router.get('/todos', function(req, res, next) {

  Todo.findAllByUser(req.currentUserId, function(err, data) {
    if (err) return next(err);
    res.send(data);
  });

});

router.post('/todos', function(req, res, next) {

  var todo = new Todo(req.body);
  todo.user = req.currentUserId;

  todo.save(function(err, data) {
    if (err) return next(err);
    res.status(201).send(todo);
  });

});

router.post('/todos/batch/done', function(req, res, next) {

  Todo.completeAll(req.body, function(err, count) {
    if (err) return next(err);
    res.status(202).send({count: count});
  });

});

router.delete('/todos/:id', function(req, res, next) {

  var id = req.params.id; 

  Todo.remove({_id: id}, function(err, count) {
    if (err) return next(err);
    res.send({count: count});
  });

});

router.put('/todos/:id', function(req, res, next) {

  var completed = req.query.completed;
  var id = req.params.id;

  Todo.findOne({ _id: id }, function (err, todo) {
    
    if (err) return next(err);

    todo.completed = completed;
    
    todo.save(function (err, todo) {
      if (err) return next(err);
      res.status(202).send(todo);
    });
    
  });

});

module.exports = router;
