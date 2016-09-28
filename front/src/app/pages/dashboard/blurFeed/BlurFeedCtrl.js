/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('BlurFeedCtrl', BlurFeedCtrl);

  /** @ngInject */
  function BlurFeedCtrl($scope) {
    $scope.feed = [
      {
        type: 'text-message',
        author: 'Medicamento 0',
        header: 'Posted new message',
        text: 'Hospital 0 precisa de 251 medicamentos. distância: 231 km',
        time: 'Hoje 11:55',
        ago: '25 minutes ago',
        expanded: false,
        in: true
      },
      {
        type: 'text-message',
        author: 'Medicamento A',
        header: 'Posted new message',
        text: 'Hospital A (10 km) precisa de 62 medicamentos',
        time: 'Hoje 11:55',
        ago: '25 minutes ago',
        expanded: false,
        in: false
      },
      {
        type: 'text-message',
        author: 'Medicamento B',
        header: 'Posted new message',
        text: 'Hospital B (42 km) precisa de 53 medicamentos',
        time: 'Hoje 11:55',
        ago: '25 minutes ago',
        expanded: false,
        in: true
      },
      {
        type: 'text-message',
        author: 'Medicamento C',
        header: 'Posted new message',
        text: 'Hospital C (187 km) precisa de 414 medicamentos',
        time: 'Hoje 11:55',
        ago: '25 minutes ago',
        expanded: false,
        in: true
      },
      {
        type: 'text-message',
        author: 'Medicamento D',
        header: 'Posted new message',
        text: 'Hospital D (2 km) precisa de 1000 medicamentos',
        time: 'Hoje 11:55',
        ago: '25 minutes ago',
        expanded: false,
        in: false
      },
    ];

    $scope.expandMessage = function(message){
      message.expanded = !message.expanded;
    }
  }
})();