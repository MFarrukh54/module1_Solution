(function () {
    
 angular.module('Module1App',[])

 .controller('Module1Controller',Module1Controller);

 Module1Controller.$inject=[$scope];

function Module1Controller($scope){
    $scope.name="Farrukh";
    $scope.list="";
    $scope.showResult=function(){
         var lt=calculateResult($scope.list);
        $scope.value=lt;
    }
}
function calculateResult(string){
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