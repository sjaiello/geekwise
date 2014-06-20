(function(angular) {

    var app = angular.module('MyStore');

// Inject in the ProductService
    app.controller('CartController', function($scope, CartService) {

// Set the items on the scope to the items in the CartService
        $scope.items=CartService.getItems();

        $scope.addItem = CartService.addItem;

        $scope.removeItem = CartService.removeItem;

        $scope.emptyCart = CartService.emptyCart;

        $scope.cartSubtotal = CartService.getCartSubtotal;

        $scope.cartTotal = function(){
            return CartService.getCartTotal;
        }

        $scope.getItemCount = CartService.getItemCount;

        $scope.checkout = function(){
            CartService.checkout();
        }

    });

})(window.angular);
