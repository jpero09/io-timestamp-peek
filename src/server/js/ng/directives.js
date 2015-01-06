(function(){
  'use strict';

  angular
    .module('io.directives', ['app.services'])
    .directive('iotimestamppeek', ioTimeStampPeek)
    ;

  function ioTimeStampPeek() {
    return {
      restrict: 'E',
      scope: {
        value: '=',
        invalidLabel: '@',
        defaultView: '@',
        format: '@'
      },
      replace: true,
      template: '<div class="timeStampPeek"><div class="flipper"><div>{{mValue}}</div><div>{{rValue}}</div></div></div>',
      link: linkFn
    };

    function linkFn(scope){
      var EXACT_VIEW = "exact";
      var DEFAULT_FORMAT = "MM/DD/YYYY, h:mm:ss a";
      scope.$watch('value', function onDateChange(newVal){
        var cleanVal = moment(new Date(newVal));
        if(!cleanVal.isValid()){
          var err = scope.invalidLabel ? scope.invalidLabel : moment.localeData().invalidDate();
          scope.rValue = err;
          scope.mValue = err;
          return;
        }
        var format = (scope.format) ? scope.format : DEFAULT_FORMAT;
        if(scope.defaultView && scope.defaultView.toLowerCase() === EXACT_VIEW){
          scope.mValue = cleanVal.format(format);
          scope.rValue = cleanVal.fromNow();
        }
        else{
          scope.rValue = cleanVal.format(format);
          scope.mValue = cleanVal.fromNow();
        }
      });
    }
  }
})();