(function(angular){
    'use strict';

    var app = angular.module('MyStore');

    app.directive('msProductDetailsButton', function(){
     return{
         // E for DOM Element
         // A for DOM Attribute
         // C for DOM class
        scope: {
            // 3 types of bindings for scope properties
            // @ is a string
            // & is one way binding
            // = is a two way binding
            productId: '@'
        },
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/product-details-button.html'
     };
    });

})(window.angular);