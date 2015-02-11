angular.module("myTodo.Services", ['ngResource'])
  .factory("Todo", function($resource) {

    return $resource("/api/todos/:id", { id: '@_id',  }, {
      update: {
        method: 'PUT'
      },
      done: {
        method:'PUT',
        params: {
          completed: true
        }
      },
      redo: {
        method:'PUT',
        params: {
          completed: false
        }
      }
    });

  });