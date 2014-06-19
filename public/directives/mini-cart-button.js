(function(angular){
    'use strict';

    var app = angular.module('MyStore');

    app.directive('msMiniCartButton', function(CartService){
        return{
            // E for DOM Element
            // A for DOM Attribute
            // C for DOM class
            scope: {
                // 3 types of bindings for scope properties
                // @ is a string
                // & is one way binding
                // = is a two way binding
                product: '='
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/mini-cart-button.html',
            link: function(scope, elem, attrs){
                scope.addItem=CartService.addItem;

            }
        };
    });

})(window.angular);
