console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("DetailsController", DetailsController);

function WelcomeController(){
  var vm = this;
  vm.full_name = "JOYCE AU";
  vm.age = 23;
  vm.city = "Hong Kong"
  vm.state = "Hong Kong";
  vm.shout = function(str) {
    return str.toUpperCase() + '!';
  }
}

function DetailsController() {
  var vm = this;
  vm.class_name = "Self taught";
  vm.enrolled_students = 1;
  vm.start_date = "5/11/2017";
  vm.end_date = "5/12/2017";
  vm.daysRemaining = function(sd, ed) {
    return Math.floor((Date.parse(ed) - Date.parse(sd))/86400000);
  }
}
