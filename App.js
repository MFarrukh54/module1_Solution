(function () {
    
 angular.module('LunchCheck',[])

 .controller('LunchCheckController',LunchCheckController);

 LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
    $scope.list="";
    $scope.Value="";
    $scope.showResult=function(){
         var result=getResult($scope.list);
        $scope.value=result;
    }
    $scope.clearValue=function(){
        $scope.value="";
    }
}
function getResult(string){
var result=""
if(string==""){
    result="Please enter data first";
}
else{     
var listValue=string.split(',');
if(listValue.length>0 && listValue.length<=3){
    result="Enjoy!";
}
else  {
    result="Too much!";
}
}
return result;
}
})();