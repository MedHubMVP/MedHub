/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardCalendarCtrl', DashboardCalendarCtrl);

  /** @ngInject */
  function DashboardCalendarCtrl(baConfig) {
    var dashboardColors = baConfig.colors.dashboard;
    var $element = $('#calendar').fullCalendar({
      //height: 335,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2016-03-08',
      selectable: true,
      selectHelper: true,
      select: function (start, end) {
        var title = prompt('Event Title:');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $element.fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $element.fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'CLOMIPRAMINA, CLORIDRATO',
          start: '2016-03-14T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'GLICLAZIDA',
          start: '2016-03-01T07:00:00',
          color: dashboardColors.gossipDark
        },
        {
          title: 'PREDNISOLONA',
          start: '2016-03-30T17:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'SALBUTAMOL, SULFATO ',
          start: '2016-03-22T08:00:00',
          color: dashboardColors.gossipDark
        },
        {
          title: 'SINVASTATINA ',
          start: '2016-03-12T15:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'VARFARINA SÓDICA ',
          start: '2016-03-17T12:00:00',
          color: dashboardColors.gossipDark
        },
      ]
    });
  }
})();