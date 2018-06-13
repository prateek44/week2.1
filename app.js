(function()
{
'use strict';
angular.module('customFilterApp',[])
.controller('customFilterAppController',customFilterAppController)
.filter('replaced',replaceFilterFactory);
//customFilterAppController.$inject=['$scope','replacedFilter'];
function customFilterAppController($scope)
{
  $scope.msg="he likes to swim";
  $scope.msgafterfilter="";
  $scope.callFilter=function()
  {
    $scope.msgafterfilter=replacedFilter($scope.msg);
  };

}
function replaceFilterFactory()
{
  console.log('custom filter factory called');
  return function(input)
  {

    input=input.replace("likes","loves");
    console.log('text replaced');
    return input;

  };
};
})();
