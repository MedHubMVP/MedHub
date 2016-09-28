(function () {
    'use strict';

    angular
        .module('BlurAdmin')
        .controller('myDemandCtrl', myDemandCtrl);

    function myDemandCtrl($uibModal) {
        var vm = this;

        vm.remove = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/pages/demand/myDemand/deleteDemand.html',
                size: 'md'
            });
            modalInstance.result.then(function () {
                // vm.saveAction();
            });
        }

        vm.edit = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'app/pages/demand/myDemand/editDemand.html',
                size: 'md'
            });
            modalInstance.result.then(function () {
                // vm.saveAction();
            });

        }

        // mock
        vm.waiting = createMock1();
        vm.going = createMock2();
        vm.finished = createMock3();

        function createMock1() {
            var mocks = [];
            mocks = mocks.concat({
                name: "medicamento A",
                count: "12",
                // status: "em espera",
                date: new Date("2016-09-01")
            });
            mocks = mocks.concat({
                name: "medicamento B",
                count: "121",
                // status: "em espera",
                date: new Date("2016-09-02")
            });
            mocks = mocks.concat({
                name: "medicamento C",
                count: "312",
                // status: "em espera",
                date: new Date("2016-09-03")
            });
            mocks = mocks.concat({
                name: "medicamento D",
                count: "612",
                // status: "em andamento",
                date: new Date("2016-09-04")
            });
            mocks = mocks.concat({
                name: "medicamento D",
                count: "612",
                // status: "em andamento",
                date: new Date("2016-09-04")
            });

            return mocks;
        } function createMock2() {
            var mocks = [];

            mocks = mocks.concat({
                name: "medicamento D",
                count: "612",
                // status: "em andamento",
                date: new Date("2016-09-04")
            });
            mocks = mocks.concat({
                name: "medicamento E",
                count: "152",
                // status: "terminou",
                date: new Date("2016-09-05")
            });
            mocks = mocks.concat({
                name: "medicamento F",
                count: "9182",
                // status: "em espera",
                date: new Date("2016-09-06")
            });
            return mocks;
        }
        function createMock3() {
            var mocks = [];

            mocks = mocks.concat({
                name: "medicamento H",
                count: "8162",
                // status: "terminou",
                date: new Date("2016-09-08")
            });
            mocks = mocks.concat({
                name: "medicamento I",
                count: "95612",
                // status: "cancelado",
                date: new Date("2016-09-09")
            });

            mocks = mocks.concat({
                name: "medicamento H",
                count: "8162",
                // status: "terminou",
                date: new Date("2016-09-08")
            });
            mocks = mocks.concat({
                name: "medicamento I",
                count: "95612",
                // status: "cancelado",
                date: new Date("2016-09-09")
            });

            mocks = mocks.concat({
                name: "medicamento H",
                count: "8162",
                // status: "terminou",
                date: new Date("2016-09-08")
            });
            mocks = mocks.concat({
                name: "medicamento I",
                count: "95612",
                // status: "cancelado",
                date: new Date("2016-09-09")
            });

            mocks = mocks.concat({
                name: "medicamento H",
                count: "8162",
                // status: "terminou",
                date: new Date("2016-09-08")
            });
            mocks = mocks.concat({
                name: "medicamento I",
                count: "95612",
                // status: "cancelado",
                date: new Date("2016-09-09")
            });

            mocks = mocks.concat({
                name: "medicamento H",
                count: "8162",
                // status: "terminou",
                date: new Date("2016-09-08")
            });
            mocks = mocks.concat({
                name: "medicamento I",
                count: "95612",
                // status: "cancelado",
                date: new Date("2016-09-09")
            });
            return mocks;
        }
    }
} ());
