'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.attributesComputedGET = function attributesComputedGET (req, res, next) {
  var all = req.swagger.params['all'].value;
  var userId = req.swagger.params['userId'].value;
  var deviceId = req.swagger.params['deviceId'].value;
  var groupId = req.swagger.params['groupId'].value;
  var refresh = req.swagger.params['refresh'].value;
  Default.attributesComputedGET(all,userId,deviceId,groupId,refresh)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.attributesComputedIdDELETE = function attributesComputedIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.attributesComputedIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.attributesComputedIdPUT = function attributesComputedIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Default.attributesComputedIdPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.attributesComputedPOST = function attributesComputedPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.attributesComputedPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.calendarsGET = function calendarsGET (req, res, next) {
  var all = req.swagger.params['all'].value;
  var userId = req.swagger.params['userId'].value;
  Default.calendarsGET(all,userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.calendarsIdDELETE = function calendarsIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.calendarsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.calendarsIdPUT = function calendarsIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Default.calendarsIdPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.calendarsPOST = function calendarsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.calendarsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commandsGET = function commandsGET (req, res, next) {
  var all = req.swagger.params['all'].value;
  var userId = req.swagger.params['userId'].value;
  var deviceId = req.swagger.params['deviceId'].value;
  var groupId = req.swagger.params['groupId'].value;
  var refresh = req.swagger.params['refresh'].value;
  Default.commandsGET(all,userId,deviceId,groupId,refresh)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commandsIdDELETE = function commandsIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.commandsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commandsIdPUT = function commandsIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Default.commandsIdPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commandsPOST = function commandsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.commandsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commandsSendGET = function commandsSendGET (req, res, next) {
  var deviceId = req.swagger.params['deviceId'].value;
  Default.commandsSendGET(deviceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commandsSendPOST = function commandsSendPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.commandsSendPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.commandsTypesGET = function commandsTypesGET (req, res, next) {
  var deviceId = req.swagger.params['deviceId'].value;
  var protocol = req.swagger.params['protocol'].value;
  var textChannel = req.swagger.params['textChannel'].value;
  Default.commandsTypesGET(deviceId,protocol,textChannel)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.devicesGET = function devicesGET (req, res, next) {
  var all = req.swagger.params['all'].value;
  var userId = req.swagger.params['userId'].value;
  var id = req.swagger.params['id'].value;
  var uniqueId = req.swagger.params['uniqueId'].value;
  Default.devicesGET(all,userId,id,uniqueId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.devicesIdAccumulatorsPUT = function devicesIdAccumulatorsPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Default.devicesIdAccumulatorsPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.devicesIdDELETE = function devicesIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.devicesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.devicesIdPUT = function devicesIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Default.devicesIdPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.devicesPOST = function devicesPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.devicesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.driversGET = function driversGET (req, res, next) {
  var all = req.swagger.params['all'].value;
  var userId = req.swagger.params['userId'].value;
  var deviceId = req.swagger.params['deviceId'].value;
  var groupId = req.swagger.params['groupId'].value;
  var refresh = req.swagger.params['refresh'].value;
  Default.driversGET(all,userId,deviceId,groupId,refresh)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.driversIdDELETE = function driversIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.driversIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.driversIdPUT = function driversIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Default.driversIdPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.driversPOST = function driversPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.driversPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsIdGET = function eventsIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.eventsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.geofencesGET = function geofencesGET (req, res, next) {
  var all = req.swagger.params['all'].value;
  var userId = req.swagger.params['userId'].value;
  var deviceId = req.swagger.params['deviceId'].value;
  var groupId = req.swagger.params['groupId'].value;
  var refresh = req.swagger.params['refresh'].value;
  Default.geofencesGET(all,userId,deviceId,groupId,refresh)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.geofencesIdDELETE = function geofencesIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.geofencesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.geofencesIdPUT = function geofencesIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Default.geofencesIdPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.geofencesPOST = function geofencesPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.geofencesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsGET = function groupsGET (req, res, next) {
  var all = req.swagger.params['all'].value;
  var userId = req.swagger.params['userId'].value;
  Default.groupsGET(all,userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsIdDELETE = function groupsIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.groupsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsIdPUT = function groupsIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Default.groupsIdPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsPOST = function groupsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.groupsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.maintenanceGET = function maintenanceGET (req, res, next) {
  var all = req.swagger.params['all'].value;
  var userId = req.swagger.params['userId'].value;
  var deviceId = req.swagger.params['deviceId'].value;
  var groupId = req.swagger.params['groupId'].value;
  var refresh = req.swagger.params['refresh'].value;
  Default.maintenanceGET(all,userId,deviceId,groupId,refresh)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.maintenanceIdDELETE = function maintenanceIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.maintenanceIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.maintenanceIdPUT = function maintenanceIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Default.maintenanceIdPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.maintenancePOST = function maintenancePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.maintenancePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificationsGET = function notificationsGET (req, res, next) {
  var all = req.swagger.params['all'].value;
  var userId = req.swagger.params['userId'].value;
  var deviceId = req.swagger.params['deviceId'].value;
  var groupId = req.swagger.params['groupId'].value;
  var refresh = req.swagger.params['refresh'].value;
  Default.notificationsGET(all,userId,deviceId,groupId,refresh)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificationsIdDELETE = function notificationsIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.notificationsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificationsIdPUT = function notificationsIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Default.notificationsIdPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificationsPOST = function notificationsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.notificationsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificationsTestPOST = function notificationsTestPOST (req, res, next) {
  Default.notificationsTestPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificationsTypesGET = function notificationsTypesGET (req, res, next) {
  Default.notificationsTypesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.permissionsDELETE = function permissionsDELETE (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.permissionsDELETE(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.permissionsPOST = function permissionsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.permissionsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.positionsGET = function positionsGET (req, res, next) {
  var deviceId = req.swagger.params['deviceId'].value;
  var from = req.swagger.params['from'].value;
  var to = req.swagger.params['to'].value;
  var id = req.swagger.params['id'].value;
  Default.positionsGET(deviceId,from,to,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reportsEventsGET = function reportsEventsGET (req, res, next) {
  var from = req.swagger.params['from'].value;
  var to = req.swagger.params['to'].value;
  var deviceId = req.swagger.params['deviceId'].value;
  var groupId = req.swagger.params['groupId'].value;
  var type = req.swagger.params['type'].value;
  Default.reportsEventsGET(from,to,deviceId,groupId,type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reportsRouteGET = function reportsRouteGET (req, res, next) {
  var from = req.swagger.params['from'].value;
  var to = req.swagger.params['to'].value;
  var deviceId = req.swagger.params['deviceId'].value;
  var groupId = req.swagger.params['groupId'].value;
  Default.reportsRouteGET(from,to,deviceId,groupId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reportsStopsGET = function reportsStopsGET (req, res, next) {
  var from = req.swagger.params['from'].value;
  var to = req.swagger.params['to'].value;
  var deviceId = req.swagger.params['deviceId'].value;
  var groupId = req.swagger.params['groupId'].value;
  Default.reportsStopsGET(from,to,deviceId,groupId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reportsSummaryGET = function reportsSummaryGET (req, res, next) {
  var from = req.swagger.params['from'].value;
  var to = req.swagger.params['to'].value;
  var deviceId = req.swagger.params['deviceId'].value;
  var groupId = req.swagger.params['groupId'].value;
  Default.reportsSummaryGET(from,to,deviceId,groupId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reportsTripsGET = function reportsTripsGET (req, res, next) {
  var from = req.swagger.params['from'].value;
  var to = req.swagger.params['to'].value;
  var deviceId = req.swagger.params['deviceId'].value;
  var groupId = req.swagger.params['groupId'].value;
  Default.reportsTripsGET(from,to,deviceId,groupId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serverGET = function serverGET (req, res, next) {
  Default.serverGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serverPUT = function serverPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.serverPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sessionDELETE = function sessionDELETE (req, res, next) {
  Default.sessionDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sessionGET = function sessionGET (req, res, next) {
  var token = req.swagger.params['token'].value;
  Default.sessionGET(token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sessionPOST = function sessionPOST (req, res, next) {
  var email = req.swagger.params['email'].value;
  var password = req.swagger.params['password'].value;
  Default.sessionPOST(email,password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.statisticsGET = function statisticsGET (req, res, next) {
  var from = req.swagger.params['from'].value;
  var to = req.swagger.params['to'].value;
  Default.statisticsGET(from,to)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersGET = function usersGET (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  Default.usersGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersIdDELETE = function usersIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.usersIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersIdPUT = function usersIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Default.usersIdPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPOST = function usersPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.usersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
