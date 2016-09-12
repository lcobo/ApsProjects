appServersoft.controller('programController', ['$scope', '$filter', 'commonvariable', 'md5', 'programs', 'programoption', 'authentication', function ($scope, $filter, commonvariable, md5, programs, programoption, authentication) {

    ///verify session
    authentication.checkStatus();
    ///variables

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

    $scope.createProgram = function (nProgram) {
        programs.post({ pname: nProgram.pname })
            .$promise.then(function (response) {
                try {
                    if (response.pid) {
                        $scope.programname = "";
                        $scope.showtab();
                        $scope.alerts.push({ type: 'success', msg: $translate('PROGRAM_SAVED') });
                        $scope.showProgram($scope.programSelected);
                        

                    }
                } catch (err) {
                    $scope.alerts.push({ type: 'error', msg: $translate('PROGRAM_NOSAVED') });
                };
            });
    }

    ///////////////////////////Method of the Option 

    $scope.showOption = function (pidselected) {
        programoption.get({ pid: pidselected.pid })
            .$promise.then(function (response) {
                $scope.ListOption = response;
                $scope.programSelected = pidselected;
            });
    }

    $scope.CreateOption = function (nProgramoption) {
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
    $scope.showProgram();

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