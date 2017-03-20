console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("CohortController", CohortController);

function WelcomeController(){
  var vm = this;
  vm.full_name = "John Doe";
  vm.age = 35;
  vm.city = "San Francisco";
  vm.state = "CA"
  vm.shout = function(str){
    return str.toUpperCase() + "!";
  }
}

function CohortController(){
  var vm = this;
  vm.class_name = "WDI";
  vm.enrolled_students = ["Sally", "John", "Jane", "Sean"];
  vm.start_date = "4/01/2020";
  vm.end_date = "7/01/2020";
  vm.daysRemaining = function(){
    var ms_left = Date.parse(vm.end_date) - Date.now();
    var days_left = Math.floor( ms_left/1000/24/60/60 );
    return days_left;
  }
}
