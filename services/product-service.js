(function(angular){
    "use strict";

    var app = angular.module('MyStore');
    app.factory('ProductService', function($http){
        return {
            getProducts: function() {
                return $http.get('assets/json/products.json');
            },

            getProductFilters: function() {
                return $http.get('assets/json/product-filters.json');
            }
        };
    });

})(window.angular);