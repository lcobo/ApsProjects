appServersoft.controller('loginController', ['$scope', '$filter', 'authentication', function ($scope, $filter, authentication) {
        authentication.logout();
        $scope.alerts = [];
        $scope.login = function (user, password) {
            console.log("Loginnn");
            authentication.login(user, password).then(function (data){
                $scope.addAlert("Usuario y/o contraseña incorrecta");
            });
        }
        
        $scope.addAlert = function (menssage) {
            $scope.alerts.push({ label: " ", msg: menssage });
        };
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };    
}]);