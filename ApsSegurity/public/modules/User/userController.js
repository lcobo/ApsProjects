appServersoft.controller('userController', ['$scope', '$filter', 'commonvariable', 'md5', 'user', 'role', 'tenant', 'roleuser', 'authentication', function ($scope, $filter, commonvariable, md5, user, role, tenant, roleuser, authentication) {

    ///verify session
    authentication.checkStatus();

    ///variables

    $scope.alerts = [];
    var $translate = $filter('translate');
    $scope.showformoption = false;
    $scope.tabactive = true;
    $scope.style = [];
    ////////////////



    ///////////////////////////Method of the program
    $scope.showUser = function (uidselected) {
        user.get({ uid: uidselected })
            .$promise.then(function (response) {
                $scope.ListUser = response;
            });
    }
    $scope.showUser();

    $scope.showTenant = function () {
        tenant.get()
            .$promise.then(function (response) {
                $scope.ListTenant = response;
            });
    }
    $scope.showTenant();
    $scope.createUser = function (nUser) {
        user.post(nUser)
            .$promise.then(function (response) {
                try {
                    if (response.uid) {
                        $scope.showtab();
                        $scope.alerts.push({ type: 'success', msg: $translate('USER_SAVED') });
                        $scope.showUser();


                    }
                } catch (err) {
                    $scope.alerts.push({ type: 'error', msg: $translate('USER_NOSAVED') });
                };
            });
    };


    ////select Role
    $scope.AssingRoletoUser = function (nRoleUser) {
        
        roleuser.post(nRoleUser)
                           .$promise.then(function (ruser) {
                               $scope.style[ruser.rolid] = 'success';
                           });
    }
    $scope.selectTenant = function (TenantSelected) {
        $scope.tenantName = TenantSelected.rolname;
        $scope.utenant = TenantSelected;
    };

    $scope.showRoleUser = function (userSelected) {
        $scope.UserSelected = userSelected;
        $scope.style = [];
        roleuser.get({ uid: userSelected.uid })
                    .$promise.then(function (ruser) {
                        $scope.roleUser = ruser;
                        angular.forEach(ruser, function (value, key) {
                            $scope.style[value.rolid] = 'success';
                        });
                    });
    };

    $scope.showRoles = function () {
        role.get()
                    .$promise.then(function (role) {
                        $scope.ListRoles = role;
                    });
    };
    $scope.showRoles();
    ///////////////////////////Method of the Option 

    $scope.showhideform = function () {
        if ($scope.showformroles)
            $scope.showformroles = false;
        else
            $scope.showformroles = true;

    }

    $scope.showtab = function () {
        $scope.tabactive = true;
    }


    ///alert

     $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
    ////

}]);