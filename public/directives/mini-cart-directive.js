(function(angular) {
    "use strict";

    var app = angular.module('MyStore');

// Inject in the CartService
    app.directive('msMiniCart', function(CartService) {

        return {
            scope: {
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/mini-cart.html',
            link: function(scope, elem, attr) {
                CartService.getItems();
                scope.cartSubtotal = CartService.getCartSubtotal;

                scope.itemCount = CartService.getItemCount;
                }
        };
    });

})(window.angular);