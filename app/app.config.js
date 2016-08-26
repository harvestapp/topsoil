angular.
  module('topsoilRootApp').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/', {
            template: '<hello-world></hello-world>'
          }).
          when('/routeTest', {
            template: '<route-test></route-test>'
          }).
          when('/info', {
            template: '<info></info>'
          }).
          otherwise('/');
      }
    ]);
