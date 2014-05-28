(function(angular){
    "use strickt";
    var app = angular.module('MyStore');

    app.controller('HomeController', function($scope, ProductService){

        $scope.featuredProducts = new Array();

        var errorCallback = function(reason){
            $scope.errorMessage = reason.statusText;
        };
        ProductService.getProducts().then(
            function(response){
                var products=response.data;
                angular.forEach(products, function(product) {

                    // Check if the current product's guid property is equal to id from the URL
                    if(product.isFeatured) {

                        // We've found a match, add the matching product to the $scope
                        $scope.featuredProducts.push(product);
                    }
                });

            },
            errorCallback
        );

/*        ProductService.getProductFilters().then(
            function(response){
                $scope.filters = response.data;
            },
            errorCallback
        ); */

    });
})(window.angular);