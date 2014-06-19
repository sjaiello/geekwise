(function(angular){
    'use strict';

    var app = angular.module('MyStore');

    app.directive('msFeaturedProduct', function(){

        return{
            restrict: 'E',
            replace: true,
            scope: {
                product: '='
            },
            templateUrl: 'templates/featured-product.html',
            link: function(scope, elem, attrs){

            }

        }
    });
})(window.angular);