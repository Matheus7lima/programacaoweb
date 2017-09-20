angular.module("app", []);
angular.module("app").controller("myCtrl", function ($scope) {
    $scope.numeros = [];
    


    $scope.adiciona = function (numero, formIsValid) {
      
            $scope.numeros.push(angular.copy(numero));
        
    };

});
angular.module('app').directive('ngBlur', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function ($scope, $element, $attrs, ngModel) {
            $element.on('blur', function () {
                if (ngModel.$invalid) {
                    $element.addClass('error');
                } else {
                    $element.removeClass('error');
                }
            });
        }
    }
});
