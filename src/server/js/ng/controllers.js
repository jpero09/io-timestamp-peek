(function(){
  'use strict';

  angular
    .module('app')
    .controller('TimeStamp_Controller', TimeStamp_Controller)
    ;

  function TimeStamp_Controller(){
    var vm = this;

    vm.sampleData= [
      Date.now(),
      new Date(2015,0,1),
      new Date(1999, 11, 31),
      '25 Dec 1995 13:30:00 +0430',
      'bad input data'
    ];
  }
})();