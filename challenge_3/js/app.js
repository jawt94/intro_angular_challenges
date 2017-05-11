console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController)
app.controller("loanController", loanController)

function infoController(){
  this.name = "Joyce Au"; // default name
  this.height = 5.4; // default height in feet
}

function loanController(){
  var vm = this;
  vm.amount = 1000;
  vm.apr = 3.5;

  vm.month = function(n){
    var yearly_interest = (vm.amount * (vm.apr / 100) );
    var monthly_interst = ( yearly_interest / 12 );
    var accrued_interest = n * monthly_interst || 0;
    return {
      accrued_interest: accrued_interest,
      total_balance: vm.amount + accrued_interest
    }
  }
}
