appServersoft.controller('alertController', ['$scope', '$modal', '$filter', '$interval', 'commonvariable', 'authentication', 'beds', 'hospitalization', function ($scope, $modal, $filter, $interval, commonvariable, authentication, beds, hospitalization) {
    $scope.colorstyle = [
        { background: '#A9F5A9', border: '#04B45F' },
        { background: '#F5A9A9', border: '#8A0808' },
        { background: '#F5D0A9', border: '#61380B' },
        { background: '#d9edf7', border: '#bce8f1' },
        { background: '#A9E2F3', border: '#0B4C5F' },
        { background: '#F5A9F2', border: '#610B5E' },
        { background: '#F5A9BC', border: '#610B21' },
        { background: '#2874A6', border: '#AED6F1' },
        { background: '#B9770E', border: '#9C640C' },
        { background: '#FF5733', border: '#F7DC6F' },
        { background: '#F1C40F', border: '#873600' },
        { background: '#2ECC71', border: '#145A32' },
        { background: '#212F3D', border: '#D5D8DC' },
        { background: '#76448A', border: '#EBDEF0' },
        { background: '#C0392B', border: '#E6B0AA' },
        { background: '#F7DC6F', border: '#D68910' }
    ];
    $scope.bedstatus = [];
    $scope.alerts = [];
    $scope.lbeds = [];
	$scope.atender = false;
    var $translate = $filter('translate');
    ////////////////
    $scope.getBeds = function () {
        beds.get({ beid :'Active'})
       .$promise.then(function (resp) {
           $scope.lbeds = resp;
       });
    };
    $scope.getBeds();



        ///alert

     $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
    ////

    ///modal

     $scope.animationsEnabled = true;

     $scope.openmodal = function (bedId, bedstatus) {
         try {
             var status = bedstatus.status;
         }
         catch (error) {
             var status = undefined;
         };
         switch (status) {
             case "Inactive":
                 var modalInstance = $modal.open({
                     animation: $scope.animationsEnabled,
                     templateUrl: 'ModalEndHospitalization.html',
                     controller: 'ModalEndHospitalization',
                     backdrop: false,
                     resolve: {
                         bed: function () {
                             return bedId;
                         },
                         bedstatus: function () {
                             return bedstatus;
                         }
                     }

                 });
                 break;
             case "Active":
     		     var modalInstance = $modal.open({
                     animation: $scope.animationsEnabled,
                     templateUrl: 'ModalEndHospitalization.html',
                     controller: 'ModalEndHospitalization',
                     backdrop: false,
                     resolve: {
                         bed: function () {
                             return bedId;
                         },
                         bedstatus: function () {
                             return bedstatus;
                         }
                     }

                 });
                 break;
             default:
                 var modalInstance = $modal.open({
                     animation: $scope.animationsEnabled,
                     templateUrl: 'ModalHospitalization.html',
                     controller: 'ModalHospitalization',
                     backdrop: false,
                     resolve: {
                         bed: function () {
                             return bedId;
                         },
                         bedstatus: function () {
                             return bedstatus;
                         }
                     }

                 });

         }


         modalInstance.result.then(function (val) {
             switch(val){
                 case "save":
                     $scope.alerts.push({ type: 'success', msg: $translate("HOSPITALIZARION_MSG") });
                     break;
                 case "exit":
                     $scope.alerts.push({ type: 'info', msg: $translate("HOSPITALIZARION_EXIT") });
                     break;

             }
         }, function () {
             //errro
         });
     };


     $interval(function () {
		 var timbre=0;
		 if ($scope.lbeds.length > 0) {
    		 //Limpiar alertas previas
	        $scope.alerts = [];
             //obtiene datos de Hospitalización
            hospitalization.get()
            .$promise.then(function (resp) {
            angular.forEach(resp, function(value,key){
			if(value.hostatus =='Active')timbre=1;
			
			   
		 $scope.bedstatus[value.hebed] = { status: value.hostatus, patientid: value.hopatientid, patientname: value.hopatientname, hoid: value.hoid };
	 //hopatientid,hopatientname
                })
			 if(timbre==1)
         	  {	 var audio = new Audio('timbre.wav');audio.play();}
            });
          }

	 
       },8000);

}]);

appServersoft.controller('ModalHospitalization', function ($scope, $modalInstance, bed, hospitalization, bedstatus) {
    $scope.bed = bed;
    $scope.saveHospitalization = function () {
        hospitalization.post({ hopatientid: $scope.patientid, hopatientname: $scope.patientname, hebed: $scope.bed, hostatus: "Inactive" })
          .$promise.then(function (resp) {
              if(resp)
                  $modalInstance.close('save');
          });
    }
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
	
});

appServersoft.controller('ModalEndHospitalization', function ($scope, $modalInstance, bed, hospitalization, bedstatus) {
    $scope.bed = bed;
    if (bedstatus.status == "Active") {
        $scope.alertHospitalization = "label-danger";
    }
    else {
        $scope.alertHospitalization = "";
    }

    $scope.patientid = bedstatus.patientid;
    $scope.patientname = bedstatus.patientname;
    $scope.hoid = bedstatus.hoid;
    $scope.updateHospitalization = function () {
        hospitalization.put({hoid:$scope.hoid, hopatientid: $scope.patientid, hopatientname: $scope.patientname, hebed: $scope.bed, hostatus: "Exit" })
          .$promise.then(function (resp) {
              if (resp)
                  $modalInstance.close('exit');
          });
    }
	$scope.attendHospitalization = function () {
        hospitalization.put({hoid:$scope.hoid, hopatientid: $scope.patientid, hopatientname: $scope.patientname, hebed: $scope.bed, hostatus: "Inactive" })
          .$promise.then(function (resp) {
              if (resp)
                  $modalInstance.close('exit');
          });
    }
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
