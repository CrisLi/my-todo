var app = angular.module('myTodo', ['ui.router', 'myTodo.Controllers', 'myTodo.Services']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");

  $stateProvider.state('todo', {
    url: "/",
    controller : 'todoController',
    templateUrl: '/html/todo.html'
  }).state('about', {
    url: "/about",
    controller : 'aboutController',
    templateUrl: '/html/about.html'
  });

});

// app.run(function($rootScope) {

//   $rootScope.$on('$locationChangeSuccess', function(event) {
//       // Halt state change from even starting
//       // event.preventDefault();
//   });
// });
