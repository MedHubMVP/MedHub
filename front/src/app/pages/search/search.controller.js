(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.search')
        .controller('searchCtrl', searchCtrl);

    function searchCtrl() {
        var vm = this;

        // mock
        vm.searchResult = createMock();

        function createMock() {
            var mocks = [];
            for (var i = 0; i < 200; i++) {
                var mock = {
                    name: i,
                    place: i*2,
                    count: i*3
                };
                mocks = mocks.concat(mock); 
            }
            return mocks;
        }
    }
} ());
