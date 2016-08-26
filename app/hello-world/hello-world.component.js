angular.
  module('helloWorld').
    component('helloWorld', {
      templateUrl: 'app/hello-world/hello-world.template.html',
      controller: function HelloWorldController() {
        this.hello = 'Topsoil-root is running.';
      }
    });
