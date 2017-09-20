angular.module("app", []);
angular.module("app").controller("myCtrl", function ($scope) {
    $scope.numeros = [];



    $scope.adiciona = function (numero) {
        $scope.numeros.push(angular.copy(numero));
    };
    
});

