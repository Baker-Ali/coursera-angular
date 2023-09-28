(() => {
    app = angular.module("LunchCheck", [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter']
    function LunchCheckController($scope, $filter) {
        $scope.LunchCheckMessage = '';
        $scope.fc = 'white'
        $scope.CheckLunch = () => {
            var lunch = $scope.lunch.split(',').map(item => item.trim()).filter(item => item !== '');
            if (lunch.length == 0) {
                $scope.fc = 'red'
                $scope.LunchCheckMessage = 'Please enter data first'
            }
            else if (lunch.length > 3){
                $scope.fc = 'green'
                $scope.LunchCheckMessage = 'Too much!'
            }
            else{
                $scope.fc = 'green'
                $scope.LunchCheckMessage = 'Enjoy!'
            }
        }
    }

})();