/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.demand', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('demand', {
          url: '/demand',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Pedidos',
          sidebarMeta: {
            icon: 'ion-medkit',
            order: 250,
          },
        })
        .state('demand.myDemand', {
          url: '/mydemand',
          templateUrl: 'app/pages/demand/myDemand/myDemand.html',
          title: 'Meus Pedidos',
          controller: 'myDemandCtrl',
          controllerAs: 'vm',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('demand.allDemands', {
          url: '/alldemands',
          templateUrl: 'app/pages/demand/allDemands/allDemands.html',
          title: 'Todos os pedidos',
          controller: 'allDemandsCtrl',
          controllerAs: 'vm',
          sidebarMeta: {
            order: 100,
          },
        });
  }
})();
