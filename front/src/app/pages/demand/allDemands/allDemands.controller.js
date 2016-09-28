(function(){
  'use strict';

  angular
    .module('BlurAdmin')
    .controller('allDemandsCtrl', allDemandsCtrl);

  function allDemandsCtrl(){
    var vm = this;

    createMock();
    function createMock() {
      vm.featured = [];
      vm.newest = [];
      vm.searchResult = [];

      var randR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for (var i = 0; i < 12; i++) {
        vm.featured = vm.featured.concat({
          name: 'remedio ' + randR[Math.floor(Math.random()*randR.length)],
          hospital: 'hospital ' + randR[Math.floor(Math.random()*randR.length)],
          distance: Math.floor(Math.random()*100),
          count: Math.floor(Math.random()*200),
          date: new Date('2016-09-' + Math.floor(Math.random()*30))
        });
        vm.newest = vm.newest.concat({
          name: 'remedio ' + randR[Math.floor(Math.random()*randR.length)],
          hospital: 'hospital ' + randR[Math.floor(Math.random()*randR.length)],
          distance: Math.floor(Math.random()*100),
          count: Math.floor(Math.random()*200),
          date: Date.now()
        });
      }
      for (var i = 0; i < 30; i++) {
        vm.searchResult = vm.searchResult.concat({
          name: 'remedio ' + randR[Math.floor(Math.random()*randR.length)],
          hospital: 'hospital ' + randR[Math.floor(Math.random()*randR.length)],
          distance: Math.floor(Math.random()*100),
          count: Math.floor(Math.random()*200),
          date: new Date('2016-09-' + Math.floor(Math.random()*30))
        });
      } 
    }

  }
}());
