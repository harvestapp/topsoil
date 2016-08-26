angular.
  module('info').
    component('info', {
        templateUrl: 'app/info/info.template.html',
        controller: function InfoController() {
          this.hello = 'What is Topsoil-root?';
        }
    });
