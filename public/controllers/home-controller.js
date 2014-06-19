(function(angular){
    "use strickt";
    var app = angular.module('MyStore');

    app.controller('HomeController', function($scope, ProductService){


        var errorCallback = function(reason){
            $scope.errorMessage = reason.statusText;
        };
        ProductService.getProducts().then(
            function(response){
                $scope.featuredProducts=response.data;
            },
            errorCallback
        );

    });
})(window.angular);