(function() {

  "use strict";

  angular.module('ngMain')
    .controller('productListCtrl', function(
        $scope,
        $mdToast,
        $mdSidenav,
        $mdDialog,
        $state,
        $stateParams,
        productListFact
       
    ) {
        $scope.data = {
            products: []
        }
        $scope.sortData = "update_at";
        $scope.keyword = "";
        $scope.images_index = 0;
        productListFact.getProductList()
            .then(function(response) {
                if (response.data.status == 'OK') {
                    $scope.data = response.data.products;
                    console.log($scope.data);
                }
                else{
                    console.log('hmm ora oke')
                }
            });
        
        this.searchKeyword = function(keyword){
             productListFact.getKeyword(keyword)
            .then(function(response){
                if(response.data.status == 'OK') {
                    $scope.data = response.data.products;
                    $scope.keyword = keyword;
                    console.log($scope.keyword);
                    console.log($scope.data);
                }else{
                  console.log('hmm ora oke')
                }
            });
        }

        //  this.getNewProduct = function(keyword){
        //      productListFact.getNewProduct(keyword)
        //     .then(function(response){
        //         if(response.data.status == 'OK') {
        //             $scope.data = response.data.products;
        //             console.log($scope.keyword);
        //             console.log($scope.data);
        //         }else{
        //           console.log('hmm ora oke')
        //         }
        //     });
        // }
    });



})();