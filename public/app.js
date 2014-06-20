(function(angular) {
	"use strict";

	var app = angular.module('MyStore', ['ui.router', 'ngCookies', 'ngMessages']);

    app.value('config', {
        paypal: {
            merchantID: 'aaronarberson@gmail.com'
        }
    });

})(window.angular);

/*
function myFuntion(angular){
	var app = angular.module('MyStore', []);
}

myFuntion(window.angular);
*/