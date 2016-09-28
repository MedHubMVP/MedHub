(function () {
  'use strict';
  angular
    .module('BlurAdmin')
    .directive('showChildrenOnHoverParent', function () {
      return {
        link: function (scope, element, attrs) {
          function showChildren() {
            element.children().show();
          }
          function hideChildren() {
            element.children().hide();
          }

          function bindEvents() {
            element.parent().on('mouseenter', showChildren);
            element.parent().on('mouseleave', hideChildren);
            hideChildren();
          }

          function unbindEvents() {
            element.parent().off('mouseenter', showChildren);
            element.parent().off('mouseleave', hideChildren);
          }

          scope.$watch(function () {
            return attrs.enabledWhen ? scope.$eval(attrs.enabledWhen) : true;
          }, function (value) {
            if (value) {
              bindEvents();
            }
            else {
              unbindEvents();
            }
          });

          scope.$on('$destroy', function () {
            unbindEvents();
          });
        }
      };
    });
} ());
