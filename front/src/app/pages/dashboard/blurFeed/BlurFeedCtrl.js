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
        author: 'DEXCLORFENIRAMINA, MALEATO 0,4 MG/ML',
        header: 'Posted new message',
        text: 'Hospital São Camilo enviou 251 medicamentos.',
        distance: 231,
        time: 'Hoje 11:55',
        ago: '25 minutes ago',
        expanded: false,
        color: 'green',
        in: true
      },
      {
        type: 'text-message',
        author: 'HALOPERIDOL 5 MG',
        header: 'Posted new message',
        text: 'Hospital São Paulo recebeu 62 medicamentos.',
        distance: 10,
        time: 'Hoje 11:55',
        ago: '25 minutes ago',
        expanded: false,
        color: 'blue',
        in: false
      },
      {
        type: 'text-message',
        author: 'RINGER LACTATO SÓDICO ',
        header: 'Posted new message',
        text: 'A.C.Camargo enviou 53 medicamentos.',
        distance: 42,
        time: 'Hoje 11:55',
        ago: '25 minutes ago',
        expanded: false,
        color: 'green',
        in: true
      },
      {
        type: 'text-message',
        author: 'DIPIRONA SÓDICA 500 MG/ML',
        header: 'Posted new message',
        text: 'HCor enviou 414 medicamentos.',
        distance: 187,
        time: 'Hoje 11:55',
        ago: '25 minutes ago',
        expanded: false,
        color: 'red',
        in: true
      },
      {
        type: 'text-message',
        author: 'TECLOZANA 500 MG ',
        header: 'Posted new message',
        text: 'Hospital São Camilo solicitou 1000 medicamentos.',
        distance: 2,
        time: 'Hoje 11:55',
        ago: '25 minutes ago',
        expanded: false,
        color: 'green',
        in: false
      },
      {
        type: 'text-message',
        author: 'GLICLAZIDA 30 MG',
        header: 'Posted new message',
        text: 'Hospital Sírio-Libanês enviou 536 medicamentos.',
        distance: 87,
        time: 'Hoje 11:55',
        ago: '25 minutes ago',
        expanded: false,
        color: 'blue',
        in: true
      },
      {
        type: 'text-message',
        author: 'FENOBARBITAL 100 MG/ML',
        header: 'Posted new message',
        text: 'Hospital 9 de Julho enviou 231 medicamentos.',
        distance: 31,
        time: 'Hoje 11:55',
        ago: '25 minutes ago',
        expanded: false,
        color: 'blue',
        in: true
      },
      {
        type: 'text-message',
        author: 'CAPTOPRIL 25 MG ',
        header: 'Posted new message',
        text: 'Hospital Sírio-Libanês enviou 85 medicamentos.',
        distance: 76,
        time: 'Hoje 11:55',
        ago: '25 minutes ago',
        expanded: false,
        color: 'green',
        in: false
      },
      {
        type: 'text-message',
        author: 'DEXAMETASONA 1 MG/ML',
        header: 'Posted new message',
        text: 'Hospital 9 de Julho enviou 353 medicamentos.',
        distance: 1,
        time: 'Hoje 11:55',
        ago: '25 minutes ago',
        expanded: false,
        color: 'yellow',
        in: true
      },
    ];

    $scope.expandMessage = function(message){
      message.expanded = !message.expanded;
    }
  }
})();