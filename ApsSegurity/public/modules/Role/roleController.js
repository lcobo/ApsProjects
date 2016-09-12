appServersoft.controller('roleController', ['$scope', '$filter', 'commonvariable', 'md5', 'programs', 'programoption', 'role', 'roleDetail', 'authentication', function ($scope, $filter, commonvariable, md5, programs, programoption, role, roleDetail, authentication) {
    ///variables
        ///verify session
    authentication.checkStatus();
    $scope.alerts = [];
    var $translate = $filter('translate');
    $scope.showformoption = false;
    $scope.tabactive = true;
    ////////////////


    ///////////////////////////Method of the program
    $scope.showProgram = function (pidselected) {
        programs.get({ pid: pidselected })
            .$promise.then(function (response) {
                $scope.ListProgram = response;
            });
    }

    $scope.showProgram();
    
    
     $scope.selectProgram=function(programSelected){
          $scope.ProgramName=programSelected.pname;
          $scope.showOption(programSelected);
     }

     $scope.selectProgramOption = function (optionSelected) {
         $scope.ProgramOptionName = optionSelected.optionname;
         $scope.optionSelected = optionSelected;
     }
    ///////////////////////////Method of the Option 

    $scope.showOption = function (pidselected) {
        programoption.get({ pid: pidselected.pid })
            .$promise.then(function (response) {
                $scope.ListOption = response;
            });
    }

   
/////Method for Role

    $scope.showRole = function (ridselected) {
        role.get({ rid: ridselected })
            .$promise.then(function (response) {
                $scope.ListRole = response;
            });
    }

    $scope.showRoledetail = function (ridselected) {
        $scope.RoleSelected = ridselected;
        roleDetail.get({ rid: ridselected.rid })
            .$promise.then(function (response) {
                $scope.RoleOption = response;
            });
    }
 $scope.showRole();
$scope.createRole= function (nRole) {
    role.post(nRole)
            .$promise.then(function (response) {
                try {
                    if (response.rid) {
                        $scope.rolename = "";
                        $scope.showtab();
                        $scope.alerts.push({ type: 'success', msg: $translate('ROLE_SAVED') });
                        $scope.showRole();
                        

                    }
                } catch (err) {
                    $scope.alerts.push({ type: 'error', msg: $translate('ROLE_NOSAVED') });
                };
            });
    }


$scope.AddOption = function (nRoleOption) {
    roleDetail.post(nRoleOption)
            .$promise.then(function (response) {
                try {
                    if (response.rdid) {
                        $scope.showRoledetail($scope.RoleSelected);
                        $scope.alerts.push({ type: 'success', msg: $translate('PROGRAM_SAVED') });
                   

                    }
                } catch (err) {
                    $scope.alerts.push({ type: 'error', msg: $translate('PROGRAM_NOSAVED') });
                };
            });
}

$scope.RemoveOption = function (eRoleOption) {
    roleDetail.remove(eRoleOption)
            .$promise.then(function (response) {
                try {
                   
                        $scope.showRoledetail($scope.RoleSelected);
                        $scope.alerts.push({ type: 'success', msg: $translate('ROLE_OPTION_DELETE') });

                } catch (err) {
                    $scope.alerts.push({ type: 'error', msg: $translate('ROLE_OPTION_NODELETE') });
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