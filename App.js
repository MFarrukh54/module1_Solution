!function(){function e(e){e.list="",e.Value="",e.showResult=function(){var l=function(e){var l="";if(""==e)l="Please enter data first";else{var n=e.split(",");l=n.length>0&&n.length<=3?"Enjoy!":"Too much!"}return l}(e.list);e.value=l},e.clearValue=function(){e.value=""}}angular.module("Module1App",[]).controller("Module1Controller",e),e.$inject=["$scope"]}();
// (function () {
    
//  angular.module('Module1App',[])

//  .controller('Module1Controller',Module1Controller);

//  Module1Controller.$inject=['$scope'];

// function Module1Controller($scope){
//     $scope.list="";
//     $scope.Value="";
//     $scope.showResult=function(){
//          var result=getResult($scope.list);
//         $scope.value=result;
//     }
//     $scope.clearValue=function(){
//         $scope.value="";
//     }
// }
// function getResult(string){
// var result=""
// if(string==""){
//     result="Please enter data first";
// }
// else{     
// var listValue=string.split(',');
// if(listValue.length>0 && listValue.length<=3){
//     result="Enjoy!";
// }
// else  {
//     result="Too much!";
// }
// }
// return result;
// }
// })();