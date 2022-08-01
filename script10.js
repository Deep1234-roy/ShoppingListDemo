/// <reference path = "angular.min.js" />

var app = angular   
            .module("myShoppingList",[])
            .controller("myCtrl",function($scope){
                $scope.products =["Milk","Butter","Bread"];
                $scope.addItem = function(){
                    $scope.errorText='';
                    if(!$scope.addMe)
                    {
                        return;
                    }
                    if($scope.products.indexOf($scope.addMe) == -1){
                        $scope.products.push($scope.addMe);
                    }else{
                        $scope.errorText = "This item is already present in our cart!!"
                    }
                    
                }
                $scope.removeItem = function(x){
                    $scope.products.splice(x,1);
                }
            })