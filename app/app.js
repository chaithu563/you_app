'use strict';

var underscore = angular.module('underscore', []);
underscore.factory('_', function () {
    return window._; // assumes underscore has already been loaded on the page
});

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.home',
   'myApp.admin',
   'myApp.service',
  'ui.bootstrap',
   'underscore',
   'ngResource',
   'myApp.component'
  
]).

config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$sceDelegateProvider', function ($stateProvider, $urlRouterProvider, $httpProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
  'self',
  "https://widgets.shopifyapps.com/**"
    ]);

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('video', {
          url: '/video',
          templateUrl: 'view1/view1.html',
          controller: 'View1Ctrl'
      });
    $stateProvider
      .state('home', {
          url: '/home',
          templateUrl: 'home/home.html',
          controller: 'homeCtrl'
      })
    $stateProvider
      .state('video1', {
          url: '/video1',
          templateUrl: 'wirewax/wirewax.html'

      });
    $stateProvider
     .state('admin', {
         url: '/admin',
         templateUrl: 'admin/admin.html',
         controller: 'adminCtrl'

     });

  

}])
.run(['$http', '$window', '$location', function ($http, $window, $location) {
    var login = 'gayam_raja@yahoo.co.in';
    var password = 'azsxdc';
    $http.defaults.headers.common['Authorization'] = 'Basic ' + login + ':' + password;
    //$http.defaults.headers.common['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, PUT';
    //$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    //$http.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
    //$http.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");
    $window.onload = RedirNonHttps();

    function RedirNonHttps() {
       var path= $location.path();
        //if ($location.href.indexOf("https://") == -1) {
        //    $location.href = $location.href.replace("http://", "https://");
        //}
       $location.path(path.replace("http://", "https://"));
    }
}]);
