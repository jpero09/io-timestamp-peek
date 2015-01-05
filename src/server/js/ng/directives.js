(function(){
  'use strict';

  angular
    .module('io.directives', ['app.services'])
    .directive('iotimestamppeek', ioTimeStampPeek)
    ;

  function ioTimeStampPeek() {
    return {
      restrict: 'E',
      scope: { value: '=', invalidlabel:'@' },
      replace: true,
      template: '<div class="timeStampPeek"><div class="flipper"><div class="momentValue">{{mValue}}</div><div class="rawValue">{{rValue}}</div></div></div>',
      link: linkFn
    };

    function linkFn(scope){
      scope.$watch('value', function onDateChange(newVal){
        var cleanVal = moment(new Date(newVal));
        if(!cleanVal.isValid()){
          var err = scope.invalidlabel ? scope.invalidlabel : moment.localeData().invalidDate();
          scope.rValue = err;
          scope.mValue = err;
          return;
        }
        scope.rValue = cleanVal.format("MM/DD/YYYY, h:mm:ss a");
        scope.mValue = cleanVal.fromNow();
      });
    }
  }
})();