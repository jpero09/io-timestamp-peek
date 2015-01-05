(function(){
  'use strict';

  angular
    .module('io.directives', ['app.services'])
    .directive('iotimestamppeek', ioTimeStampPeek)
    ;

  function ioTimeStampPeek() {
    return {
      restrict: 'E',
      scope: { value: '=' },
      replace: true,
      template: '<div class="timeStampPeek"><div class="flipper"><div class="momentValue">{{mValue}}</div><div class="rawValue">{{rValue}}</div></div></div>',
      link: linkFn
    };

    function linkFn(scope, element, attrs){
      scope.lValue = null;
      scope.$watch('value', function onDateChange(newVal){
        if(!newVal) return;
        var cleanVal = moment(newVal);
        scope.rValue = cleanVal.format("MM/DD/YYYY, h:mm:ss a");
        scope.mValue = cleanVal.fromNow();
      });
    }
  }
})();