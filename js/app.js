(function() {

  "use strict";

  angular.module(
      'ngMain',
       ['ngMaterial', 'ui.router']
    )
    .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {

      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');

      $urlRouterProvider.otherwise('/products');

      $stateProvider
        .state('products', {
          url: '/products',
          templateUrl: 'view/productList.html',
          controller: 'productListCtrl as plctrl'
        });
        // .state('classifieds.new', {
        //   url: '/new',
        //   templateUrl: 'components/classifieds/new/classifieds.new.tpl.html',
        //   controller: 'newClassifiedsController as vm'
        // })
        // .state('classifieds.edit', {
        //   url: '/:id/edit',
        //   templateUrl: 'components/classifieds/edit/classifieds.edit.tpl.html',
        //   controller: 'editClassifiedsController as vm',
        //   params: {
        //     classified: null
        //   }
        // });
    });
    
})();
