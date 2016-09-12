appServersoft.controller('tenantController', ['$scope', '$filter', 'commonvariable', 'md5', 'tenant', 'authentication', function ($scope, $filter, commonvariable, md5, tenant, authentication) {

    ///verify session
    authentication.checkStatus();

    ///variables

    $scope.alerts = [];
    var $translate = $filter('translate');
    $scope.showformoption = false;
    $scope.tabactive = true;
    ////////////////


    ///////////////////////////Method of the program
    $scope.showUser = function (uidselected) {
        tenant.get({ uid: uidselected })
            .$promise.then(function (response) {
                $scope.ListTenant = response;
            });
    }
    $scope.showUser();
    $scope.createTenant = function (nTenant) {
        tenant.post(nTenant)
            .$promise.then(function (response) {
                console.log(response);
                try {
                    if (response.pid) {
                        $scope.showtab();
                        $scope.alerts.push({ type: 'success', msg: $translate('TENANT_SAVED') });
                        $scope.showProgram($scope.programSelected);
                        

                    }
                } catch (err) {
                    $scope.alerts.push({ type: 'error', msg: $translate('USER_NOSAVED') });
                };
            });
    }

    ///////////////////////////Method of the Option 

    $scope.showRole = function (ridselected) {
        role.get({ rid: ridselected })
            .$promise.then(function (response) {
                $scope.ListRole = response;
            });
    }

    $scope.AddOption = function (nProgramoption) {
        programoption.post({ optionname: nProgramoption.optionname, programid: nProgramoption.programid })
            .$promise.then(function (response) {
                try {
                    if (response.programid) {
                        $scope.showhideform();
                        $scope.alerts.push({ type: 'success', msg: $translate('PROGRAM_OPTION_SAVED') });
                        $scope.optionName = "";
                        $scope.showOption($scope.programSelected);
    
                    }
                } catch (err) {
                    $scope.alerts.push({ type: 'error', msg: $translate('PROGRAM_OPTION_NOSAVED') });
                };
                
            });
    }
 

    $scope.showhideform = function () {
        if($scope.showformoption)
            $scope.showformoption = false;
        else
            $scope.showformoption = true;

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