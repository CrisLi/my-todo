angular.module("myTodo.Controllers", [])
  .controller("todoController", function($rootScope, $scope, Todo, $http) {
    
    $rootScope.PAGE = "todo"

    $scope.loadTodos = function() {

      $scope.todos = [];
      $scope.dones = [];
      $scope.hasTodos = false;
      
      Todo.query(function(todos) {

        angular.forEach(todos, function(todo) {
          if (todo.completed) {
            $scope.dones.push(todo);
          } else {
            $scope.todos.push(todo);
            $scope.hasTodos = true;
          }
        });

      });

    }

    $scope.addTodo = function(data) {

      if ($scope.todoForm.$invalid) {
        return false;
      }      

      var todo = new Todo(data);
      todo.completed = false;

      todo.$save(function() {
        $scope.loadTodos();
        delete $scope.todo;
      })
    }

    $scope.done = function(id) {

      var todo = new Todo({
        _id: id
      });
     
      todo.$done(function() {
        $scope.loadTodos();
      });

    };

    $scope.redo = function(id) {

      var todo = new Todo({
        _id: id
      });
     
      todo.$redo(function() {
        $scope.loadTodos();
      });

    };

    $scope.doAllTodos = function() {

      var ids = [];

      angular.forEach($scope.todos, function(todo) {
        ids.push(todo._id);
      });

      $http.post("/api/todos/batch/done", ids).success(function() {
        $scope.loadTodos();
      });
    };

    $scope.deleteTodo = function(id) {

      if (confirm("Are you sure to delete this todo?")) {
        
        var todo = new Todo({
          _id: id
        });
       
        todo.$remove(function() {
          $scope.loadTodos();
        });
      }

    };

    $scope.loadTodos();

  })
  .controller("aboutController", function($rootScope, $scope) {

    $rootScope.PAGE = "about"
    $scope.content = "Why we need a new Todo application?";

  });