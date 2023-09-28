(() => {
    app = angular.module("mod1", [])
        .controller('myctl', myctl);

    myctl.$inject = ['$scope', '$filter']
    function myctl($scope, $filter) {
        // var upFilter = $filter('uppercase')
        // $scope.$watch('name', function(newValue, oldValue) {
        //     if (newValue !== oldValue) {
        //       $scope.name = upFilter(newValue);
        //     }
        //   });

    }
})();