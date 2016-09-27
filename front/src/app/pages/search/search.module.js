/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.search', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('search', {
          url: '/search',
          templateUrl : 'app/pages/search/search.html',
          controllerAs: 'vm',
          controller: 'searchCtrl',
          // abstract: true,
          title: 'Buscar Medicamento',
          sidebarMeta: {
            icon: 'ion-search',
            order: 250,
          },
        });
  }
})();
