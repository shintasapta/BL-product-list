(function() {

"use strict";

angular.module('ngMain')
    .factory('productListFact',[ "$http",
      function($http){
        return{
          getProductList: function(){
            return $http({
                    method: 'GET',
                    url: 'https://api.bukalapak.com/v2/products.json'
            });

          },
          getKeyword: function(keyword){
            return $http({
                    method: 'GET',
                    url: 'https://api.bukalapak.com/v2/products.json?keywords='+keyword
            });
          }
          // getNewProduct: function(keyword){
          //   return $http({
          //     method: 'GET',
          //     url: 'https://api.bukalapak.com/v2/products.json?keywords='+keyword+'&conditions=new'
          //   });
          // }
        }
    }])
      
})();