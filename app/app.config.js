angular.
  module('topsoilRootApp').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/', {
            template: '<hello-world></hello-world>'
          }).
          when('/businessTools', {
            template: '<business-tools></business-tools>'
          }).
          when('/messages', {
            template: '<messages></messages>'
          }).
          otherwise('/');
      }
    ]);
