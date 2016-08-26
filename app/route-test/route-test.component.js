angular.
  module('routeTest').
    component('routeTest', {
      templateUrl: 'app/route-test/route-test.template.html',
      controller: function RouteTestController() {
        this.hello = 'URL routing is working properly.';
        this.return = 'Test auto-routing to home. (.otherwise clause in app.config)';
      }
    });
