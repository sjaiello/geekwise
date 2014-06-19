(function(angular) {
    "use strict";

    var app = angular.module('MyStore');

    app.factory('CartService', function($cookieStore, ProductService) {

// Private items variable
        var items = {};

// Angular factories return service objects
        var cart = {
            getItems: function() {
                var itemsCookie;
                if(!items.length) {
                    itemsCookie = $cookieStore.get('items');
                    if(itemsCookie) {
                        angular.forEach(itemsCookie, function(item, key){
                            ProductService.getProduct(key).then(function(responce){
                               var product = responce.data;
                               product.quantity = item;
                                items[product.guid] = product;
                            });
                        });
                    }
                }
                return items;
            },

            addItem: function(item) {

                if(!items[item.guid]){
                item.quantity = 1;
                items[item.guid] = item;
                } else {
                    items[item.guid].quantity += 1;
                }
                cart.updateItemsCookie();
            },

            removeItem: function(item_id) {
                delete items[item_id];
                cart.updateItemsCookie();
            },

            emptyCart: function() {
                items = {};
                $cookieStore.remove('items');
            },

            getItemCount: function() {
                var total = 0;
                angular.forEach(items, function(item){
                    total += item.quantity;
                });
                return total;
            },

            getCartSubtotal: function() {
                var total = 0;
                angular.forEach(items,function(item){
                    var s = parseInt(item.quantity);
                    var q = isNaN(s);
                    var p = cart.getItemPrice(item);
                    total += q * p;
                });
                return total;
            },

            getCartTotal: function() {
                return cart.getCartSubtotal();
            },

            updateItemsCookie: function() {
                var itemsCookie = {};
                angular.forEach(items, function(item, key){
                    itemsCookie[key] = item.quantity;
                });
                $cookieStore.put('items', itemsCookie);
            },

            getItemPrice: function(item) {
                return parseFloat(item.isSpecial? item.specialPrice : item.price);
            }
        };

        return cart;

    });

})(window.angular);
