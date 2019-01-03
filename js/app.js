/// <reference path="../views/login.html" />
/// <reference path="../views/login.html" />
var app = angular.module('myApp', ['ngRoute', 'firebase']);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          //controller: 'JobPostController',
          templateUrl: 'Main.html'
      })
     .when('/login', {
         controller: 'LoginController',   
         templateUrl: 'views/login.html'
     })
         .when('/register', {
             controller: 'RegisterController',
             templateUrl: 'views/register.html'
         })
      .when('/Post', {
          controller: 'JobPostController',
          templateUrl: 'views/dashboard-post-a-job.html'
        })
        .when('/Profile', {
            controller: 'ProfileController',//
            templateUrl: 'views/Profile.html'
        })
        .when('/Message', {
            //controller: 'ProfileController',//
            templateUrl: 'views/Message.html'
        })
        .when('/LogOut', {
          
            controller: 'LogOutController',
            templateUrl: 'Main.html'

           
        })
        .when('/Dashboard', {
            //controller: 'ProfileController',//
            templateUrl: 'views/Dashboard.html'
        })

      .otherwise({
          redirectTo: '/'
      });
});

app.constant("FBURL",
  "https://muscat-green.firebaseio.com/" //Use the URL of your project here
);
