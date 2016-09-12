appServersoft.controller('settingController', ['$scope', '$filter', 'commonvariable', 'authentication', 'beds', 'room', function ($scope, $filter, commonvariable, authentication, beds, room) {

    ///verify session
    authentication.checkStatus();
    ///variables

    $scope.alerts = [];
    var $translate = $filter('translate');

    $scope.initform = function () {
        $scope.rid='';
        $scope.mode = 'create';
        $scope.rname = "";
        $scope.rstatus = "";
        $scope.rarea = "";

        $scope.bname = "";
        $scope.bstatus = "";
        $scope.broom = "";
        $scope.bmode = "create";
        $scope.RoomName = $translate("ROOM_SELECT");
    }
    $scope.initform();

    $scope.selectRoom = function (rid,rname,rtatus,rarea) {
        $scope.mode = 'edit';        
        $scope.rid = rid;
        $scope.rname = rname;
        $scope.rstatus = rtatus;
        $scope.rarea = rarea;
    }

    $scope.selectBed = function (bid, bname, btatus, broom,room) {
        $scope.bmode = "edit";
        $scope.bid = bid;
        $scope.bname = bname;
        $scope.bstatus = btatus;
        $scope.broom = broom;
        $scope.selectRoominBed(room);
        
    }
    //////////////// beds
    $scope.getBeds = function () {
        beds.get({})
       .$promise.then(function (resp) {
           $scope.lbeds = resp;
       });
    };
    $scope.getBeds();


    //////////////// rooms
    $scope.getRooms = function () {
        room.get({})
       .$promise.then(function (resp) {
           $scope.rooms = resp;
       });
    };
    $scope.getRooms();
    
    //save rooms
    $scope.saveRoom = function (rname, rstatus, rarea) {
        room.post({ roname: rname, rostatus: rstatus, roarea: rarea })
      .$promise.then(function (resp) {
          if (resp.roname == rname) {
              $scope.getRooms();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    //update rooms
    $scope.updateRoom = function (rid,rname, rstatus, rarea) {
        room.put({roid:rid, roname: rname, rostatus: rstatus, roarea: rarea })
      .$promise.then(function (resp) {
          if (resp.length>0) {
              $scope.getRooms();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };


    ///BEDSSS

    $scope.selectRoominBed = function (room) {
        $scope.RoomName = room.roname;
        $scope.broom = room.roid;
    }

    //save rooms
    $scope.saveBed = function (bname, bstatus, broom) {
        beds.post({ bename: bname, bestatus: bstatus, heroom: broom })
      .$promise.then(function (resp) {
          if (resp.bename == bname) {
              $scope.getBeds();
              $scope.alerts.push({ msg: $translate("BED_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("BED_MSG_ERROR"), type: 'error' });
          }
      });
    };

    //update rooms
    $scope.updateBed = function (bid, bname, bstatus, broom) {
        beds.put({ beid: bid, bename: bname, bestatus: bstatus, heroom: broom })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getBeds();
              $scope.alerts.push({ msg: $translate("BED_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("BED_MSG_ERROR"), type: 'error' });
          }
      });
    };

        ///alert

     $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
    ////

}]);