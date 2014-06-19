(function(angular){
    "use strict";

    var app = angular.module('MyStore');
    app.factory('ProductService', function($http){
        return {
            getProduct: function(guid){
                return $http.get('/api/product/'+guid);
            },

            getProducts: function() {
                return $http.get('/api/products');
            },

            getProductFilters: function() {
                return $http.get('assets/json/product-filters.json');
            },

            getFeaturedProducts: function() {
                return $http.get('/api/products?featured=true');
            }

        };
    });

})(window.angular);