appServersoft.controller('loginController', ['$scope', '$filter', 'authentication', function ($scope, $filter, authentication) {
    var $translate = $filter('translate');
    authentication.logout();
        $scope.alerts = [];
        $scope.login = function (user, password) {
            authentication.login(user, password).then(function (data){
                $scope.addAlert($translate('MESSAGE_ERROR'));
            });
        }
        
        $scope.addAlert = function (menssage) {
            $scope.alerts.push({ label: " ", msg: menssage });
        };
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };    
}]);