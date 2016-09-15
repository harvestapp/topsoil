angular.
  module('topsoilRootApp').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/', {
            template: '<hello-world></hello-world>'
          }).
          when('/messages', {
            template: '<messages></messages>'
          }).
          otherwise('/');
      }
    ]);
