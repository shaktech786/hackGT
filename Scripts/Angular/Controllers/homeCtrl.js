function () {
    angular
        .module('hackGT')
        .controller('homeCtrl', homeCtrl);

    function homeCtrl ($scope) {
        $scope.test="hello";
    }
}